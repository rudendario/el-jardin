import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { menuData, chefRecommendations, ALLERGENS, type MenuItem } from '../data/menu'

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full bg-copper/10 text-copper font-sans text-[10px] font-medium tracking-wide">
      {label}
    </span>
  )
}

function DishCard({
  item,
  index,
  reduced,
  onSelect,
}: {
  item: MenuItem
  index: number
  reduced: boolean
  onSelect: (item: MenuItem) => void
}) {
  const [showAllergens, setShowAllergens] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduced ? 0 : index * 0.06, duration: 0.4, ease: 'easeOut' }}
      className="group flex flex-col p-5 card-base hover:shadow-hover transition-shadow duration-500"
    >
      <div className="flex-1 flex flex-col min-w-0">
        {/* Nombre + tag + precio */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <h3 className="font-serif text-lg text-charcoal group-hover:text-copper transition-colors duration-300 leading-tight">
              {item.name}
            </h3>
            {item.tag && <Tag label={item.tag} />}
          </div>
          <p className="font-serif text-base text-copper font-medium flex-shrink-0">
            {item.price}
          </p>
        </div>

        {/* Alérgenos + ver más */}
        <div className="mt-auto pt-3 flex items-center justify-between gap-4 border-t border-black/[0.05]">
          {item.allergens && item.allergens.length > 0 ? (
            <div>
              <button
                onClick={() => setShowAllergens((v) => !v)}
                className="flex items-center gap-1.5 font-sans text-[11px] text-charcoal-light/70 hover:text-charcoal-light transition-colors duration-200"
                aria-expanded={showAllergens}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm.75 10.5h-1.5v-5h1.5v5Zm0-6.5h-1.5V3.5h1.5V5Z"/>
                </svg>
                Alérgenos
                <span className={`transition-transform duration-200 inline-block ${showAllergens ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {showAllergens && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.allergens.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-charcoal/5 border border-black/10 font-sans text-[11px] text-charcoal-light"
                    >
                      <span className="hidden font-semibold text-charcoal/70">{ALLERGENS[a].code}</span>
                      {ALLERGENS[a].label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <span />
          )}

          <button
            onClick={() => onSelect(item)}
            className="font-sans text-[11px] text-copper/70 hover:text-copper transition-colors duration-200 tracking-wide flex-shrink-0"
            aria-label={`Ver más sobre ${item.name}`}
          >
            Ver más →
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function DishModal({
  item,
  onClose,
}: {
  item: MenuItem | null
  onClose: () => void
}) {
  if (!item) return null
  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />
        <motion.div
          className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-hover bg-cream"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Photo */}
          {item.imageUrl ? (
            <div className="h-56 overflow-hidden ">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="h-32 bg-gradient-to-br from-cream-deep to-cream" />
          )}

          {/* Content */}
          <div className="p-7">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-serif text-2xl text-charcoal leading-tight">
                {item.name}
              </h2>
              <span className="font-serif text-xl text-copper font-medium flex-shrink-0">
                {item.price}
              </span>
            </div>
            {item.tag && (
              <div className="mb-3">
                <Tag label={item.tag} />
              </div>
            )}
            <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-5">
              {item.description}
            </p>

            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <p className="section-label mb-3">Ingredientes</p>
                <ul className="space-y-1.5">
                  {item.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/60 flex-shrink-0" />
                      <span className="font-sans text-sm text-charcoal-light">
                        {ing}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.allergens && item.allergens.length > 0 && (
              <div className="mt-5 pt-4 border-t border-black/[0.06]">
                <p className="section-label mb-2">Alérgenos</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.allergens.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-charcoal/5 border border-black/10 font-sans text-[11px] text-charcoal-light"
                    >
                      <span className="hidden font-semibold text-charcoal/70">{ALLERGENS[a].code}</span>
                      {ALLERGENS[a].label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:text-copper transition-colors duration-300 shadow-soft"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

export default function Carta() {
  const [activeTab, setActiveTab] = useState(menuData[0].id)
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null)
  const reduced = useReducedMotion()

  const activeCategory = menuData.find((c) => c.id === activeTab)!

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/75" />
        <Container size="md" className="relative">
          <div className="text-center">
            <Reveal>
              <p className="section-label">Nuestra propuesta</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="section-title mt-4 text-balance">
                La carta del{' '}
                <em className="not-italic text-copper">jardín</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="divider mx-auto" />
              <p className="section-subtitle max-w-md mx-auto">
                Producto de temporada, elaboraciones cuidadas y una parrilla
                que merece toda la atención.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Chef recommendations */}
      <section className="py-14 bg-cream-deep/50" aria-label="Recomendaciones del chef">
        <Container>
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <p className="section-label">Recomendaciones del chef</p>
              <div className="flex-1 h-px bg-black/[0.06]" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {chefRecommendations.map((rec, i) => {
              const fullItem = menuData
                .flatMap((c) => c.items)
                .find((item) => item.id === rec.menuItemId) ?? null
              return (
                <Reveal key={rec.id} delay={0.08 * i}>
                  <button
                    className="card-base overflow-hidden group w-full text-left cursor-pointer"
                    onClick={() => fullItem && setSelectedDish(fullItem)}
                    aria-label={`Ver detalles de ${rec.name}`}
                  >
                    {rec.imageUrl && (
                      <div className="h-36 overflow-hidden">
                        <img
                          src={rec.imageUrl}
                          alt={rec.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex gap-4 p-5 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center">
                        <span className="text-copper font-serif text-sm">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-serif text-base text-charcoal group-hover:text-copper transition-colors duration-300">
                          {rec.name}
                        </p>
                        <p className="font-sans text-xs text-charcoal-light mt-0.5 italic">
                          {rec.note}
                        </p>
                        <p className="mt-1.5 font-sans text-[10px] text-copper/70 tracking-wide">
                          Ver ingredientes →
                        </p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Menu tabs */}
      <section className="py-16 sm:py-24 bg-cream" aria-label="Menú completo">
        <Container>
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="flex flex-wrap gap-2 mb-12 border-b border-black/[0.07] pb-0"
          >
            {menuData.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={cat.id === activeTab}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-3 font-sans text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-copper focus-visible:outline-offset-2 rounded-t-lg ${
                  cat.id === activeTab
                    ? 'text-copper'
                    : 'text-charcoal-light hover:text-charcoal'
                }`}
              >
                {cat.label}
                {cat.id === activeTab && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-copper"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {activeCategory.items.map((item, i) => (
                  <DishCard
                    key={item.id}
                    item={item}
                    index={i}
                    reduced={reduced}
                    onSelect={setSelectedDish}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <Reveal delay={0.3}>
            <p className="mt-10 font-sans text-xs text-charcoal-light text-center">
              La carta puede variar según disponibilidad de producto y temporada.
              Consulte alérgenos con nuestro equipo.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Dish modal */}
      <DishModal item={selectedDish} onClose={() => setSelectedDish(null)} />
      {selectedDish && (
        <style>{`body { overflow: hidden; }`}</style>
      )}
    </div>
  )
}
