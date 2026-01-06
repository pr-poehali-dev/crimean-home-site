import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold text-foreground">
              КрымДом
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
            <Button onClick={() => scrollToSection('calculator')}>
              Рассчитать стоимость
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Контакты
            </button>
            <Button onClick={() => scrollToSection('calculator')} className="mt-2">
              Рассчитать стоимость
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
