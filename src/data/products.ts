import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Oso Teddy Clásico",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    description: "Un adorable oso de peluche clásico, perfecto para abrazar. Suave y esponjoso.",
    category: "Clásicos",
    inStock: true
  },
  {
    id: 2,
    name: "Oso Gigante Marrón",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1530841344095-b2893194affe?w=400&h=400&fit=crop",
    description: "Un oso de peluche gigante de 1 metro de altura. Ideal para decorar o regalar.",
    category: "Gigantes",
    inStock: true
  },
  {
    id: 3,
    name: "Osito Bebé Rosa",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "Tierno osito rosa perfecto para bebés. Materiales hipoalergénicos.",
    category: "Bebés",
    inStock: true
  },
  {
    id: 4,
    name: "Oso Polar Blanco",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop",
    description: "Hermoso oso polar blanco con pelaje extra suave. Edición especial.",
    category: "Especiales",
    inStock: true
  },
  {
    id: 5,
    name: "Oso Panda Adorable",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=400&fit=crop",
    description: "Cute oso panda con detalles realistas. Muy popular entre los niños.",
    category: "Especiales",
    inStock: true
  },
  {
    id: 6,
    name: "Oso Vintage Marrón",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "Oso de estilo vintage con acabados artesanales. Para coleccionistas.",
    category: "Vintage",
    inStock: false
  }
];