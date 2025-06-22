import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Icon name="Shield" size={32} className="text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-gray-800 font-montserrat">
              Динамо
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Голосование
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Результаты
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
