import { useReveal } from '../../hooks/useReveal'
import { waLink, WA_MSGS } from '../../data/constants'
import { imgFallback } from '../../utils/imgFallback'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ITEMS = [
  // ── Dynojet ──
  { src: '/img/svc/dyno-golf-banco.webp',    alt: 'Auto en banco Dynojet — Andrés Racing Performance · Pinamar', label: 'Banco Dynojet' },
  { src: '/img/svc/dyno-peugeot-banco.webp', alt: 'Banco Dynojet Peugeot — ARP Pinamar',                        label: 'Banco Dynojet' },
  { src: '/img/dyno-banco-curva.webp',        alt: 'Curva de potencia HP y Nm — Dynojet ARP',                    label: 'Curva Dynojet' },
  { src: '/img/dyno-auto-banco.webp',         alt: 'Auto sobre banco de rodillos Dynojet — ARP',                 label: 'Banco Dynojet' },
  { src: '/img/dyno-software-curva.webp',     alt: 'Software Dynojet con curva de potencia — ARP',               label: 'Software Dynojet' },
  // ── Mecánica ──
  { src: '/img/svc/diagnostico-tablet-capo.webp',    alt: 'Diagnóstico electrónico con tablet sobre motor — ARP', label: 'Diagnóstico' },
  { src: '/img/svc/diagnostico-tablet-interior.webp',alt: 'Diagnóstico con escáner interior — ARP Pinamar',       label: 'Diagnóstico' },
  { src: '/img/svc/mecanica-taller-piezas.webp',     alt: 'Taller de mecánica con piezas — ARP Pinamar',          label: 'Mecánica' },
  { src: '/img/svc/mecanica-mesa-herramientas.webp', alt: 'Mesa de herramientas taller mecánico — ARP',           label: 'Equipamiento' },
  { src: '/img/diagnostico-escaner.webp',            alt: 'Escáner diagnóstico automotriz — Andrés Racing',       label: 'Escáner' },
  // ── Performance ──
  { src: '/img/svc/performance-motor-turbo.webp', alt: 'Motor turbo performance — ARP Pinamar',                  label: 'Performance' },
  { src: '/img/svc/performance-escape-quad.webp', alt: 'Escape deportivo cuádruple — Andrés Racing Performance', label: 'Escape' },
  { src: '/img/svc/mecanica-motor-modif.webp',    alt: 'Motor modificado con preparación ARP',                   label: 'Motor' },
  { src: '/img/performance-turbo.webp',           alt: 'Auto con preparación performance — ARP Pinamar',         label: 'Performance' },
  { src: '/img/svc/pista-escape-suspension.webp', alt: 'Escape y suspensión preparación pista — ARP',           label: 'Pista' },
  // ── Alineación ──
  { src: '/img/svc/alineacion-sensor-rueda.webp',    alt: 'Alineación computarizada con sensor rueda — ARP Pinamar', label: 'Alineación' },
  { src: '/img/svc/alineacion-tren-herramienta.webp',alt: 'Tren delantero revisión ARP',                             label: 'Tren delantero' },
  { src: '/img/svc/frenos-disco-pinza.webp',         alt: 'Disco y pinza de frenos — ARP Pinamar',                  label: 'Frenos' },
  { src: '/img/svc/frenos-tren-taller.webp',         alt: 'Tren delantero en taller — Andrés Racing Performance',   label: 'Suspensión' },
  { src: '/img/detalle-llantas.webp',                alt: 'Llantas y frenos performance — ARP',                     label: 'Ruedas' },
  // ── Karting ──
  { src: '/img/karting/karting-hero.webp',          alt: 'Karting en taller ARP — Valeria del Mar, Pinamar',   label: 'Karting' },
  { src: '/img/karting/karting-motor-premium.webp', alt: 'Motor karting premium — Andrés Racing Performance',  label: 'Motor karting' },
  { src: '/img/karting/karting-alineacion.webp',    alt: 'Alineación de karting con calibrador — ARP Pinamar', label: 'Alineación' },
  { src: '/img/karting/karting-revision.webp',      alt: 'Revisión mecánica de karting — ARP',                 label: 'Revisión' },
  { src: '/img/karting/karting-setup-tablet.webp',  alt: 'Setup técnico karting con datos — ARP Pinamar',      label: 'Setup técnico' },
  { src: '/img/karting/karting-preparacion.webp',   alt: 'Preparación pre carrera karting — ARP',              label: 'Pre carrera' },
  // ── Taller ──
  { src: '/img/taller-interior.webp',      alt: 'Interior taller mecánico ARP — Valeria del Mar, Pinamar', label: 'El taller' },
  { src: '/img/taller-herramientas.webp',  alt: 'Herramientas y equipamiento taller ARP',                   label: 'Equipamiento' },
  { src: '/img/atencion-cliente.webp',     alt: 'Atención directa con el cliente — Andrés Racing',         label: 'Atención' },
  { src: '/img/taller-mecanica-auto.webp', alt: 'Mecánica en taller ARP — Pinamar, Buenos Aires',          label: 'Taller' },
]

// Duplicated for seamless loop — animation goes to -50% (= one set's width)
const ROW_1 = [...ITEMS.slice(0, 15), ...ITEMS.slice(0, 15)]
const ROW_2 = [...ITEMS.slice(15),    ...ITEMS.slice(15)]

function MqItem({ item, idx }) {
  return (
    <div className="gal-mq-item" key={idx}>
      <img
        src={item.src}
        alt={item.alt}
        className="gal-mq-img"
        loading="lazy"
        decoding="async"
        onError={imgFallback()}
      />
      <span className="gal-mq-label">{item.label}</span>
    </div>
  )
}

export default function Gallery() {
  const headRef = useReveal()
  const ctaRef  = useReveal(0.1)

  return (
    <section className="gallery-section" id="galeria">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal" style={{ textAlign: 'center' }}>
          <div className="kicker" style={{ justifyContent: 'center' }}>El taller</div>
          <h2 className="s-title">Acá adentro pasan<br />cosas reales.</h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            Banco Dynojet, diagnóstico, mecánica y karting. Mirá cómo trabajamos antes de venir.
          </p>
        </div>
      </div>

      <div className="gal-marquee-wrap" aria-hidden="true">
        <div className="gal-marquee-row">
          {ROW_1.map((item, i) => <MqItem item={item} idx={i} key={i} />)}
        </div>
        <div className="gal-marquee-row">
          {ROW_2.map((item, i) => <MqItem item={item} idx={i} key={i} />)}
        </div>
      </div>

      <div className="wrap">
        <div ref={ctaRef} className="gal-cta reveal">
          <p className="gal-cta-text">¿Te interesa lo que ves? Consultá por tu auto.</p>
          <a className="btn btn-pink" href={waLink(WA_MSGS.general)} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Pedir turno por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
