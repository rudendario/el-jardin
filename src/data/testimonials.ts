export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Laura Martínez',
    role: 'Celebración de cumpleaños',
    text: 'Organizamos el cumpleaños de mi madre aquí y fue absolutamente especial. El jardín es precioso, la atención impecable y la comida, una experiencia sensorial. Volveremos sin duda.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Javier Romero',
    role: 'Cena de empresa',
    text: 'Repetimos cada año para la cena de Navidad. Es difícil encontrar un lugar que combine esta elegancia con un ambiente tan cálido y acogedor. El equipo siempre va más allá.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Ana & Pedro García',
    role: 'Aniversario de boda',
    text: 'Una noche perfecta para celebrar nuestro décimo aniversario. La carta de vinos es excelente y el entrecot, sencillamente el mejor que hemos probado. Un lujo al que queremos volver.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Carlos Vega',
    role: 'Brunch familiar',
    text: 'El espacio es muy luminoso y el personal muy atento. Vinimos un domingo y la experiencia fue relajante y deliciosa. Perfecta para una mañana en familia sin ninguna prisa.',
    rating: 5,
  },
]
