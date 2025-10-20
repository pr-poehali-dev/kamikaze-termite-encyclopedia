import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Insect {
  name: string;
  latinName: string;
  family: string;
  order: string;
  location: string;
  size: string;
  defenseType: string;
  discovered: string;
  status: "Изучен" | "В изучении" | "Редкий";
}

const insects: Insect[] = [
  { name: "Neocapritermes taracua", latinName: "N. taracua", family: "Termitidae", order: "Isoptera", location: "Французская Гвиана", size: "3-4 мм", defenseType: "Взрывной аутотиз", discovered: "2012", status: "Изучен" },
  { name: "Colobopsis explodens", latinName: "C. explodens", family: "Formicidae", order: "Hymenoptera", location: "Борнео", size: "8-10 мм", defenseType: "Разрыв брюшка", discovered: "2018", status: "Изучен" },
  { name: "Colobopsis saundersi", latinName: "C. saundersi", family: "Formicidae", order: "Hymenoptera", location: "Малайзия", size: "7-9 мм", defenseType: "Взрывная защита", discovered: "1916", status: "Изучен" },
  { name: "Globitermes sulphureus", latinName: "G. sulphureus", family: "Termitidae", order: "Isoptera", location: "Юго-Восточная Азия", size: "2-3 мм", defenseType: "Желтый секрет", discovered: "1949", status: "Изучен" },
  { name: "Camponotus cylindricus", latinName: "C. cylindricus", family: "Formicidae", order: "Hymenoptera", location: "Борнео", size: "10-12 мм", defenseType: "Липкий секрет", discovered: "1861", status: "Изучен" },
  { name: "Anoplotermes pacificus", latinName: "A. pacificus", family: "Termitidae", order: "Isoptera", location: "Центральная Америка", size: "2-3 мм", defenseType: "Химический аутотиз", discovered: "2010", status: "В изучении" },
  { name: "Termes hospes", latinName: "T. hospes", family: "Termitidae", order: "Isoptera", location: "Бразилия", size: "4-5 мм", defenseType: "Разрыв желез", discovered: "2008", status: "Изучен" },
  { name: "Coptotermes formosanus", latinName: "C. formosanus", family: "Rhinotermitidae", order: "Isoptera", location: "Тайвань", size: "3-4 мм", defenseType: "Токсичный секрет", discovered: "1909", status: "Изучен" },
  { name: "Macrotermes carbonarius", latinName: "M. carbonarius", family: "Termitidae", order: "Isoptera", location: "Индия", size: "5-7 мм", defenseType: "Защитная жидкость", discovered: "1913", status: "Изучен" },
  { name: "Nasutitermes corniger", latinName: "N. corniger", family: "Termitidae", order: "Isoptera", location: "Карибы", size: "3-4 мм", defenseType: "Носовая струя", discovered: "1855", status: "Изучен" },
  { name: "Colobopsis leonardi", latinName: "C. leonardi", family: "Formicidae", order: "Hymenoptera", location: "Таиланд", size: "6-8 мм", defenseType: "Взрывной механизм", discovered: "2018", status: "Изучен" },
  { name: "Colobopsis badia", latinName: "C. badia", family: "Formicidae", order: "Hymenoptera", location: "Малайзия", size: "7-9 мм", defenseType: "Разрыв брюшка", discovered: "2017", status: "В изучении" },
  { name: "Dentispicotermes globiceps", latinName: "D. globiceps", family: "Termitidae", order: "Isoptera", location: "Гвиана", size: "3-4 мм", defenseType: "Химическая защита", discovered: "2014", status: "Изучен" },
  { name: "Ruptitermes reconditus", latinName: "R. reconditus", family: "Termitidae", order: "Isoptera", location: "Амазония", size: "2-3 мм", defenseType: "Разрывная защита", discovered: "2015", status: "В изучении" },
  { name: "Convexitermes cyphergaster", latinName: "C. cyphergaster", family: "Termitidae", order: "Isoptera", location: "Бразилия", size: "3-5 мм", defenseType: "Секреторная защита", discovered: "2011", status: "Изучен" },
  { name: "Embiratermes neotenicus", latinName: "E. neotenicus", family: "Termitidae", order: "Isoptera", location: "Южная Америка", size: "2-4 мм", defenseType: "Аутотиз", discovered: "2013", status: "Изучен" },
  { name: "Colobopsis obliqua", latinName: "C. obliqua", family: "Formicidae", order: "Hymenoptera", location: "Индонезия", size: "8-10 мм", defenseType: "Взрывная защита", discovered: "2019", status: "В изучении" },
  { name: "Armitermes holmgreni", latinName: "A. holmgreni", family: "Termitidae", order: "Isoptera", location: "Панама", size: "3-4 мм", defenseType: "Химический секрет", discovered: "2009", status: "Изучен" },
  { name: "Colobopsis corallina", latinName: "C. corallina", family: "Formicidae", order: "Hymenoptera", location: "Филиппины", size: "7-9 мм", defenseType: "Разрыв желез", discovered: "2018", status: "Изучен" },
  { name: "Syntermes molestus", latinName: "S. molestus", family: "Termitidae", order: "Isoptera", location: "Аргентина", size: "4-6 мм", defenseType: "Защитный секрет", discovered: "2010", status: "Изучен" },
  { name: "Colobopsis clerodendri", latinName: "C. clerodendri", family: "Formicidae", order: "Hymenoptera", location: "Вьетнам", size: "6-8 мм", defenseType: "Взрывной аутотиз", discovered: "2019", status: "В изучении" },
  { name: "Curvitermes odontognathus", latinName: "C. odontognathus", family: "Termitidae", order: "Isoptera", location: "Колумбия", size: "3-5 мм", defenseType: "Токсичная жидкость", discovered: "2012", status: "Изучен" },
  { name: "Labiotermes labralis", latinName: "L. labralis", family: "Termitidae", order: "Isoptera", location: "Эквадор", size: "2-4 мм", defenseType: "Лабиальные железы", discovered: "2011", status: "Изучен" },
  { name: "Colobopsis riehlii", latinName: "C. riehlii", family: "Formicidae", order: "Hymenoptera", location: "Суматра", size: "7-9 мм", defenseType: "Разрыв брюшка", discovered: "2017", status: "Изучен" },
  { name: "Orthognathotermes wheeleri", latinName: "O. wheeleri", family: "Termitidae", order: "Isoptera", location: "Перу", size: "3-4 мм", defenseType: "Химическая защита", discovered: "2014", status: "Изучен" },
  { name: "Colobopsis marijonensis", latinName: "C. marijonensis", family: "Formicidae", order: "Hymenoptera", location: "Лаос", size: "8-10 мм", defenseType: "Взрывная защита", discovered: "2020", status: "В изучении" },
  { name: "Rhynchotermes bulbinasus", latinName: "R. bulbinasus", family: "Termitidae", order: "Isoptera", location: "Венесуэла", size: "3-5 мм", defenseType: "Носовая секреция", discovered: "2013", status: "Изучен" },
  { name: "Procornitermes araujoi", latinName: "P. araujoi", family: "Termitidae", order: "Isoptera", location: "Бразилия", size: "4-5 мм", defenseType: "Фронтальный секрет", discovered: "2010", status: "Изучен" },
  { name: "Colobopsis schmitzi", latinName: "C. schmitzi", family: "Formicidae", order: "Hymenoptera", location: "Борнео", size: "6-8 мм", defenseType: "Защитный механизм", discovered: "1906", status: "Изучен" },
  { name: "Velocitermes heteropterus", latinName: "V. heteropterus", family: "Termitidae", order: "Isoptera", location: "Мексика", size: "2-4 мм", defenseType: "Быстрая секреция", discovered: "2015", status: "В изучении" },
  { name: "Colobopsis rotunda", latinName: "C. rotunda", family: "Formicidae", order: "Hymenoptera", location: "Камбоджа", size: "7-9 мм", defenseType: "Разрыв желез", discovered: "2019", status: "Изучен" },
  { name: "Angularitermes angularis", latinName: "A. angularis", family: "Termitidae", order: "Isoptera", location: "Коста-Рика", size: "3-4 mм", defenseType: "Угловая защита", discovered: "2011", status: "Изучен" },
  { name: "Subulitermes microsoldatus", latinName: "S. microsoldatus", family: "Termitidae", order: "Isoptera", location: "Гватемала", size: "2-3 мм", defenseType: "Микросекреция", discovered: "2016", status: "В изучении" },
  { name: "Colobopsis truncata", latinName: "C. truncata", family: "Formicidae", order: "Hymenoptera", location: "Мьянма", size: "8-10 мм", defenseType: "Взрывной аутотиз", discovered: "2021", status: "Редкий" },
  { name: "Ereymatermes rotundiceps", latinName: "E. rotundiceps", family: "Termitidae", order: "Isoptera", location: "Никарагуа", size: "3-5 мм", defenseType: "Круговая защита", discovered: "2012", status: "Изучен" },
  { name: "Colobopsis nipponica", latinName: "C. nipponica", family: "Formicidae", order: "Hymenoptera", location: "Япония", size: "6-8 мм", defenseType: "Защитный секрет", discovered: "2017", status: "Изучен" },
  { name: "Silvestritermes holmgreni", latinName: "S. holmgreni", family: "Termitidae", order: "Isoptera", location: "Гондурас", size: "3-4 мм", defenseType: "Серебристый секрет", discovered: "2010", status: "Изучен" },
  { name: "Colobopsis vitrea", latinName: "C. vitrea", family: "Formicidae", order: "Hymenoptera", location: "Шри-Ланка", size: "7-9 мм", defenseType: "Прозрачная защита", discovered: "2018", status: "В изучении" },
  { name: "Cyranotermes timuassu", latinName: "C. timuassu", family: "Termitidae", order: "Isoptera", location: "Суринам", size: "2-4 мм", defenseType: "Носовой аутотиз", discovered: "2014", status: "Изучен" },
  { name: "Colobopsis modiglianii", latinName: "C. modiglianii", family: "Formicidae", order: "Hymenoptera", location: "Ява", size: "8-10 мм", defenseType: "Разрыв брюшка", discovered: "2020", status: "Редкий" },
];

