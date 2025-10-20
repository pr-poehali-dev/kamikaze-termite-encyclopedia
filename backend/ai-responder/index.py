import json
import os
import psycopg2
from typing import Dict, Any
from datetime import datetime, timedelta
import time

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Sends AI responses to contact messages after 10 minutes
    Args: event - dict with httpMethod; context - object with request_id
    Returns: HTTP response dict with processed count
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    openai_api_key = os.environ.get('OPENAI_API_KEY')
    
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database configuration missing'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    ten_minutes_ago = datetime.now() - timedelta(minutes=10)
    
    cur.execute(
        "SELECT id, name, email, message FROM contact_messages WHERE ai_responded_at IS NULL AND created_at <= %s ORDER BY created_at LIMIT 10",
        (ten_minutes_ago,)
    )
    
    messages = cur.fetchall()
    processed_count = 0
    
    for msg in messages:
        msg_id, name, email, user_message = msg
        
        if openai_api_key and openai_api_key.startswith('sk-'):
            import requests
            
            response = requests.post(
                'https://api.openai.com/v1/chat/completions',
                headers={
                    'Authorization': f'Bearer {openai_api_key}',
                    'Content-Type': 'application/json'
                },
                json={
                    'model': 'gpt-4o-mini',
                    'messages': [
                        {
                            'role': 'system',
                            'content': 'Ты - научный ассистент портала о насекомых-камикадзе. Отвечай вежливо, профессионально и по-научному. Благодари за интерес к проекту. Упомяни, что разработчик очень занят, но обязательно ответит лично позже. Ответ на русском языке, до 150 слов.'
                        },
                        {
                            'role': 'user',
                            'content': f'Пользователь {name} написал: {user_message}'
                        }
                    ],
                    'max_tokens': 300,
                    'temperature': 0.7
                }
            )
            
            if response.status_code == 200:
                ai_response = response.json()['choices'][0]['message']['content']
            else:
                ai_response = f'Здравствуйте, {name}! Спасибо за ваше сообщение о термитах-камикадзе. Разработчик получил ваш запрос и свяжется с вами в ближайшее время. Сейчас команда очень загружена исследованиями, но ваш вопрос важен для нас!'
        else:
            ai_response = f'Здравствуйте, {name}! Благодарим за интерес к нашему научному порталу о самопожертвовании насекомых. Ваше сообщение получено и передано разработчику. В данный момент команда занята важными исследованиями, но мы обязательно свяжемся с вами лично в ближайшее время. С уважением, команда проекта.'
        
        cur.execute(
            "UPDATE contact_messages SET ai_response = %s, ai_responded_at = %s WHERE id = %s",
            (ai_response, datetime.now(), msg_id)
        )
        conn.commit()
        processed_count += 1
        
        time.sleep(0.5)
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'success': True,
            'processed': processed_count,
            'message': f'Обработано сообщений: {processed_count}'
        }),
        'isBase64Encoded': False
    }
