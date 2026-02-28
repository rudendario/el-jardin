import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const socials = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Facebook', href: '#', icon: 'FB' },
  { label: 'TripAdvisor', href: '#', icon: 'TA' },
]

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/carta', label: 'Carta' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-cream-deep border-t border-black/[0.07] mt-16">
      <Container className="py-10 md:py-16">

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center text-center gap-8">

          {/* Logo */}
          <Link to="/">
            <img
              src="/logo-el-jardin.png"
              alt="El Jardín – Parrilla & Eventos"
              className="h-28 w-auto"
            />
          </Link>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-xs font-sans font-medium text-charcoal-light hover:border-copper hover:text-copper transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-black/[0.08]" />

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-sans text-sm text-charcoal-light hover:text-copper transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-12 h-px bg-black/[0.08]" />

          {/* Contact */}
          <div className="space-y-3 font-sans text-sm text-charcoal-light">
            <div className="flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4Z" stroke="#9CAF88" strokeWidth="1.2"/>
                <circle cx="7" cy="5" r="1.5" fill="#C68A4F" opacity="0.6"/>
              </svg>
              <span>C. las Huertas, 40 – Hontoria, Segovia</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="#9CAF88" strokeWidth="1.2"/>
                <path d="M1 4l6 4 6-4" stroke="#C68A4F" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <a href="mailto:reservas@eljardinsegovia.com" className="hover:text-copper transition-colors duration-300">
                reservas@eljardinsegovia.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 2h2l1 3-1.5 1.5a8 8 0 0 0 3.5 3.5L9 8.5l3 1v2A1 1 0 0 1 11 12.5C5.5 12 2 6.5 2.5 2Z" stroke="#9CAF88" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <a href="tel:+34611486020" className="hover:text-copper transition-colors duration-300">
                +34 611 486 020
              </a>
            </div>
          </div>

        </div>

        {/* Desktop: 3 columnas (sin cambios) */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo-el-jardin.png"
                alt="El Jardín – Parrilla & Eventos"
                className="h-48 w-auto"
              />
            </Link>
            <p className="font-sans text-sm text-charcoal-light leading-relaxed max-w-xs">
              Un espacio luminoso donde cada comida se convierte en un momento memorable.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-xs font-sans font-medium text-charcoal-light hover:border-copper hover:text-copper transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav + Hours */}
          <div className="space-y-8">
            <div>
              <p className="section-label mb-4">Navegación</p>
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="font-sans text-sm text-charcoal-light hover:text-copper transition-colors duration-300"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="section-label mb-4">Horario</p>
              <div className="space-y-1 font-sans text-sm text-charcoal-light">
                <p>L – J: 07:30 – 16:00 / <span className="text-copper font-medium">Tardes: cerrado</span></p>
                <p>V - D: 07:30 – 16:00 / 20:00 – 23:00</p>
              </div>
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div className="space-y-8">
            <div>
              <p className="section-label mb-4">Newsletter</p>
              <p className="font-sans text-sm text-charcoal-light mb-4 leading-relaxed">
                Menús de temporada, eventos especiales y novedades. Sin saturar.
              </p>
              {subscribed ? (
                <p className="font-sans text-sm text-sage font-medium">
                  ¡Gracias! Te tendremos al tanto.
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2.5 rounded-full border border-black/10 bg-cream-light font-sans text-sm text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-copper transition-colors duration-300"
                    aria-label="Email para newsletter"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-full bg-copper text-white font-sans text-sm font-medium hover:bg-copper-light transition-colors duration-300"
                  >
                    →
                  </button>
                </form>
              )}
            </div>
            <div>
              <p className="section-label mb-4">Contacto</p>
              <div className="space-y-1 font-sans text-sm text-charcoal-light">
                <p>C. las Huertas, 40 – Hontoria, Segovia</p>
                <a href="tel:+34611486020" className="block hover:text-copper transition-colors duration-300">
                  +34 611 486 020
                </a>
                <a href="mailto:reservas@eljardinsegovia.com" className="block hover:text-copper transition-colors duration-300">
                  reservas@eljardinsegovia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-black/[0.07] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-charcoal-light text-center">
            © {new Date().getFullYear()} El Jardín – Parrilla & Eventos. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-charcoal-light">
            Diseñado por tusocioweb.es
          </p>
        </div>
      </Container>
    </footer>
  )
}
