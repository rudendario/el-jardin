export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  tag?: string
  imageUrl?: string
  ingredients?: string[]
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'entrantes',
    label: 'Entrantes',
    items: [
      {
        id: 'e1',
        name: 'Tabla de quesos artesanales',
        description:
          'Selección de quesos locales con mermelada de higo, membrillo y pan de nuez tostado',
        price: '14,50 €',
        tag: 'Recomendado',
        imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc7a1b87be8?w=900&q=80&fit=crop',
        ingredients: ['Quesos locales de temporada', 'Mermelada de higo casera', 'Membrillo artesanal', 'Pan de nuez tostado'],
      },
      {
        id: 'e2',
        name: 'Ensalada de temporada',
        description:
          'Hojas tiernas, frutas de temporada, semillas y vinagreta de miel con mostaza antigua',
        price: '11,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80&fit=crop',
        ingredients: ['Hojas tiernas de temporada', 'Frutas frescas de mercado', 'Mix de semillas', 'Miel de flor', 'Mostaza antigua'],
      },
      {
        id: 'e3',
        name: 'Tosta de setas al ajillo',
        description:
          'Setas silvestres salteadas con ajo y tomillo sobre pan de masa madre, con rulo de cabra',
        price: '9,50 €',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80&fit=crop',
        ingredients: ['Setas silvestres de temporada', 'Ajo', 'Tomillo fresco', 'Pan de masa madre', 'Rulo de cabra'],
      },
      {
        id: 'e4',
        name: 'Carpaccio de verduras asadas',
        description:
          'Láminas finas de verduras de temporada asadas, con aceite de albahaca y parmesano',
        price: '10,50 €',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=80&fit=crop',
        ingredients: ['Verduras de temporada (calabacín, berenjena, pimiento)', 'Aceite de albahaca', 'Parmesano curado', 'Flor de sal'],
      },
    ],
  },
  {
    id: 'parrilla',
    label: 'De la Parrilla',
    items: [
      {
        id: 'p1',
        name: 'Entrecot de ternera madurado',
        description:
          'Madurado 21 días, a las brasas con mantequilla de hierbas aromáticas y sal de Maldon',
        price: '26,00 €',
        tag: 'Especialidad',
        imageUrl: 'pictures/entrecot.jpg',
        ingredients: ['Ternera madurada 21 días', 'Brasas de encina', 'Mantequilla de hierbas aromáticas', 'Sal de Maldon'],
      },
      {
        id: 'p2',
        name: 'Secreto ibérico a la llama',
        description:
          'Corte seleccionado, cocción lenta en parrilla con romero fresco y limón siciliano',
        price: '22,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&q=80&fit=crop',
        ingredients: ['Secreto ibérico de bellota', 'Romero fresco', 'Limón siciliano', 'Aceite de oliva virgen extra'],
      },
      {
        id: 'p3',
        name: 'Salmón en costra de hierbas',
        description:
          'Lomo de salmón fresco con costra de perejil y eneldo, con ensalada tibia de lentejas',
        price: '20,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80&fit=crop',
        ingredients: ['Salmón fresco de pesca sostenible', 'Perejil', 'Eneldo', 'Lentejas verdes', 'Vinagreta tibia'],
      },
      {
        id: 'p4',
        name: 'Verduras de temporada a la brasa',
        description:
          'Selección de verduras del día cocinadas a las brasas con aceite de oliva virgen extra',
        price: '15,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=80&fit=crop',
        ingredients: ['Verduras de mercado del día', 'Aceite de oliva virgen extra', 'Flor de sal', 'Hierbas aromáticas'],
      },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    items: [
      {
        id: 'po1',
        name: 'Panna cotta de vainilla',
        description:
          'Textura sedosa con coulis de frutos rojos y flor de lavanda seca',
        price: '7,50 €',
        tag: 'Recomendado',
        imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=80&fit=crop',
        ingredients: ['Nata fresca', 'Vainilla natural de Madagascar', 'Coulis de frutos rojos', 'Flor de lavanda seca'],
      },
      {
        id: 'po2',
        name: 'Tarta de queso al horno',
        description:
          'Versión clásica con base de galleta y mermelada de fruta de la pasión',
        price: '8,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1567171466814-4ede929b3dcc?w=900&q=80&fit=crop',
        ingredients: ['Queso fresco artesanal', 'Base de galleta', 'Huevos de corral', 'Mermelada de maracuyá'],
      },
      {
        id: 'po3',
        name: 'Helado artesanal',
        description: 'Dos bolas de elaboración propia con sabores de temporada',
        price: '6,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=900&q=80&fit=crop',
        ingredients: ['Elaboración propia diaria', 'Ingredientes de temporada', 'Sin colorantes ni conservantes'],
      },
      {
        id: 'po4',
        name: 'Brownie de chocolate negro',
        description:
          'Chocolate 70% con helado de coco y almendra caramelizada',
        price: '7,50 €',
        imageUrl: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=900&q=80&fit=crop',
        ingredients: ['Chocolate negro 70%', 'Mantequilla', 'Helado de coco artesanal', 'Almendra caramelizada'],
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    items: [
      {
        id: 'b1',
        name: 'Vino de la casa',
        description: 'Tinto, blanco o rosado, selección del sumiller',
        price: '4,50 € / copa',
      },
      {
        id: 'b2',
        name: 'Agua mineral',
        description: 'Con o sin gas, 75 cl',
        price: '2,50 €',
      },
      {
        id: 'b3',
        name: 'Limonada artesanal',
        description:
          'Elaborada con limones frescos, hierbabuena y azúcar de caña',
        price: '4,00 €',
      },
      {
        id: 'b4',
        name: 'Café de especialidad',
        description: 'Origen único, preparado en V60 o espresso',
        price: '2,50 €',
      },
    ],
  },
]

export const chefRecommendations = [
  {
    id: 'r1',
    name: 'Entrecot de ternera madurado',
    note: 'El corte que define nuestra cocina',
    imageUrl: 'pictures/entrecot.jpg',
  },
  {
    id: 'r2',
    name: 'Tabla de quesos artesanales',
    note: 'Para comenzar con calma y buen gusto',
    imageUrl: 'pictures/quesos.jpg',
  },
  {
    id: 'r3',
    name: 'Panna cotta de vainilla',
    note: 'El final perfecto para una tarde de jardín',
    imageUrl: 'pictures/panna-cotta.jpg',
  },
]
