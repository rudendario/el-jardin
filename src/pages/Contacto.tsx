import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

type FormType = 'mesa' | 'evento'
type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  phone: string
  email: string
  date: string
  guests: string
  type: FormType
  message: string
}

interface Errors {
  [key: string]: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  guests: '',
  type: 'mesa',
  message: '',
}

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.name.trim()) errors.name = 'El nombre es obligatorio'
  if (!form.email.trim()) {
    errors.email = 'El email es obligatorio'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email no válido'
  }
  if (!form.phone.trim()) errors.phone = 'El teléfono es obligatorio'
  if (!form.date) errors.date = 'Selecciona una fecha'
  if (!form.guests || parseInt(form.guests) < 1)
    errors.guests = 'Indica el número de personas'
  return errors
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1 font-sans text-xs text-red-500" role="alert">
      {message}
    </p>
  )
}

function InputField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block font-sans text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  )
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-2xl border ${
    hasError ? 'border-red-400' : 'border-black/10'
  } bg-cream-light font-sans text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-copper transition-colors duration-300`

const schedule = [
  { days: 'Lunes – Jueves', hours: '07:30 – 16:00 ' },
  { days: 'Viernes & Domingo',hours: '07:30 – 16:00 · 20:00 – 23:00' },
  { days: 'Tardes entre semana', hours: 'Cerrado' },
]

export default function Contacto() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate(form)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('loading')

    try {
      const tipoLabel = form.type === 'mesa' ? 'Reserva de mesa' : 'Organizar evento'
      const message = encodeURIComponent(
        `*Nueva solicitud – El Jardín*\n\n` +
        `Tipo: ${tipoLabel}\n` +
        `Nombre: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Teléfono: ${form.phone}\n` +
        `Fecha: ${form.date}\n` +
        `Personas: ${form.guests}` +
        (form.message ? `\nMensaje: ${form.message}` : '')
      )
      window.open(`https://wa.me/34611486020?text=${message}`, '_blank')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600&q=80&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/75" />
        <Container size="md" className="relative">
          <div className="text-center">
            <Reveal>
              <p className="section-label">Estamos aquí</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="section-title mt-4 text-balance">
                Reserva tu{' '}
                <em className="not-italic text-copper">mesa o evento</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="divider mx-auto" />
              <p className="section-subtitle max-w-sm mx-auto">
                Escríbenos y te confirmamos en menos de 24 horas. Sin
                esperas, sin complicaciones.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-cream-deep/30">
        <Container>
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            {/* Form card */}
            <Reveal>
              <div className="card-base p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 14l6 6 10-12"
                            stroke="#7E8F6A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h2 className="font-serif text-3xl text-charcoal mb-3">
                        ¡Ya casi está!
                      </h2>
                      <p className="font-sans text-sm text-charcoal-light max-w-sm mx-auto mb-8">
                        WhatsApp se ha abierto con tu solicitud. Solo tienes
                        que pulsar <strong>Enviar</strong> para completarla.
                        Te confirmaremos en menos de 24 horas.
                      </p>
                      <Button
                        onClick={() => setStatus('idle')}
                        variant="secondary"
                      >
                        Nueva solicitud
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h2 className="font-serif text-2xl text-charcoal mb-6">
                        Datos de tu solicitud
                      </h2>

                      {/* Type selector */}
                      <div>
                        <label className="block font-sans text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">
                          ¿Qué necesitas?
                        </label>
                        <div
                          role="radiogroup"
                          aria-label="Tipo de solicitud"
                          className="flex rounded-2xl border border-black/10 overflow-hidden bg-cream-light p-1 gap-1"
                        >
                          {(['mesa', 'evento'] as FormType[]).map((t) => (
                            <button
                              key={t}
                              type="button"
                              role="radio"
                              aria-checked={form.type === t}
                              onClick={() => update('type', t)}
                              className={`flex-1 py-2.5 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                                form.type === t
                                  ? 'bg-copper text-white shadow-soft'
                                  : 'text-charcoal-light hover:text-charcoal'
                              }`}
                            >
                              {t === 'mesa' ? 'Reservar mesa' : 'Organizar evento'}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name + Phone */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <InputField label="Nombre completo" error={errors.name}>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                            placeholder="Tu nombre"
                            className={inputClass(!!errors.name)}
                            autoComplete="name"
                          />
                        </InputField>
                        <InputField label="Teléfono" error={errors.phone}>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            placeholder="+34 600 000 000"
                            className={inputClass(!!errors.phone)}
                            autoComplete="tel"
                          />
                        </InputField>
                      </div>

                      {/* Email */}
                      <InputField label="Email" error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="tu@email.com"
                          className={inputClass(!!errors.email)}
                          autoComplete="email"
                        />
                      </InputField>

                      {/* Date + Guests */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <InputField label="Fecha deseada" error={errors.date}>
                          <input
                            type="date"
                            value={form.date}
                            onChange={(e) => update('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className={inputClass(!!errors.date)}
                          />
                        </InputField>
                        <InputField label="Número de personas" error={errors.guests}>
                          <input
                            type="number"
                            value={form.guests}
                            onChange={(e) => update('guests', e.target.value)}
                            placeholder="Ej. 4"
                            min="1"
                            max="200"
                            className={inputClass(!!errors.guests)}
                          />
                        </InputField>
                      </div>

                      {/* Message */}
                      <InputField label="Mensaje (opcional)" error={errors.message}>
                        <textarea
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          placeholder="Alguna petición especial, intolerancias, tipo de ocasión..."
                          rows={4}
                          className={`${inputClass(!!errors.message)} resize-none`}
                        />
                      </InputField>

                      {/* Error state */}
                      {status === 'error' && (
                        <p
                          className="font-sans text-sm text-red-500 text-center"
                          role="alert"
                        >
                          Ha ocurrido un error. Por favor, llámanos al +34 611
                          486 020.
                        </p>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                opacity="0.3"
                              />
                              <path
                                d="M12 2a10 10 0 0 1 10 10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          'Enviar por WhatsApp'
                        )}
                      </Button>

                      <p className="font-sans text-[11px] text-charcoal-light text-center">
                        Tus datos se usarán exclusivamente para gestionar tu
                        reserva. Sin spam.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>

            {/* Sidebar info */}
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* Hours */}
              <Reveal delay={0.15} direction="left">
                <div className="card-base p-6">
                  <p className="section-label mb-4">Horario</p>
                  <div className="space-y-3">
                    {schedule.map(({ days, hours }) => (
                      <div key={days} className="flex flex-col gap-0.5">
                        <span className="font-sans text-xs font-medium text-charcoal uppercase tracking-wide">
                          {days}
                        </span>
                        <span
                          className={`font-sans text-sm ${
                            days === 'Lunes'
                              ? 'text-copper'
                              : 'text-charcoal-light'
                          }`}
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Address */}
              <Reveal delay={0.2} direction="left">
                <div className="card-base p-6">
                  <p className="section-label mb-4">Ubicación</p>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-black/[0.05]">
                    <iframe
                      src="https://maps.google.com/maps?q=C.+las+Huertas,+40,+40195+Hontoria,+Segovia&output=embed&hl=es"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación El Jardín"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-1 font-sans text-sm text-charcoal-light">
                    {/* TODO: real address */}
                    <p className="text-charcoal font-medium">
                      C. las Huertas, 40
                    </p>
                    <p>40195 Hontoria, Segovia</p>
                    <a
                      href="https://maps.app.goo.gl/eNVYxweDznFqHFVF9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-copper hover:text-copper-light transition-colors duration-300 text-xs"
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Phone */}
              <Reveal delay={0.25} direction="left">
                <div className="card-base p-6">
                  <p className="section-label mb-4">Teléfono</p>
                  <a
                    href="tel:+34611486020"
                    className="font-serif text-xl text-charcoal hover:text-copper transition-colors duration-300"
                  >
                    +34 611 486 020
                  </a>
                  <p className="font-sans text-xs text-charcoal-light mt-1">
                    Disponible en horario de apertura
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
