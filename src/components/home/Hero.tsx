import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../ui/Button'

// Inline botanical SVG leaf shapes for decoration
function Leaf({
  className,
  size = 120,
  rotate = 0,
  opacity = 0.18,
}: {
  className?: string
  size?: number
  rotate?: number
  opacity?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M60 10 C20 20 10 70 60 110 C110 70 100 20 60 10Z"
        fill="#9CAF88"
      />
      <path d="M60 10 L60 110" stroke="#7E8F6A" strokeWidth="1.5" />
      <path d="M60 40 C45 42 35 55 38 68" stroke="#7E8F6A" strokeWidth="1" />
      <path d="M60 40 C75 42 85 55 82 68" stroke="#7E8F6A" strokeWidth="1" />
    </svg>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ['0%', '0%'] : ['0%', '12%'],
  )
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.6],
    reduced ? ['0%', '0%'] : ['0%', '8%'],
  )

  const textVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : i * 0.15,
        duration: reduced ? 0.3 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
      aria-label="Bienvenida"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        {/* Hero background image */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm cream overlay for text legibility */}
        <div className="absolute inset-0 bg-cream/55" />

        {/* Decorative botanical elements */}
        <Leaf
          className="absolute -top-8 -left-8 pointer-events-none"
          size={260}
          rotate={-20}
          opacity={0.12}
        />
        <Leaf
          className="absolute top-1/4 -right-12 pointer-events-none"
          size={200}
          rotate={30}
          opacity={0.1}
        />
        <Leaf
          className="absolute bottom-0 left-1/4 pointer-events-none"
          size={180}
          rotate={10}
          opacity={0.08}
        />
        <Leaf
          className="absolute -bottom-4 right-1/3 pointer-events-none"
          size={140}
          rotate={-15}
          opacity={0.1}
        />

        {/* Subtle radial warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(198,138,79,0.06)_0%,transparent_70%)]" />
      </motion.div>

      {/* Bottom fade overlay */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.p
          className="section-label mb-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Parrilla & Eventos
        </motion.p>

        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] text-balance max-w-4xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Un jardín para{' '}
          <em className="not-italic text-copper">celebrar</em>
          <br />y disfrutar.
        </motion.h1>

        <motion.p
          className="mt-6 font-sans text-base sm:text-lg text-charcoal-light max-w-md leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Experiencia gastronómica · Parrilla de autor · Espacios para eventos
        </motion.p>

        {/* Thin divider */}
        <motion.div
          className="w-12 h-px bg-copper/50 my-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        />

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <Button to="/contacto" size="lg">
            Reservar mesa
          </Button>
          <Button to="/eventos" variant="secondary" size="lg">
            Organizar evento
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={5}
          aria-hidden="true"
        >
          <span className="font-sans text-[10px] tracking-widest uppercase text-charcoal-light">
            Explorar
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-copper/40 to-transparent"
            animate={reduced ? {} : { scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
