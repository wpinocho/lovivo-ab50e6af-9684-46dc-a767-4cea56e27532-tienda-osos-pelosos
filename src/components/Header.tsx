import React from 'react';
import ShoppingCart from './ShoppingCart';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('/')}>
            <Heart className="w-8 h-8 text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              Peluditos Favoritos
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Inicio
            </button>
            <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors">
              El Mejor Catálogo
            </a>
            <button 
              onClick={() => handleNavigation('/sobre-nosotros')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              SOBRE NOSOTROS SI!
            </button>
          </nav>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;