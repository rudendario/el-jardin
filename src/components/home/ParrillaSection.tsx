import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'

const specialties = [
  {
    id: 's1',
    name: 'Entrecot madurado',
    description:
      'Ternera 21 días, brasas de encina, sal de Maldon.',
    detail: 'Maduración lenta · Brasas de encina',
    gradient: 'from-[#EDE4D6] to-[#F6F1E8]',
    accentColor: 'bg-copper/10',
    imageUrl: 'pictures/entrecot.jpg',
  },
  {
    id: 's2',
    name: 'Secreto ibérico',
    description:
      'Ibérico de bellota, parrilla lenta, romero y limón.',
    detail: 'Ibérico de bellota · Parrilla lenta',
    gradient: 'from-[#F6F1E8] to-[#FAF7F1]',
    accentColor: 'bg-sage/10',
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80&fit=crop',
  },
  {
    id: 's3',
    name: 'Salmón de parrilla',
    description:
      'Costra de perejil y eneldo. Ensalada tibia de lentejas.',
    detail: 'Pesca sostenible · Del día',
    gradient: 'from-[#EDE4D6] to-[#FAF7F1]',
    accentColor: 'bg-copper/8',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80&fit=crop',
  },
  {
    id: 's4',
    name: 'Verduras de temporada',
    description:
      'Del mercado, a las brasas, aceite virgen extra y flor de sal.',
    detail: 'Km 0 · Producto local',
    gradient: 'from-[#F1EDE4] to-[#FAF7F1]',
    accentColor: 'bg-sage/15',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80&fit=crop',
  },
]


export default function ParrillaSection() {
  return (
    <section
      className="py-24 sm:py-32 bg-cream-deep/50"
      aria-label="Especialidades de la parrilla"
    >
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <p className="section-label">Parrilla de autor</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title mt-4 text-balance">
              El arte del{' '}
              <em className="not-italic text-copper">fuego lento</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="divider mx-auto" />
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((item, i) => (
            <Reveal key={item.id} delay={0.08 * i}>
              <article
                className={`group relative rounded-3xl border border-black/[0.06] overflow-hidden bg-gradient-to-br ${item.gradient} shadow-card hover:shadow-hover transition-all duration-500`}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-sage font-medium mb-2">
                    {item.detail}
                  </p>
                  <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-copper transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-copper/20 transition-all duration-500 pointer-events-none" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Button to="/carta" variant="secondary" size="lg">
              Ver carta completa
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
