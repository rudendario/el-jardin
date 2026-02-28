import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'

const schedule = [
  { days: 'Lunes – Jueves', hours: '07:30 – 16:00 ' },
  { days: 'Viernes - Domingo',hours: '07:30 – 16:00 · 20:00 – 23:00' },
  { days: 'Tardes entre semana', hours: 'Cerrado' },
]

export default function QuickContact() {
  return (
    <section
      className="py-24 sm:py-32 bg-cream relative overflow-hidden"
      aria-label="Horarios y contacto"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(156,175,136,0.08)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: info */}
          <div>
            <Reveal>
              <p className="section-label">Encuéntranos</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-4 text-balance">
                Te esperamos en{' '}
                <em className="not-italic text-copper">el jardín</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="divider" />
            </Reveal>

            {/* Schedule */}
            <Reveal delay={0.25}>
              <div className="space-y-4 mb-8">
                {schedule.map(({ days, hours }) => (
                  <div
                    key={days}
                    className="flex justify-between gap-4 py-3 border-b border-black/[0.06]"
                  >
                    <span className="font-sans text-sm text-charcoal font-medium">
                      {days}
                    </span>
                    <span
                      className={`font-sans text-sm ${days === 'Lunes' ? 'text-copper' : 'text-charcoal-light'}`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Address */}
            <Reveal delay={0.3}>
              <div className="flex items-start gap-3 mb-8">
                <div className="mt-0.5 w-5 h-5 flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Z"
                      stroke="#9CAF88"
                      strokeWidth="1.5"
                    />
                    <circle cx="10" cy="8" r="2" fill="#C68A4F" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm text-charcoal">
                    C. las Huertas, 40
                  </p>
                  <p className="font-sans text-sm text-charcoal-light">
                    40195 Hontoria, Segovia
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex gap-3">
                <Button to="/contacto" size="md">
                  Reservar mesa
                </Button>
                <Button
                  href="tel:+34611486020"
                  variant="secondary"
                  size="md"
                >
                  Llamar
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Google Maps embed */}
          <Reveal delay={0.2} direction="left">
            <div className="rounded-3xl overflow-hidden border border-black/[0.06] shadow-card aspect-[4/3]">
              <iframe
                src="https://maps.google.com/maps?q=C.+las+Huertas,+40,+40195+Hontoria,+Segovia&output=embed&hl=es"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación El Jardín"
                className="w-full h-full"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
