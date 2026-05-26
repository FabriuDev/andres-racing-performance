import { useReveal } from '../hooks/useReveal'
import { WA_LINK, WA_DISPLAY } from '../constants'

const MAPS_EMBED = "https://maps.google.com/maps?q=Valeria+del+Mar,Buenos+Aires,Argentina&z=14&output=embed&hl=es"
const MAPS_LINK  = "https://maps.google.com/maps?q=Valeria+del+Mar,Buenos+Aires,Argentina"

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)
const WaIconSm = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const ExtIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Location() {
  const headRef  = useReveal()
  const panelRef = useReveal()
  const mapRef   = useReveal(0.05)

  return (
    <section
      className="map-section"
      id="ubicacion"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Andrés Racing Performance" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="addressLocality" content="Valeria del Mar" />
        <meta itemProp="addressRegion"   content="Buenos Aires" />
        <meta itemProp="addressCountry"  content="AR" />
      </div>

      {/* Header */}
      <div className="wrap">
        <div ref={headRef} className="map-head reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>Dónde estamos</div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>
            Valeria del Mar,<br />Buenos Aires
          </h2>
          <p className="s-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
            Coordiná tu turno por WhatsApp y te confirmamos la dirección exacta y disponibilidad.
            Atendemos de lunes a sábado.
          </p>
        </div>
      </div>

      {/* Map + panel */}
      <div className="map-body">

        {/* Info panel */}
        <div ref={panelRef} className="map-panel reveal">

          <div className="map-info-list">

            <div className="map-info-row">
              <div className="map-info-icon"><PinIcon /></div>
              <div className="map-info-content">
                <div className="map-info-label">Ubicación</div>
                <div className="map-info-val">Valeria del Mar</div>
                <div className="map-info-sub">Buenos Aires · Dirección exacta por WhatsApp</div>
              </div>
            </div>

            <div className="map-info-row">
              <div className="map-info-icon"><ClockIcon /></div>
              <div className="map-info-content">
                <div className="map-info-label">Horarios</div>
                <div className="map-info-val">Lunes a Sábado</div>
                <div className="map-info-sub">Con turno previo coordinado por WhatsApp</div>
              </div>
            </div>

            <div className="map-info-row">
              <div className="map-info-icon"><WaIconSm /></div>
              <div className="map-info-content">
                <div className="map-info-label">WhatsApp</div>
                <div className="map-info-val map-info-wa">{WA_DISPLAY}</div>
                <div className="map-info-sub">Respuesta el mismo día · Sin intermediarios</div>
              </div>
            </div>

          </div>

          <div className="map-actions">
            <a
              className="map-btn-wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIconSm /> Consultar turno
            </a>
            <a
              className="map-btn-ext"
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Maps <ExtIcon />
            </a>
          </div>

          <p className="map-panel-note">
            Único banco Dynojet de la zona — Valeria del Mar, Pinamar
          </p>
        </div>

        {/* Embedded map */}
        <div ref={mapRef} className="map-embed-col reveal-r">
          <div className="map-embed-frame">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Andrés Racing Performance — Valeria del Mar, Buenos Aires"
            />
          </div>
          <div className="map-embed-badge">
            <span className="map-embed-dot" />
            Valeria del Mar, Buenos Aires
          </div>
        </div>

      </div>
    </section>
  )
}