const Insects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<string>("Все");
  const [selectedStatus, setSelectedStatus] = useState<string>("Все");

  const filteredInsects = insects.filter(insect => {
    const matchesSearch = insect.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         insect.latinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insect.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOrder = selectedOrder === "Все" || insect.order === selectedOrder;
    const matchesStatus = selectedStatus === "Все" || insect.status === selectedStatus;
    return matchesSearch && matchesOrder && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="ArrowLeft" className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold text-primary">Энциклопедия насекомых</h1>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Icon name="Home" className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Каталог насекомых с защитным самопожертвованием</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полная научная база данных из 40 задокументированных видов насекомых, 
            практикующих аутотиз и другие формы альтруистической защиты
          </p>
        </div>

        <div className="mb-8">
          <img 
            src="https://cdn.poehali.dev/projects/9cffd00a-7c2f-4ca9-925f-7ac3cc5009c6/files/f94c43c0-1e1c-4845-932a-e73336b3c5aa.jpg"
            alt="Коллекция насекомых"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Поиск</label>
              <div className="relative">
                <Icon name="Search" className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input 
                  placeholder="Название, локация..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Отряд</label>
              <select 
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                value={selectedOrder}
                onChange={(e) => setSelectedOrder(e.target.value)}
              >
                <option>Все</option>
                <option>Hymenoptera</option>
                <option>Isoptera</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Статус изучения</label>
              <select 
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option>Все</option>
                <option>Изучен</option>
                <option>В изучении</option>
                <option>Редкий</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Найдено видов: <span className="font-semibold text-foreground">{filteredInsects.length}</span> из {insects.length}
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setSelectedOrder("Все");
                setSelectedStatus("Все");
              }}
            >
              <Icon name="X" className="w-4 h-4 mr-2" />
              Сбросить фильтры
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsects.map((insect, idx) => (
            <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:scale-105 cursor-pointer animate-fade-in">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{insect.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{insect.latinName}</p>
                </div>
                <Badge 
                  variant={insect.status === "Изучен" ? "default" : insect.status === "В изучении" ? "secondary" : "destructive"}
                  className="text-xs"
                >
                  {insect.status}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Dna" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">{insect.family}</p>
                    <p className="text-muted-foreground text-xs">{insect.order}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{insect.location}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Icon name="Ruler" className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{insect.size}</p>
                </div>

                <div className="flex items-start gap-2">
                  <Icon name="Shield" className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium text-secondary">{insect.defenseType}</p>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    <Icon name="Calendar" className="w-3 h-3 inline mr-1" />
                    Открыт: {insect.discovered}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredInsects.length === 0 && (
          <Card className="p-12 text-center">
            <Icon name="SearchX" className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground mb-4">
              Попробуйте изменить параметры поиска или сбросить фильтры
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedOrder("Все");
                setSelectedStatus("Все");
              }}
            >
              Сбросить фильтры
            </Button>
          </Card>
        )}

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">40</div>
            <p className="text-muted-foreground">Видов в каталоге</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">2</div>
            <p className="text-muted-foreground">Отряда насекомых</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-muted-foreground">Стран обитания</p>
          </Card>
        </div>
      </div>

      <footer className="bg-foreground text-background py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2024 Самопожертвование насекомых. Научно-образовательный портал
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Insects;
