import React from 'react';
import ShoppingCart from './ShoppingCart';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              Osos Peluditos
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
              Inicio
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
              Catálogo
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
              SOBRE NOSOTROS SI!
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contacto
            </a>
          </nav>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;