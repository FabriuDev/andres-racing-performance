import { useReveal } from '../hooks/useReveal'
import { waLink, WA_MSGS } from '../constants'
import ImageCrossfade from './ImageCrossfade'

const WaIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const WrenchIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const ActivityIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const AlignIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <circle cx="8" cy="18" r="3"/>
    <circle cx="16" cy="6" r="3"/>
  </svg>
)
const FlagIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
)
const TargetIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const services = [
  {
    images: [
      { src: '/img/svc/diagnostico-tablet-capo.png',    alt: 'Diagnóstico con escáner — Andrés Racing Performance · Pinamar', pos: 'center center' },
      { src: '/img/svc/mecanica-taller-piezas.png',     alt: 'Taller mecánica ARP — Pinamar', pos: 'center center' },
      { src: '/img/svc/diagnostico-tablet-interior.png',alt: 'Diagnóstico electrónico ARP — Pinamar', pos: 'center center' },
    ],
    Icon: WrenchIcon,
    title: 'Mecánica y diagnóstico',
    desc: 'Mantenimiento, revisión y diagnóstico electrónico. Encontramos la causa real antes de tocar cualquier pieza.',
    points: ['Diagnóstico con escáner', 'Revisión mecánica general', 'Detección de fallas e intermitentes', 'Consulta técnica previa'],
    ctaLabel: 'Consultar servicio',
    ctaHref: waLink(WA_MSGS.mecanica),
  },
  {
    images: [
      { src: '/img/svc/dyno-golf-banco.png',    alt: 'Banco Dynojet VW Golf — Andrés Racing Performance · Pinamar', pos: 'center center' },
      { src: '/img/svc/dyno-peugeot-banco.png', alt: 'Banco Dynojet Peugeot — ARP Pinamar', pos: 'center center' },
      { src: '/img/dyno-banco-curva.png',        alt: 'Curva potencia banco Dynojet — ARP', pos: 'center center' },
    ],
    featured: true,
    Icon: ActivityIcon,
    title: 'Banco Dynojet',
    desc: 'Medición de HP, torque y curva de potencia bajo condiciones controladas. El único banco Dynojet disponible en la zona.',
    points: ['Medición de HP y Nm', 'Curva de rendimiento completa', 'Comparación antes / después', 'Autos originales y modificados'],
    ctaLabel: 'Consultar turno para Dynojet',
    ctaHref: waLink(WA_MSGS.dynojet),
  },
  {
    images: [
      { src: '/img/karting/karting-motor-premium.png', alt: 'Mecánica karting — Andrés Racing Performance · Pinamar', pos: 'center center' },
      { src: '/img/karting/karting-revision.png',      alt: 'Revisión karting ARP — Pinamar', pos: 'center center' },
      { src: '/img/karting/karting-setup-tablet.png',  alt: 'Setup técnico karting — ARP Pinamar', pos: 'center center' },
    ],
    Icon: FlagIcon,
    title: 'Karting',
    desc: 'Área técnica especializada para kartings. Revisión mecánica, alineación y puesta a punto para rendir más en pista.',
    points: ['Revisión mecánica integral', 'Alineación y geometría', 'Puesta a punto por pista', 'Preparación pre carrera y post evento'],
    isNew: true,
    ctaLabel: 'Consultar por karting',
    ctaHref: waLink(WA_MSGS.karting),
  },
  {
    images: [
      { src: '/img/svc/performance-motor-turbo.png', alt: 'Motor turbo performance — ARP Pinamar', pos: 'center center' },
      { src: '/img/svc/performance-escape-quad.png', alt: 'Escape deportivo performance — ARP', pos: 'center 40%' },
      { src: '/img/svc/mecanica-motor-modif.png',    alt: 'Motor modificado — Andrés Racing Performance', pos: 'center center' },
    ],
    Icon: ZapIcon,
    title: 'Performance automotriz',
    desc: 'Para autos modificados o proyectos de calle que buscan más rendimiento con criterio técnico y datos reales.',
    points: ['Autos con reprogramación', 'Escape y admisión deportiva', 'Turbo e intercooler', 'Validación en banco Dynojet'],
    ctaLabel: 'Consultar por mi proyecto',
    ctaHref: waLink(WA_MSGS.performance),
  },
  {
    images: [
      { src: '/img/svc/alineacion-sensor-rueda.png',    alt: 'Alineación computarizada — Andrés Racing Performance · Pinamar', pos: 'center center' },
      { src: '/img/svc/alineacion-tren-herramienta.png',alt: 'Tren delantero alineación — ARP Pinamar', pos: 'center center' },
      { src: '/img/svc/frenos-disco-pinza.png',         alt: 'Frenos y tren delantero — ARP', pos: 'center center' },
    ],
    Icon: AlignIcon,
    title: 'Alineación y tren delantero',
    desc: 'Control y corrección de geometría para seguridad, desgaste parejo y mejor comportamiento en ruta.',
    points: ['Alineación computarizada', 'Revisión de dirección', 'Control de suspensión', 'Análisis de desgaste de cubiertas'],
    ctaLabel: 'Consultar alineación',
    ctaHref: waLink(WA_MSGS.alineacion),
  },
  {
    images: [
      { src: '/img/svc/pista-escape-suspension.png', alt: 'Preparación para pista — ARP Pinamar', pos: 'center center' },
      { src: '/img/performance-turbo.png',            alt: 'Auto preparado pista — Andrés Racing Performance', pos: 'center center' },
    ],
    Icon: TargetIcon,
    title: 'Preparación para pista',
    desc: 'Revisión y ajuste técnico previo a competencia o uso en circuito para autos y kartings.',
    points: ['Revisión general pre carrera', 'Control de seguridad activa', 'Ajustes de respuesta y frenada', 'Validación post evento'],
    ctaLabel: 'Consultar servicio',
    ctaHref: waLink(WA_MSGS.pista),
  },
]

export default function Services() {
  const headRef = useReveal()
  const ref = useReveal(0.05)
  return (
    <section className="services-section" id="servicios">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal">
          <div className="kicker">Qué hacemos</div>
          <h2 className="s-title">Mecánica, Dynojet<br />y karting técnico</h2>
          <p className="s-sub">
            Banco Dynojet, diagnóstico, mecánica general, alineación, performance y karting.
            Cada trabajo arranca con un diagnóstico real — sin suposiciones.
          </p>
        </div>
        <div ref={ref} className="svc-grid reveal">
          {services.map((s, i) => (
            <div className={`svc-card${s.featured ? ' featured' : ''}${s.isNew ? ' svc-new' : ''}`} key={i}>
              {s.images && s.images.length > 0 && (
                <div className="svc-img-wrap">
                  <ImageCrossfade images={s.images} interval={5000} />
                </div>
              )}
              <div className="svc-body">
                <div className="svc-icon"><s.Icon /></div>
                <div className="svc-title">
                  {s.title}
                  {s.isNew && <span className="svc-new-badge">Nuevo</span>}
                </div>
                <p className="svc-desc">{s.desc}</p>
                <ul className="svc-points">
                  {s.points.map((p, j) => (
                    <li className="svc-point" key={j}>{p}</li>
                  ))}
                </ul>
                <a
                  className="svc-cta"
                  href={s.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon /> {s.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
