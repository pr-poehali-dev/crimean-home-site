import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section
        id="home"
        className="pt-24 pb-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                Строим дома
                <br />
                <span className="text-primary">вашей мечты</span>
                <br />в Крыму
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное строительство домов под ключ. Современные технологии,
                качественные материалы и гарантия до 10 лет.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToCalculator}>
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" className="mr-2" />
                  Заказать звонок
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <p className="text-4xl font-heading font-bold text-primary">250+</p>
                  <p className="text-sm text-muted-foreground mt-1">Построенных домов</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-heading font-bold text-secondary">14</p>
                  <p className="text-sm text-muted-foreground mt-1">Лет опыта</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-heading font-bold text-accent">10</p>
                  <p className="text-sm text-muted-foreground mt-1">Лет гарантии</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/5f48f631-6184-4e04-bf4a-cd201d6f1be2.jpg"
                alt="Современный дом в Крыму"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground">
              Полный цикл строительства от проектирования до сдачи объекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'PenTool',
                title: 'Проектирование',
                description: 'Индивидуальное проектирование с учетом всех ваших пожеланий',
              },
              {
                icon: 'Hammer',
                title: 'Строительство',
                description: 'Возведение домов под ключ с использованием современных технологий',
              },
              {
                icon: 'Paintbrush',
                title: 'Отделка',
                description: 'Внутренняя и внешняя отделка любой сложности',
              },
              {
                icon: 'Key',
                title: 'Под ключ',
                description: 'Полностью готовый дом с коммуникациями и отделкой',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Популярные проекты
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовые проекты домов для строительства в Крыму
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Вилла "Южная"',
                area: '180 м²',
                floors: '2 этажа',
                price: '8 100 000 ₽',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/5f48f631-6184-4e04-bf4a-cd201d6f1be2.jpg',
              },
              {
                name: 'Коттедж "Уют"',
                area: '120 м²',
                floors: '1 этаж',
                price: '4 200 000 ₽',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/bcb1dc04-9917-4241-b066-d45d79b857f4.jpg',
              },
              {
                name: 'Особняк "Премиум"',
                area: '250 м²',
                floors: '2 этажа',
                price: '11 250 000 ₽',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/a92a97c3-ba88-4a8c-a12e-3e014f0c6fab.jpg',
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    {project.price}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-heading font-bold mb-4">{project.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Home" size={18} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Layers" size={18} />
                      <span>{project.floors}</span>
                    </div>
                  </div>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши работы
            </h2>
            <p className="text-lg text-muted-foreground">
              Портфолио построенных домов в Крыму
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Дом в Ялте',
                description: 'Строительство двухэтажного дома с бассейном',
                year: '2023',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/5f48f631-6184-4e04-bf4a-cd201d6f1be2.jpg',
              },
              {
                title: 'Вилла в Алуште',
                description: 'Современный дом с панорамными окнами',
                year: '2023',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/bcb1dc04-9917-4241-b066-d45d79b857f4.jpg',
              },
              {
                title: 'Коттедж в Феодосии',
                description: 'Каркасный дом с террасой',
                year: '2022',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/a92a97c3-ba88-4a8c-a12e-3e014f0c6fab.jpg',
              },
              {
                title: 'Особняк в Севастополе',
                description: 'Трехэтажный дом из кирпича',
                year: '2022',
                image: 'https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/5f48f631-6184-4e04-bf4a-cd201d6f1be2.jpg',
              },
            ].map((work, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm mb-2">{work.year}</p>
                      <p className="text-lg">{work.description}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-heading font-bold">{work.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/dd516aa7-550f-41bc-9726-8a8a1b2139ff/files/a92a97c3-ba88-4a8c-a12e-3e014f0c6fab.jpg"
                alt="О компании"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                КрымДом — это команда профессионалов с 14-летним опытом строительства
                индивидуальных домов в Крыму. Мы реализовали более 250 проектов,
                создавая комфортные и надежные дома для наших клиентов.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: 'CheckCircle2',
                    text: 'Используем только сертифицированные материалы',
                  },
                  {
                    icon: 'CheckCircle2',
                    text: 'Соблюдаем все строительные нормы и стандарты',
                  },
                  {
                    icon: 'CheckCircle2',
                    text: 'Предоставляем гарантию до 10 лет',
                  },
                  {
                    icon: 'CheckCircle2',
                    text: 'Строго придерживаемся сроков строительства',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name={item.icon as any} className="text-primary mt-1" size={20} />
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Calculator />

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовы ответить на все ваши вопросы
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Phone',
                  title: 'Телефон',
                  content: '+7 (978) 123-45-67',
                },
                {
                  icon: 'Mail',
                  title: 'Email',
                  content: 'info@krymdom.ru',
                },
                {
                  icon: 'MapPin',
                  title: 'Адрес',
                  content: 'г. Симферополь, ул. Строительная, 1',
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={contact.icon as any} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground">{contact.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;