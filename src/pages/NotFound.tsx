import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <Container size="sm" className="py-24 text-center">
        <p className="section-label mb-4">Error 404</p>
        <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-4">
          Página no encontrada
        </h1>
        <div className="divider mx-auto" />
        <p className="section-subtitle mx-auto max-w-sm mb-10">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 rounded-full bg-copper text-white font-sans text-sm font-medium hover:bg-copper-light transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </Container>
    </div>
  )
}
