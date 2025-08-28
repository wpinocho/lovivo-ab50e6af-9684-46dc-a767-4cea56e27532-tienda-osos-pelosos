import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { products } from '../data/products';
import { Heart, Star, Gift, Sparkles, Shield, Moon, Smile, Users, Baby, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 py-20 lg:py-32">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-500"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Floating icons */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="animate-bounce delay-0">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="animate-bounce delay-150">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="animate-bounce delay-300">
                  <Gift className="w-8 h-8 text-purple-500" />
                </div>
                <div className="animate-bounce delay-450">
                  <Sparkles className="w-8 h-8 text-indigo-500" />
                </div>
              </div>

              {/* Main title with gradient text */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                🧸 Osos Peluditos 🧸
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Descubre nuestra adorable colección de osos de peluche. 
                <br className="hidden md:block" />
                <span className="text-pink-600 font-semibold">Perfectos para regalar</span> o para abrazar cuando necesites un poco de <span className="text-purple-600 font-semibold">amor</span>.
              </p>

              {/* Emoji decorations */}
              <div className="flex justify-center space-x-6 mb-10">
                <span className="text-4xl md:text-5xl animate-pulse">🐻</span>
                <span className="text-4xl md:text-5xl animate-pulse delay-300">💕</span>
                <span className="text-4xl md:text-5xl animate-pulse delay-600">🎁</span>
                <span className="text-4xl md:text-5xl animate-pulse delay-900">✨</span>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Colección
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Regalos Especiales
                </Button>
              </div>

              {/* Stats or features */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-2">🚚</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Envío Gratis</h3>
                  <p className="text-gray-600 text-sm">En compras mayores a $50</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Calidad Premium</h3>
                  <p className="text-gray-600 text-sm">Materiales hipoalergénicos</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-2">💝</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Empaque Regalo</h3>
                  <p className="text-gray-600 text-sm">Sin costo adicional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir nuestros Osos Peluditos? 🌟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada oso está diseñado para brindar amor, confort y alegría. Descubre todos los beneficios que nuestros peluches pueden aportar a tu vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beneficio 1 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-pink-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Reduce el Estrés</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    Los abrazos con nuestros osos liberan endorfinas y reducen los niveles de cortisol, ayudándote a sentirte más relajado y feliz.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Beneficio 2 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-violet-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-purple-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Moon className="w-10 h-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Mejora el Sueño</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    La sensación de seguridad y confort que proporcionan ayuda a conciliar el sueño más fácilmente y tener un descanso reparador.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Beneficio 3 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Seguridad Emocional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    Proporcionan una sensación de protección y compañía, especialmente útil para niños y personas que viven solas.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Beneficio 4 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Smile className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Estimula la Felicidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    Su textura suave y diseño adorable activan la liberación de serotonina, el neurotransmisor de la felicidad.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Beneficio 5 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-amber-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-yellow-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Fortalece Vínculos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    Perfectos para regalar, ayudan a expresar amor y cariño, fortaleciendo las relaciones familiares y de amistad.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Beneficio 6 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 to-blue-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-indigo-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Baby className="w-10 h-10 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Desarrollo Infantil</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    Estimulan la imaginación, desarrollan habilidades sociales y emocionales, y proporcionan confort durante el crecimiento.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action dentro de la sección de beneficios */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">¡Experimenta todos estos beneficios hoy! 🎉</h3>
                <p className="text-xl mb-6 opacity-90">
                  Miles de familias ya disfrutan de la magia de nuestros Osos Peluditos
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Encuentra tu Oso Perfecto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16">
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