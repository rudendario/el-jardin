import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/eventos", label: "Eventos" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream-light/90 backdrop-blur-md shadow-soft border-b border-black/[0.05]"
            : "bg-transparent",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 leading-none group"
              aria-label="El Jardín – Inicio"
            >
              {/* RECORTE DEL LOGO SOLO PARA EL HEADER */}
              <span
                aria-hidden="true"
                className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden "
              >
                <img
                  src="/public/logo-el-jardin.png"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </span>

              {/* Logotipo tipográfico (mantiene vuestro estilo) */}
              <div className="flex flex-col items-start">
                <span className="font-serif text-xl sm:text-2xl text-charcoal tracking-tight group-hover:text-copper transition-colors duration-300">
                  El Jardín
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-charcoal-light mt-0.5">
                  Parrilla & Eventos
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Navegación principal"
            >
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "font-sans text-sm font-medium transition-colors duration-300 relative py-1",
                      isActive
                        ? "text-copper"
                        : "text-charcoal hover:text-copper",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-0.5 left-0 right-0 h-px bg-copper"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <Button to="/contacto" size="sm">
                Reservar
              </Button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 text-charcoal"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-current origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px bg-current"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-px bg-current origin-center"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 inset-x-0 z-40 bg-cream-light/95 backdrop-blur-md border-b border-black/[0.06] shadow-soft md:hidden"
          >
            <nav
              className="flex flex-col px-6 py-6 gap-4"
              aria-label="Menú móvil"
            >
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-sans text-lg py-2 border-b border-black/[0.06] transition-colors duration-300",
                      isActive ? "text-copper" : "text-charcoal",
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Button
                to="/contacto"
                className="mt-2 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Reservar mesa
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
