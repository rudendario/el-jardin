import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { eventTypes, eventProcess, galleryItems } from '../data/events'

function GalleryModal({
  item,
  onClose,
}: {
  item: { id: string; label: string; imageUrl: string } | null
  onClose: () => void
}) {
  if (!item) return null
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-hover"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-video">
            <img
              src={item.imageUrl}
              alt={item.label}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:text-copper transition-colors duration-300 shadow-soft"
            aria-label="Cerrar imagen"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Eventos() {
  const [selectedItem, setSelectedItem] = useState<
    { id: string; label: string; imageUrl: string } | null
  >(null)
  const reduced = useReducedMotion()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/75" />
        <Container size="md" className="relative">
          <div className="text-center">
            <Reveal>
              <p className="section-label">Celebra con nosotros</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="section-title mt-4 text-balance">
                Espacios para{' '}
                <em className="not-italic text-copper">momentos únicos</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="divider mx-auto" />
              <p className="section-subtitle max-w-md mx-auto">
                Desde eventos íntimos hasta grandes celebraciones. El Jardín se
                adapta a tu visión y la convierte en realidad.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Button to="/contacto" size="lg">
                  Solicitar fecha
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream-deep/30" aria-label="Galería de espacios">
        <Container>
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <p className="section-label">Nuestros espacios</p>
              <div className="flex-1 h-px bg-black/[0.06]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryItems.map((item, i) => (
              <Reveal key={item.id} delay={0.05 * i}>
                <button
                  className={`w-full ${item.aspect} rounded-2xl overflow-hidden relative group cursor-pointer border border-black/[0.06] shadow-card hover:shadow-hover transition-all duration-500`}
                  onClick={() =>
                    setSelectedItem({
                      id: item.id,
                      label: item.label,
                      imageUrl: item.imageUrl,
                    })
                  }
                  aria-label={`Ver imagen: ${item.label}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-400 flex items-end p-3">
                    <span className="font-sans text-xs text-charcoal/0 group-hover:text-charcoal/70 transition-colors duration-300 font-medium">
                      {item.label}
                    </span>
                  </div>

                  {/* Border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-copper/30 transition-all duration-500 pointer-events-none" />
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-center font-sans text-xs text-charcoal-light mt-6 italic">
              Haz clic en las imágenes para ampliarlas
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Event types */}
      <section className="py-20 sm:py-28 bg-cream" aria-label="Tipos de evento">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <p className="section-label">¿Qué ofrecemos?</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-4 text-balance">
                Cada ocasión,{' '}
                <em className="not-italic text-copper">un traje a medida</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {eventTypes.map((ev, i) => (
              <Reveal key={ev.id} delay={0.1 * i}>
                <article
                  className={`group rounded-3xl border border-black/[0.06] bg-gradient-to-br ${ev.gradient} shadow-card hover:shadow-hover transition-all duration-500 h-full relative overflow-hidden`}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={ev.imageUrl}
                      alt={ev.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/70 border border-black/[0.06] font-sans text-[10px] tracking-widest uppercase text-charcoal-light">
                      {ev.capacity}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-copper transition-colors duration-300">
                      {ev.title}
                    </h3>
                    <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-6">
                      {ev.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-px bg-copper/50" />
                      <span className="font-sans text-xs text-copper font-medium">
                        {ev.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-copper/20 transition-all duration-500 pointer-events-none" />
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section
        className="py-20 sm:py-28 bg-cream-deep/40"
        aria-label="Proceso de reserva"
      >
        <Container>
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal>
              <p className="section-label">Cómo funciona</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-4 text-balance">
                Cuatro pasos hacia{' '}
                <em className="not-italic text-copper">tu evento perfecto</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventProcess.map((step, i) => (
              <Reveal key={step.step} delay={0.1 * i}>
                <div className="relative p-6 card-base group hover:shadow-hover transition-shadow duration-500">
                  {/* Step number */}
                  <p className="font-serif text-4xl text-copper/20 font-medium mb-4 group-hover:text-copper/35 transition-colors duration-300">
                    {step.step}
                  </p>
                  <h3 className="font-serif text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                    {step.description}
                  </p>
                  {/* Connector line */}
                  {i < eventProcess.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-10 -right-2.5 w-5 h-px bg-copper/20"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sticky CTA banner */}
      <section className="py-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(198,138,79,0.08)_0%,transparent_70%)] pointer-events-none" />
        <Container size="sm">
          <Reveal>
            <div className="text-center">
              <h2 className="section-title mb-4">
                ¿Tienes una fecha en mente?
              </h2>
              <p className="section-subtitle mb-8">
                Escríbenos sin compromiso. Te respondemos en menos de 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contacto" size="lg">
                  Solicitar fecha
                </Button>
                <Button href="tel:+34611486020" variant="secondary" size="lg">
                  Llamar ahora
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Gallery modal */}
      <GalleryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
      {/* Prevent body scroll when modal open */}
      {selectedItem && (
        <style>{`body { overflow: hidden; }`}</style>
      )}

      {/* Reduced motion note for TS */}
      {reduced && null}
    </div>
  )
}
