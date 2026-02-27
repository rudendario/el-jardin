import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import Home from './pages/Home'
import Carta from './pages/Carta'
import Eventos from './pages/Eventos'
import Contacto from './pages/Contacto'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/carta"
              element={
                <PageTransition>
                  <Carta />
                </PageTransition>
              }
            />
            <Route
              path="/eventos"
              element={
                <PageTransition>
                  <Eventos />
                </PageTransition>
              }
            />
            <Route
              path="/contacto"
              element={
                <PageTransition>
                  <Contacto />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
