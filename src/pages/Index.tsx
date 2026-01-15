import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    equipment: '',
    message: ''
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
    });
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      equipment: '',
      message: ''
    });
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Капитальный ремонт',
      description: 'Полное восстановление горнодобывающей и сельскохозяйственной техники с гарантией качества'
    },
    {
      icon: 'Cog',
      title: 'Модернизация оборудования',
      description: 'Улучшение характеристик и продление срока службы техники с использованием современных технологий'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Диагностика и ТО',
      description: 'Профессиональная диагностика, техническое обслуживание и предупреждение поломок'
    },
    {
      icon: 'Package',
      title: 'Поставка запчастей',
      description: 'Оригинальные и качественные запчасти для любой техники со склада и под заказ'
    }
  ];

  const equipment = [
    { name: 'Экскаваторы', icon: 'Construction', category: 'mining' },
    { name: 'Бульдозеры', icon: 'Truck', category: 'mining' },
    { name: 'Комбайны', icon: 'Wheat', category: 'agriculture' },
    { name: 'Тракторы', icon: 'Tractor', category: 'agriculture' },
    { name: 'Погрузчики', icon: 'Container', category: 'mining' },
    { name: 'Самосвалы', icon: 'TruckIcon', category: 'mining' },
    { name: 'Буровые установки', icon: 'Drill', category: 'mining' }
  ];

  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  const portfolio = [
    {
      title: 'Восстановление карьерного экскаватора',
      description: 'Капитальный ремонт гидравлической системы и замена основных узлов',
      stats: '45 дней работы',
      image: 'https://cdn.poehali.dev/projects/be5de27e-b4a3-4870-a484-00870194878c/files/f61ce8c5-9892-40c8-9a5e-216bed40b786.jpg'
    },
    {
      title: 'Модернизация комбайна',
      description: 'Установка современной системы управления и датчиков контроля',
      stats: 'Эффективность +30%'
    },
    {
      title: 'Ремонт бульдозерного парка',
      description: 'Обслуживание 12 единиц техники горнодобывающего предприятия',
      stats: '12 единиц техники'
    }
  ];

  const blogPosts = [
    {
      title: 'Как продлить срок службы горной техники',
      date: '15 января 2026',
      excerpt: 'Основные правила эксплуатации и обслуживания для максимальной эффективности'
    },
    {
      title: 'Современные технологии в ремонте комбайнов',
      date: '10 января 2026',
      excerpt: 'Обзор новых методов диагностики и восстановления сельхозтехники'
    },
    {
      title: 'Выбор качественных запчастей: руководство',
      date: '5 января 2026',
      excerpt: 'Как отличить оригинал от подделки и избежать дорогостоящих ошибок'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 border-b border-border/50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img src="https://cdn.poehali.dev/files/cac298cc8ca0eb64900e026f2189791c.jpg" alt="ООО МЕРА" className="w-12 h-12 object-contain transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-2xl font-heading font-bold">ООО "МЕРА"</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="hover:text-accent transition-colors">О компании</a>
            <a href="#equipment" className="hover:text-accent transition-colors">Оборудование</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
            <a href="#blog" className="hover:text-accent transition-colors">Блог</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Профессиональный ремонт горнодобывающей и сельхозтехники
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Капитальный ремонт, модернизация и техническое обслуживание промышленного оборудования
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на диагностику
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="FileText" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-heading font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">единиц техники</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное обслуживание промышленной техники любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">О компании</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Мы специализируемся на профессиональном ремонте и модернизации горнодобывающей и сельскохозяйственной техники более 15 лет.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Наша команда инженеров и техников имеет богатый опыт работы с оборудованием любой сложности. Мы используем современные технологии диагностики и ремонта, что позволяет гарантировать высокое качество наших услуг.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Сертифицированные специалисты</h4>
                    <p className="text-muted-foreground">Все инженеры имеют международные сертификаты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Современное оборудование</h4>
                    <p className="text-muted-foreground">Собственная ремонтная база с новейшими станками</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Гарантия качества</h4>
                    <p className="text-muted-foreground">До 24 месяцев гарантии на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <div className="space-y-4">
                <Card className="p-6 bg-primary text-primary-foreground">
                  <Icon name="Award" size={32} className="mb-3 text-accent" />
                  <div className="text-3xl font-heading font-bold mb-1">ISO 9001</div>
                  <div className="text-sm">Сертификат качества</div>
                </Card>
                <Card className="p-6">
                  <Icon name="Users" size={32} className="mb-3 text-accent" />
                  <div className="text-3xl font-heading font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Специалистов</div>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6">
                  <Icon name="Factory" size={32} className="mb-3 text-accent" />
                  <div className="text-3xl font-heading font-bold mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Сервисных центра</div>
                </Card>
                <Card className="p-6 bg-accent text-accent-foreground">
                  <Icon name="TrendingUp" size={32} className="mb-3" />
                  <div className="text-3xl font-heading font-bold mb-1">98%</div>
                  <div className="text-sm">Довольных клиентов</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Типы оборудования</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем со всеми видами горнодобывающей и сельскохозяйственной техники
            </p>
          </div>
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="transition-all duration-300"
            >
              Все категории
            </Button>
            <Button 
              variant={selectedCategory === 'mining' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('mining')}
              className="transition-all duration-300"
            >
              <Icon name="Mountain" size={18} className="mr-2" />
              Горнодобывающая
            </Button>
            <Button 
              variant={selectedCategory === 'agriculture' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('agriculture')}
              className="transition-all duration-300"
            >
              <Icon name="Wheat" size={18} className="mr-2" />
              Сельскохозяйственная
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredEquipment.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <Icon name={item.icon} size={40} className="mx-auto mb-3 text-accent" />
                <p className="font-heading font-semibold">{item.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <Icon name="Image" size={64} className="text-primary-foreground/20" />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {project.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о ремонте и обслуживании техники
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="text-sm text-accent mb-2">{post.date}</div>
                  <CardTitle className="font-heading hover:text-accent transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  <Button variant="link" className="px-0 mt-4 text-accent">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-4">Записаться на консультацию</h2>
              <p className="text-lg text-primary-foreground/90">
                Оставьте заявку, и наш специалист свяжется с вами для уточнения деталей
              </p>
            </div>
            <Card className="animate-slide-up">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input 
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="ООО 'Горнодобыча'"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="info@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="equipment">Тип оборудования *</Label>
                    <Input 
                      id="equipment"
                      value={formData.equipment}
                      onChange={(e) => setFormData({...formData, equipment: e.target.value})}
                      required
                      placeholder="Например: Экскаватор Komatsu PC200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание проблемы</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Опишите, что требуется сделать с техникой"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer group">
                <img src="https://cdn.poehali.dev/files/cac298cc8ca0eb64900e026f2189791c.jpg" alt="ООО МЕРА" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-180" />
                <span className="text-xl font-heading font-bold">ООО "МЕРА"</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональный ремонт и модернизация промышленной техники
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-accent transition-colors">Капитальный ремонт</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Модернизация</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Диагностика</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Запчасти</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a></li>
                <li><a href="#blog" className="hover:text-accent transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span>info@techservice.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span>г. Москва, ул. Промышленная, 15</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2026 ООО "МЕРА". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;