export interface EventType {
  id: string
  title: string
  description: string
  capacity: string
  highlight: string
  gradient: string
  imageUrl: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const eventTypes: EventType[] = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños & Aniversarios',
    description:
      'Celebra los momentos más especiales rodeado de las personas que más quieres. Diseñamos el espacio y el menú a tu medida, con una atención personalizada desde el primer detalle.',
    capacity: 'Hasta 80 personas',
    highlight: 'Menú personalizado · Decoración floral',
    gradient: 'from-cream-deep via-cream to-cream-light',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop',
  },
  {
    id: 'celebraciones',
    title: 'Celebraciones Familiares',
    description:
      'Comuniones, bodas íntimas, bautizos o reuniones de familia. Un entorno cálido y elegante para compartir momentos únicos que quedarán en la memoria.',
    capacity: 'Hasta 120 personas',
    highlight: 'Espacios privados · Menú familiar',
    gradient: 'from-sage/10 via-cream to-cream-light',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop',
  },
  {
    id: 'empresa',
    title: 'Eventos de Empresa',
    description:
      'Desde cenas de equipo hasta presentaciones corporativas. Combinamos elegancia y funcionalidad para que tu evento sea memorable y cada detalle esté cuidado.',
    capacity: 'Hasta 60 personas',
    highlight: 'Proyector · Audio · Catering',
    gradient: 'from-copper/10 via-cream to-cream-light',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&fit=crop',
  },
]

export const eventProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Consulta inicial',
    description:
      'Cuéntanos tu visión: fecha, número de invitados y tipo de evento. Sin compromiso.',
  },
  {
    step: '02',
    title: 'Propuesta a medida',
    description:
      'En 48 horas te enviamos un presupuesto detallado adaptado a tus necesidades.',
  },
  {
    step: '03',
    title: 'Confirmación y reserva',
    description:
      'Una señal simbólica para reservar tu fecha con total tranquilidad.',
  },
  {
    step: '04',
    title: 'El día del evento',
    description:
      'Nuestro equipo se encarga de todo para que tú solo disfrutes del momento.',
  },
]

export const galleryItems = [
  { id: 'g1', label: 'Jardín exterior', aspect: 'aspect-[4/5]', gradient: 'from-sage/20 to-cream-deep', imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80&fit=crop' },
  { id: 'g2', label: 'Sala principal', aspect: 'aspect-square', gradient: 'from-cream-deep to-cream', imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop' },
  { id: 'g3', label: 'Mesa de celebración', aspect: 'aspect-[4/3]', gradient: 'from-copper/15 to-cream-light', imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80&fit=crop' },
  { id: 'g4', label: 'Rincón íntimo', aspect: 'aspect-[3/4]', gradient: 'from-cream to-sage/15', imageUrl: 'public/pictures/rincon-intimo.jpg' },
  { id: 'g5', label: 'Parrilla en acción', aspect: 'aspect-square', gradient: 'from-cream-deep to-copper/10', imageUrl: 'https://images.unsplash.com/photo-1477519242566-6ae87c31d212?w=800&q=80&fit=crop' },
  { id: 'g6', label: 'Detalle de mesa', aspect: 'aspect-[4/5]', gradient: 'from-sage/15 to-cream', imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=80&fit=crop' },
  { id: 'g7', label: 'Terraza al atardecer', aspect: 'aspect-[4/3]', gradient: 'from-cream-light to-copper/15', imageUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&q=80&fit=crop' },
  { id: 'g8', label: 'Cena de gala', aspect: 'aspect-square', gradient: 'from-cream to-cream-deep', imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fit=crop' },
]
