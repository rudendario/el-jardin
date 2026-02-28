import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import Reveal from "../ui/Reveal";
import Container from "../ui/Container";

const pillars = [
  {
    id: "espacio",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 3C9 3 4 8 4 14s5 11 10 11 10-5 10-11S19 3 14 3Z"
          stroke="#9CAF88"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M14 7v7l4 4"
          stroke="#C68A4F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Un espacio vivo",
    text: "Luz natural, vegetación abundante y una atmósfera serena donde el tiempo se detiene.",
  },
  {
    id: "cocina",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 22V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"
          stroke="#9CAF88"
          strokeWidth="1.5"
        />
        <path d="M10 8V6a4 4 0 0 1 8 0v2" stroke="#C68A4F" strokeWidth="1.5" />
        <path d="M6 18h16" stroke="#9CAF88" strokeWidth="1.5" />
      </svg>
    ),
    title: "Cocina honesta",
    text: "Producto de temporada y sabor auténtico. Sin artificios, con mucho cuidado.",
  },
  {
    id: "momentos",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 5L16.5 11H23L17.5 15.5L19.5 22L14 18L8.5 22L10.5 15.5L5 11H11.5L14 5Z"
          stroke="#9CAF88"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="14" cy="14" r="3" fill="#C68A4F" opacity="0.4" />
      </svg>
    ),
    title: "Momentos que perduran",
    text: "Desde una comida íntima hasta un evento para 150 personas. Nos adaptamos.",
  },
];

export default function ExperienceSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();

  const total = pillars.length;

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: reduced ? 0 : d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: reduced ? 0 : d * -60 }),
  };

  const pillar = pillars[current];

  return (
    <section className="py-24 sm:py-32 bg-cream" aria-label="La experiencia">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <Reveal>
              <p className="section-label">La experiencia</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-4 max-w-md text-balance">
                Más que una comida,{" "}
                <em className="not-italic text-copper">un recuerdo</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="divider" />
              <p className="section-subtitle max-w-md">
                Reunirse, compartir y crear vínculos en un entorno que invita a quedarse.
              </p>
            </Reveal>
          </div>

          {/* Right: pillars */}
          <div>
            {/* Mobile: slider */}
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={pillar.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: reduced ? 0.2 : 0.4, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) goTo((current + 1) % total, 1);
                      else if (info.offset.x > 50) goTo((current - 1 + total) % total, -1);
                    }}
                    className="flex gap-5 p-6 card-base cursor-grab active:cursor-grabbing select-none"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cream-deep flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="Pillars">
                {pillars.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Pilar ${i + 1}`}
                    onClick={() => goTo(i, i > current ? 1 : -1)}
                    className="transition-all duration-300 focus-visible:outline-2 focus-visible:outline-copper focus-visible:outline-offset-2"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-6 h-2 bg-copper"
                          : "w-2 h-2 bg-charcoal/20 hover:bg-copper/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: stack */}
            <div className="hidden lg:block space-y-6">
              {pillars.map((p, i) => (
                <Reveal key={p.id} delay={0.1 + i * 0.12} direction="left">
                  <div className="flex gap-5 p-6 card-base group hover:shadow-hover transition-shadow duration-500">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cream-deep flex items-center justify-center group-hover:bg-sage/10 transition-colors duration-300">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal mb-1.5">
                        {p.title}
                      </h3>
                      <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
