import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'

const eventCards = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños & Aniversarios',
    description:
      'Los momentos más especiales merecen un escenario excepcional. Menús personalizados, decoración floral y una atención que cuida cada detalle.',
    detail: 'Hasta 80 personas',
    bg: 'bg-gradient-to-br from-cream-deep to-cream-light',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop',
  },
  {
    id: 'celebraciones',
    title: 'Celebraciones Familiares',
    description:
      'Bodas íntimas, comuniones, bautizos. Un entorno cálido y elegante donde las familias crean recuerdos que duran toda la vida.',
    detail: 'Hasta 120 personas',
    bg: 'bg-gradient-to-br from-sage/10 to-cream-light',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop',
  },
  {
    id: 'empresa',
    title: 'Eventos Corporativos',
    description:
      'Cenas de equipo, presentaciones, reuniones de dirección. Elegancia y funcionalidad al servicio de cada proyecto empresarial.',
    detail: 'Hasta 150 personas',
    bg: 'bg-gradient-to-br from-copper/8 to-cream-light',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&fit=crop',
  },
]

export default function EventsPreview() {
  return (
    <section
      className="py-24 sm:py-32 bg-cream"
      aria-label="Tipos de eventos"
    >
      <Container>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <Reveal>
              <p className="section-label">Eventos a medida</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-4 text-balance">
                Tu celebración,{' '}
                <em className="not-italic text-copper">nuestro cuidado</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="left">
            <p className="section-subtitle">
              Cada evento es único. Trabajamos contigo desde el primer momento
              para que el resultado supere tus expectativas. Espacios privados,
              menús personalizados y un equipo dedicado en exclusiva.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {eventCards.map((card, i) => (
            <Reveal key={card.id} delay={0.1 * i}>
              <article
                className={`group relative rounded-3xl border border-black/[0.06] ${card.bg} shadow-card hover:shadow-hover transition-all duration-500 h-full overflow-hidden`}
              >
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  {/* Capacity badge */}
                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/60 border border-black/[0.06] font-sans text-[10px] tracking-widest uppercase text-charcoal-light">
                    {card.detail}
                  </span>

                  <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-copper transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-copper/20 transition-all duration-500 pointer-events-none" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/eventos" size="lg">
              Explorar eventos
            </Button>
            <Button to="/contacto" variant="secondary" size="lg">
              Solicitar fecha
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
