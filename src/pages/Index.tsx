import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Самопожертвование насекомых</h1>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('termites')} className="text-sm hover:text-primary transition-colors">Термиты</button>
              <button onClick={() => scrollToSection('ants')} className="text-sm hover:text-primary transition-colors">Муравьи</button>
              <Link to="/insects" className="text-sm hover:text-primary transition-colors font-medium">
                Насекомые
              </Link>
              <button onClick={() => scrollToSection('catalog')} className="text-sm hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('research')} className="text-sm hover:text-primary transition-colors">Исследования</button>
              <button onClick={() => scrollToSection('library')} className="text-sm hover:text-primary transition-colors">Библиотека</button>
              <button onClick={() => scrollToSection('terms')} className="text-sm hover:text-primary transition-colors">Термины</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Защитное самопожертвование<br />в мире насекомых
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
            Научно-образовательный портал, посвященный уникальному защитному механизму 
            насекомых — аутотизу (autothysis). Изучаем виды, проводящие защитное 
            самопожертвование ради выживания колонии.
          </p>
          <Link to="/insects">
            <Button size="lg" className="mb-8 text-lg px-8">
              <Icon name="Bug" className="w-5 h-5 mr-2" />
              Открыть полный каталог 40 видов
            </Button>
          </Link>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <Icon name="Microscope" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">40+ видов</h3>
              <p className="text-muted-foreground">В нашей научной базе данных</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <Icon name="BookOpen" className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">200+ статей</h3>
              <p className="text-muted-foreground">Научных публикаций и исследований</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <Icon name="Users" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Сообщество</h3>
              <p className="text-muted-foreground">Исследователей со всего мира</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="termites" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Bug" className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold">Термиты-камикадзе</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/9cffd00a-7c2f-4ca9-925f-7ac3cc5009c6/files/3f96adac-1078-48c1-b5e4-ca965556759f.jpg" 
                alt="Neocapritermes taracua"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">Neocapritermes taracua</Badge>
              <h3 className="text-2xl font-semibold mb-4">Neocapritermes taracua</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Вид термитов, обнаруженный в тропических лесах Французской Гвианы. 
                Солдаты этого вида обладают уникальным защитным механизмом: при угрозе 
                колонии они разрывают себя, высвобождая токсичные химические вещества 
                из специальных желез.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Механизм защиты</AccordionTrigger>
                  <AccordionContent>
                    Рабочие термиты старшего возраста развивают на спине два крупных 
                    железистых мешка, заполненных синими кристаллами белков. При разрыве 
                    эти вещества смешиваются с секретом слюнных желез, образуя токсичную 
                    липкую смесь, парализующую врагов.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Эволюционное значение</AccordionTrigger>
                  <AccordionContent>
                    Это классический пример альтруистического поведения в эволюционной 
                    биологии. Самопожертвование отдельных особей увеличивает шансы 
                    выживания генетически родственных членов колонии, что в итоге 
                    способствует сохранению генетической линии.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Химический состав</AccordionTrigger>
                  <AccordionContent>
                    Синие кристаллы содержат медь-связывающие белки, которые при 
                    окислении становятся высокотоксичными. Липкая консистенция секрета 
                    обеспечивает длительный контакт яда с покровами врага.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="MapPin" className="w-5 h-5 text-primary" />
                Ареал обитания
              </h4>
              <p className="text-sm text-muted-foreground">
                Тропические леса Французской Гвианы, Суринам, северная Бразилия
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Ruler" className="w-5 h-5 text-primary" />
                Размеры
              </h4>
              <p className="text-sm text-muted-foreground">
                Солдаты: 3-4 мм в длину. Рабочие: 2-3 мм
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Home" className="w-5 h-5 text-primary" />
                Структура колонии
              </h4>
              <p className="text-sm text-muted-foreground">
                До 100,000 особей. Иерархия: королева, король, солдаты, рабочие
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="ants" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Sparkles" className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl font-bold">Муравьи-камикадзе</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-secondary">Colobopsis explodens</Badge>
              <h3 className="text-2xl font-semibold mb-4">Colobopsis explodens</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Виды муравьев, открытые в Юго-Восточной Азии (Борнео, Таиланд). 
                Рабочие муравьи способны разрывать собственное тело, выделяя липкий 
                токсичный секрет желтого цвета, который обездвиживает противника.
              </p>
              
              <Tabs defaultValue="defense" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="defense">Защита</TabsTrigger>
                  <TabsTrigger value="behavior">Поведение</TabsTrigger>
                  <TabsTrigger value="species">Виды</TabsTrigger>
                </TabsList>
                <TabsContent value="defense" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    При угрозе муравей сжимает свое тело до тех пор, пока стенки 
                    не разорвутся. Содержимое увеличенных нижнечелюстных желез 
                    выделяется наружу, создавая защитный барьер.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Состав секрета:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Феромоны тревоги</li>
                      <li>• Липкие углеводороды</li>
                      <li>• Раздражающие соединения</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="behavior" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Самопожертвование является последней линией защиты. Муравьи 
                    используют его только когда колония находится в критической опасности.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Интересно, что не все рабочие обладают одинаковой способностью 
                    к взрыву — специализация зависит от возраста и роли в колонии.
                  </p>
                </TabsContent>
                <TabsContent value="species" className="space-y-2">
                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <p className="font-medium">C. explodens</p>
                    <p className="text-sm text-muted-foreground">Борнео, Малайзия</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <p className="font-medium">C. saundersi</p>
                    <p className="text-sm text-muted-foreground">Юго-Восточная Азия</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <p className="font-medium">C. cylindricus</p>
                    <p className="text-sm text-muted-foreground">Таиланд, Малайзия</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/9cffd00a-7c2f-4ca9-925f-7ac3cc5009c6/files/a0bb8498-d58a-488f-b1fb-01f7e8bb792a.jpg" 
                alt="Colobopsis explodens"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Database" className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold">Каталог видов</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Полный каталог задокументированных видов насекомых с защитным самопожертвованием
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Neocapritermes taracua", family: "Termitidae", location: "Южная Америка", status: "Изучен" },
              { name: "Colobopsis explodens", family: "Formicidae", location: "Борнео", status: "Изучен" },
              { name: "Colobopsis saundersi", family: "Formicidae", location: "Малайзия", status: "Изучен" },
              { name: "Globitermes sulphureus", family: "Termitidae", location: "Азия", status: "В изучении" },
              { name: "Camponotus cylindricus", family: "Formicidae", location: "Борнео", status: "Изучен" },
              { name: "Anoplotermes pacificus", family: "Termitidae", location: "Амазония", status: "В изучении" },
              { name: "Termes hospes", family: "Termitidae", location: "Бразилия", status: "Изучен" },
              { name: "Coptotermes formosanus", family: "Rhinotermitidae", location: "Тайвань", status: "Изучен" },
              { name: "Macrotermes carbonarius", family: "Termitidae", location: "Индия", status: "Изучен" },
              { name: "Nasutitermes corniger", family: "Termitidae", location: "Карибы", status: "Изучен" },
              { name: "Colobopsis leonardi", family: "Formicidae", location: "Таиланд", status: "Изучен" },
              { name: "Dentispicotermes globiceps", family: "Termitidae", location: "Гвиана", status: "Изучен" },
            ].map((species, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{species.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {species.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Icon name="Dna" className="w-4 h-4" />
                    {species.family}
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="MapPin" className="w-4 h-4" />
                    {species.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/insects">
              <Button size="lg" variant="outline">
                <Icon name="ArrowRight" className="w-5 h-5 mr-2" />
                Посмотреть все 40 видов в энциклопедии
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="FlaskConical" className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl font-bold">Научные исследования</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Текущие проекты</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-1">Химический анализ защитных секретов</h4>
                  <p className="text-sm text-muted-foreground">Университет Тулузы, 2024-2026</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Исследование молекулярной структуры токсинов термитов N. taracua
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-1">Эволюция альтруистического поведения</h4>
                  <p className="text-sm text-muted-foreground">MIT, 2023-2025</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Моделирование эволюционных преимуществ самопожертвования
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Ключевые открытия</h3>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium mb-2">2017 - Открытие C. explodens</p>
                  <p className="text-sm text-muted-foreground">
                    Описание нового вида взрывающихся муравьев на Борнео
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium mb-2">2012 - Механизм N. taracua</p>
                  <p className="text-sm text-muted-foreground">
                    Расшифровка биохимического механизма самоподрыва термитов
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium mb-2">2005 - Генетическая основа</p>
                  <p className="text-sm text-muted-foreground">
                    Идентификация генов, ответственных за развитие защитных желез
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="library" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Library" className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold">Библиотека научных статей</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Autothysis in Neocapritermes taracua soldiers: A morphological and chemical analysis",
                authors: "Šobotník, J., Bourguignon, T., et al.",
                journal: "Biological Journal of the Linnean Society",
                year: 2012,
                citations: 156
              },
              {
                title: "Exploding ants: The defensive behavior of Colobopsis explodens",
                authors: "Laciny, A., Zettel, H., Kopchinskiy, A., et al.",
                journal: "ZooKeys",
                year: 2018,
                citations: 89
              },
              {
                title: "Evolution of altruistic behavior in social insects",
                authors: "Nowak, M.A., Tarnita, C.E., Wilson, E.O.",
                journal: "Nature",
                year: 2010,
                citations: 2340
              },
              {
                title: "Chemical defense mechanisms in termite soldiers",
                authors: "Prestwich, G.D.",
                journal: "Annual Review of Entomology",
                year: 1984,
                citations: 567
              }
            ].map((article, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{article.authors}</p>
                    <p className="text-sm text-muted-foreground">
                      {article.journal}, {article.year}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{article.citations}</p>
                    <p className="text-xs text-muted-foreground">цитирований</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="terms" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="BookMarked" className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl font-bold">Научные термины</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Аутотиз (Autothysis)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Форма альтруистического самопожертвования, при которой организм разрушает 
                собственное тело для защиты колонии. Термин происходит от греческих слов 
                "auto" (сам) и "thysis" (жертвоприношение).
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Альтруизм</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Поведение, при котором организм приносит пользу другим особям в ущерб 
                собственной приспособленности. В социальных насекомых обусловлено 
                генетическим родством особей в колонии.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Экзокринные железы</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Железы внешней секреции, выделяющие вещества на поверхность тела или 
                в окружающую среду. У термитов-камикадзе содержат токсические соединения.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Каста солдат</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Специализированная группа особей в колонии социальных насекомых, 
                отвечающая за защиту. Обладают увеличенными мандибулами и защитными 
                железами.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Феромоны тревоги</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Химические сигналы, выделяемые при опасности для мобилизации колонии. 
                При аутотизе высвобождаются в больших количествах, привлекая подкрепление.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Эусоциальность</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Высшая форма социальной организации, при которой существует разделение 
                на репродуктивные и нерепродуктивные касты, кооперативный уход за потомством 
                и перекрывание поколений.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Icon name="Mail" className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold">Контакты</h2>
          </div>
          <Card className="p-8">
            <p className="text-center text-muted-foreground mb-8">
              Свяжитесь с нами для сотрудничества, предложений или вопросов о наших исследованиях
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Организация</label>
                <Input placeholder="Университет или исследовательский институт" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea 
                  placeholder="Опишите ваш вопрос или предложение о сотрудничестве" 
                  rows={6}
                />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">О портале</h3>
              <p className="text-sm opacity-80">
                Научно-образовательный ресурс о защитном самопожертвовании насекомых
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('termites')}>Термиты</button></li>
                <li><button onClick={() => scrollToSection('ants')}>Муравьи</button></li>
                <li><button onClick={() => scrollToSection('catalog')}>Каталог</button></li>
                <li><button onClick={() => scrollToSection('library')}>Библиотека</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Научные статьи</li>
                <li>Исследования</li>
                <li>База данных</li>
                <li>Глоссарий</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <p className="text-sm opacity-80">
                research@insects-sacrifice.org
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            <p>© 2024 Самопожертвование насекомых. Научно-образовательный портал</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;