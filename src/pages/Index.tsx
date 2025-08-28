import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { products } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    return uniqueCategories;
  }, []);

  // Filtrar productos por categoría
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  console.log('Rendered products:', filteredProducts.length);
  console.log('Selected category:', selectedCategory);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              🧸 Osos Peluditos 🧸
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Descubre nuestra adorable colección de osos de peluche. 
              Perfectos para regalar o para abrazar cuando necesites un poco de amor.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-2xl">🐻</span>
              <span className="text-2xl">💕</span>
              <span className="text-2xl">🎁</span>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros Adorables Osos
            </h2>
            
            <ProductFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron productos en esta categoría.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg mb-2">🧸 Osos Peluditos - Donde cada abrazo cuenta 🧸</p>
            <p className="text-gray-400">© 2024 Osos Peluditos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;