import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { waLink, WA_MSGS, WA_DISPLAY, EMAIL, LOCATION } from '../constants'

const WaIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)
const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

const SERVICIOS = [
  'Mecánica general',
  'Diagnóstico automotriz',
  'Banco Dynojet',
  'Performance automotriz',
  'Alineación y tren delantero',
  'Karting',
  'Preparación para pista',
  'No estoy seguro',
]

const EMPTY = { nombre: '', servicio: '', auto: '', telefono: '', mensaje: '' }

function Field({ id, label, req, error, children }) {
  return (
    <div className={`ff${error ? ' ff-err' : ''}`}>
      <label className="ff-label" htmlFor={id}>
        {label}{req && <span className="ff-req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p className="ff-error" role="alert">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const headRef  = useReveal()
  const leftRef  = useReveal(0.05)
  const rightRef = useReveal(0.05)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.nombre.trim())  e.nombre  = 'Completá tu nombre'
    if (!form.servicio)       e.servicio = 'Seleccioná un servicio'
    if (!form.mensaje.trim()) e.mensaje  = 'Contanos qué necesitás'
    return e
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    const lines = [
      'Hola Andrés, te escribo desde la web de Andrés Racing Performance.',
      '',
      `Nombre: ${form.nombre}`,
      `Servicio: ${form.servicio}`,
    ]
    if (form.auto.trim())     lines.push(`Vehículo: ${form.auto}`)
    if (form.telefono.trim()) lines.push(`Teléfono: ${form.telefono}`)
    lines.push(`Mensaje: ${form.mensaje}`)

    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="form-section" id="formulario">
      <div className="form-bg-glow" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>

        <div ref={headRef} className="form-head reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>Contacto</div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>
            Contactá a Andrés<br />Racing Performance
          </h2>
          <p className="form-head-sub">
            Escribinos por WhatsApp o completá el formulario. Coordinamos cada consulta de forma directa.
          </p>
        </div>

        <div className="form-layout">

          {/* ── Panel izquierdo — info de contacto ── */}
          <div ref={leftRef} className="form-info reveal">

            <a
              className="form-wa-direct"
              href={waLink(WA_MSGS.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir a Andrés por WhatsApp"
            >
              <WaIcon size={20} />
              <div>
                <div className="form-wa-direct-title">Escribir por WhatsApp</div>
                <div className="form-wa-direct-num">{WA_DISPLAY}</div>
              </div>
            </a>

            <div className="form-contact-list">
              <div className="form-contact-item">
                <MailIcon />
                <a href={`mailto:${EMAIL}`} className="form-contact-link">{EMAIL}</a>
              </div>
              <div className="form-contact-item">
                <MapPinIcon />
                <span>{LOCATION}</span>
              </div>
              <div className="form-contact-item">
                <ClockIcon />
                <span>Respondemos por WhatsApp — coordinamos cada consulta en el día</span>
              </div>
            </div>

            <blockquote className="form-quote">
              <p>"Si no sabés qué servicio necesitás, escribime igual. Te oriento según lo que le pasa a tu auto."</p>
              <footer>— Andrés Sperati</footer>
            </blockquote>
          </div>

          {/* ── Formulario ── */}
          <div ref={rightRef} className="reveal-r">
            <form className="form-card" onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">

              <div className="form-card-accent" aria-hidden="true" />

              <Field id="cf-nombre" label="Nombre" req error={errors.nombre}>
                <input
                  id="cf-nombre"
                  className="fi"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={e => set('nombre', e.target.value)}
                  autoComplete="name"
                />
              </Field>

              <Field id="cf-servicio" label="¿Qué servicio necesitás?" req error={errors.servicio}>
                <div className="fi-select-wrap">
                  <select
                    id="cf-servicio"
                    className="fi fi-select"
                    value={form.servicio}
                    onChange={e => set('servicio', e.target.value)}
                  >
                    <option value="">Seleccioná un servicio</option>
                    {SERVICIOS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronIcon />
                </div>
              </Field>

              <Field id="cf-auto" label="Vehículo">
                <input
                  id="cf-auto"
                  className="fi"
                  type="text"
                  placeholder="Ej: VW Golf TDI, Ford Focus 1.6, Kart Rotax..."
                  value={form.auto}
                  onChange={e => set('auto', e.target.value)}
                />
              </Field>

              <Field id="cf-telefono" label="Teléfono">
                <input
                  id="cf-telefono"
                  className="fi"
                  type="tel"
                  placeholder="+54 9 11..."
                  value={form.telefono}
                  onChange={e => set('telefono', e.target.value)}
                  autoComplete="tel"
                />
              </Field>

              <Field id="cf-mensaje" label="¿Qué necesitás?" req error={errors.mensaje}>
                <textarea
                  id="cf-mensaje"
                  className="fi fi-textarea"
                  placeholder="Describí el síntoma, el problema o lo que querés consultar."
                  rows={4}
                  value={form.mensaje}
                  onChange={e => set('mensaje', e.target.value)}
                />
              </Field>

              <button type="submit" className="btn btn-pink btn-lg form-submit-btn">
                <WaIcon size={18} />
                Enviar consulta por WhatsApp
              </button>

              <p className="form-privacy-note">
                Tu consulta se envía por WhatsApp. No usamos formularios complejos ni pasos innecesarios.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
