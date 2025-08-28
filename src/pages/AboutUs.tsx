import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import { Heart, Users, Award, Truck, Shield, Gift, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Heart className="w-12 h-12 text-pink-500 animate-bounce" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Sobre Nosotros
              </h1>
              <Heart className="w-12 h-12 text-pink-500 animate-bounce delay-300" />
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Creando sonrisas y abrazos desde 2020 🧸
            </p>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nuestra Historia 📖
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Todo comenzó con un sueño simple: crear los osos de peluche más adorables y de mejor calidad del mundo. En 2020, fundamos <span className="font-semibold text-pink-600">Peluditos Favoritos</span> con la misión de llevar alegría y confort a hogares de todo el mundo.
                  </p>
                  <p>
                    Cada uno de nuestros osos está diseñado con amor y fabricado con los materiales más suaves y seguros. Creemos que un abrazo puede cambiar el día de cualquier persona, y nuestros osos están aquí para brindar esos abrazos especiales.
                  </p>
                  <p>
                    Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en la tienda de osos de peluche favorita de miles de familias. ¡Y esto es solo el comienzo!
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop"
                    alt="Nuestro primer oso"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                    <Sparkles className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nuestros Valores ✨
              </h2>
              <p className="text-xl text-gray-600">
                Los principios que guían cada abrazo que creamos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-pink-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Amor en Cada Puntada</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Cada oso es creado con dedicación y cariño, asegurando que transmita todo el amor que ponemos en su fabricación.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Seguridad Primero</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Utilizamos únicamente materiales hipoalergénicos y seguros para niños, cumpliendo con los más altos estándares de calidad.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Calidad Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Nos comprometemos a ofrecer solo los mejores materiales y acabados, para que nuestros osos duren toda la vida.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Familia Primero</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Entendemos la importancia de la familia y creamos productos que unen a las personas a través de momentos especiales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-yellow-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Entrega Confiable</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Nos aseguramos de que cada oso llegue a su destino en perfectas condiciones y en el tiempo prometido.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-indigo-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Gift className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Momentos Especiales</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Creamos recuerdos que duran para siempre, siendo parte de los momentos más importantes de nuestros clientes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nuestro Equipo 👥
              </h2>
              <p className="text-xl text-gray-600">
                Las personas detrás de cada sonrisa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                    alt="María González"
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-pink-500 rounded-full p-2">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">María González</h3>
                <p className="text-pink-600 font-medium mb-2">Fundadora & CEO</p>
                <p className="text-gray-600">
                  Apasionada por crear productos que traigan alegría a las familias. Madre de dos niños y amante de los osos de peluche desde pequeña.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                    alt="Carlos Rodríguez"
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carlos Rodríguez</h3>
                <p className="text-blue-600 font-medium mb-2">Director de Calidad</p>
                <p className="text-gray-600">
                  Con 15 años de experiencia en control de calidad, se asegura de que cada oso cumpla con nuestros altos estándares.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
                    alt="Ana Martínez"
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-2">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ana Martínez</h3>
                <p className="text-purple-600 font-medium mb-2">Diseñadora Principal</p>
                <p className="text-gray-600">
                  Artista y diseñadora con un ojo excepcional para los detalles. Cada oso refleja su creatividad y pasión por el diseño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nuestros Logros 🏆
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">10,000+</div>
                <div className="text-gray-600">Osos Vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
                <div className="text-gray-600">Familias Felices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="text-gray-600">Calificación Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Listo para encontrar tu oso perfecto? 🧸
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Explora nuestra colección y encuentra el compañero perfecto para ti o para regalar a alguien especial.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/'}
            >
              <Heart className="w-5 h-5 mr-2" />
              Ver Nuestra Colección
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg mb-2">🧸 Peluditos Favoritos - Donde cada abrazo cuenta 🧸</p>
            <p className="text-gray-400">© 2024 Peluditos Favoritos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default AboutUs;