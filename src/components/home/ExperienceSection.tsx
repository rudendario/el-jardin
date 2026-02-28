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
    text: "El jardín es nuestro escenario: luz natural, vegetación abundante y una atmósfera serena donde el tiempo se detiene.",
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
    text: "Producto de temporada, cocina con carácter y elaboraciones que respetan el sabor. Sin artificios, con mucho cuidado.",
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
    text: "Desde una comida íntima hasta un evento para ciento cincuenta personas. Nos adaptamos para que cada ocasión sea perfecta.",
  },
];

export default function ExperienceSection() {
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
                Es reunirse, es compartir, es crear vínculos en un entorno que
                invita a quedarse un poco más.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="section-subtitle max-w-md mt-4">
                Es cuidar cada detalle: desde el primer saludo hasta el café
                final, una carta que cambia con las estaciones y una parrilla
                encendida con mimo artesanal.
              </p>
            </Reveal>
          </div>

          {/* Right: pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={0.1 + i * 0.12} direction="left">
                <div className="flex gap-5 p-6 card-base group hover:shadow-hover transition-shadow duration-500">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cream-deep flex items-center justify-center group-hover:bg-sage/10 transition-colors duration-300">
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
