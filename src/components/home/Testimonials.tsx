import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="#C68A4F"
          aria-hidden="true"
        >
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.2l-3.7 2.1.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  )
}

const AUTOPLAY_DELAY = 5000

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  const total = testimonials.length

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const prev = () => goTo((current - 1 + total) % total, -1)
  const next = useCallback(() => goTo((current + 1) % total, 1), [current, total, goTo])

  useEffect(() => {
    if (paused || reduced) return
    const id = setTimeout(() => next(), AUTOPLAY_DELAY)
    return () => clearTimeout(id)
  }, [current, paused, reduced, next])

  const variants = {
    enter: (d: number) => ({
      opacity: 0,
      x: reduced ? 0 : d * 40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({
      opacity: 0,
      x: reduced ? 0 : d * -40,
    }),
  }

  const t = testimonials[current]

  return (
    <section
      className="py-24 sm:py-32 bg-cream-deep/40"
      aria-label="Testimonios"
    >
      <Container size="md">
        {/* Header */}
        <div className="text-center mb-14">
          <Reveal>
            <p className="section-label">Lo que dicen</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title mt-4">
              Voces del{' '}
              <em className="not-italic text-copper">jardín</em>.
            </h2>
          </Reveal>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduced ? 0.2 : 0.45, ease: 'easeInOut' }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center mb-8">
                <Stars count={t.rating} />
              </div>

              {/* Quote mark */}
              <p className="font-serif text-6xl text-copper/20 leading-none mb-2" aria-hidden="true">
                "
              </p>

              {/* Text */}
              <blockquote className="font-serif text-2xl sm:text-3xl text-charcoal leading-relaxed text-balance max-w-2xl mx-auto mb-8">
                {t.text}
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-1">
                <p className="font-sans font-medium text-charcoal text-sm">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-charcoal-light tracking-wide">
                  {t.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-charcoal-light hover:border-copper hover:text-copper transition-all duration-300"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className="transition-all duration-300 focus-visible:outline-2 focus-visible:outline-copper focus-visible:outline-offset-2"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 h-2 bg-copper'
                        : 'w-2 h-2 bg-charcoal/20 hover:bg-copper/40'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-charcoal-light hover:border-copper hover:text-copper transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
