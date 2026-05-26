import { useReveal } from '../hooks/useReveal'
import { waLink, WA_MSGS } from '../constants'
import { imgFallback } from '../utils/imgFallback'
import ImageCrossfade from './ImageCrossfade'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const AlignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <circle cx="8" cy="18" r="3"/>
    <circle cx="16" cy="6" r="3"/>
  </svg>
)
const WrenchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const SlidersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
)
const FlagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
)
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)
const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const kartServices = [
  {
    img: '/img/karting-alineacion.jpg',
    imgFallbacks: ['/img/karting/karting-alineacion.png'],
    imgAlt: 'Alineación de karting con calibrador — Andrés Racing Performance · Pinamar',
    imgPosition: 'center center',
    Icon: AlignIcon,
    title: 'Alineación de karting',
    desc: 'Geometría y ajuste para comportamiento predecible en pista.',
  },
  {
    img: '/img/karting/karting-ajuste-eje.png',
    imgFallbacks: [],
    imgAlt: 'Puesta a punto karting — ajuste de eje · Andrés Racing Performance',
    imgPosition: 'center center',
    Icon: SlidersIcon,
    title: 'Puesta a punto',
    desc: 'Ajuste fino de cada componente según la pista y el estilo de manejo.',
  },
  {
    img: '/img/karting/karting-mecanica.png',
    imgFallbacks: [],
    imgAlt: 'Revisión mecánica de karting — Andrés Racing Performance · Pinamar',
    imgPosition: 'center 30%',
    Icon: WrenchIcon,
    title: 'Revisión mecánica',
    desc: 'Control de motor, transmisión, frenos y chasis antes de cada uso.',
  },
  {
    img: '/img/karting/karting-preparacion.png',
    imgFallbacks: [],
    imgAlt: 'Preparación pre carrera de karting — Andrés Racing Performance',
    imgPosition: 'center center',
    Icon: FlagIcon,
    title: 'Preparación pre carrera',
    desc: 'Revisión completa para llegar al día de carrera con todo en orden.',
  },
  {
    img: '/img/karting/karting-bandera.png',
    imgFallbacks: [],
    imgAlt: 'Control post carrera karting — taller ARP Pinamar',
    imgPosition: 'center center',
    Icon: CheckCircleIcon,
    title: 'Control post carrera',
    desc: 'Verificación del estado general después del uso en pista.',
  },
  {
    img: '/img/karting/karting-setup-tablet.png',
    imgFallbacks: [],
    imgAlt: 'Asesoramiento técnico karting con datos — Andrés Racing Performance',
    imgPosition: 'center center',
    Icon: MessageIcon,
    title: 'Asesoramiento técnico',
    desc: 'Diagnóstico y orientación para entender qué mejorar y por dónde empezar.',
  },
]

const kartPhotos = [
  { src: '/img/karting/karting-taller.png',         alt: 'Kart ARP en taller — Pinamar' },
  { src: '/img/karting/karting-revision.png',       alt: 'Revisión delantera de karting — ARP' },
  { src: '/img/karting/karting-motor-premium.png',  alt: 'Motor karting premium — Andrés Racing Performance' },
  { src: '/img/karting/karting-motor.png',          alt: 'Trabajo en motor de karting — ARP' },
  { src: '/img/karting/karting-ajuste-eje.png',     alt: 'Ajuste de eje karting — ARP Pinamar' },
  { src: '/img/karting/karting-transmision.png',    alt: 'Transmisión de karting — Andrés Racing Performance' },
  { src: '/img/karting/karting-cadena.png',         alt: 'Cadena y piñón karting — ARP Pinamar' },
  { src: '/img/karting/karting-setup-tablet.png',   alt: 'Setup técnico karting con tablet — ARP' },
  { src: '/img/karting/karting-bandera.png',        alt: 'Andrés trabajando en karting — Pinamar Argentina' },
]

export default function Karting() {
  const headRef    = useReveal()
  const featureRef = useReveal(0.05)
  const bodyRef    = useReveal(0.05)
  const galleryRef = useReveal(0.1)
  const ctaRef     = useReveal(0.1)

  return (
    <section className="karting-section" id="karting">
      <div className="karting-glow" aria-hidden="true" />
      <div className="wrap">

        <div ref={headRef} className="s-head reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>
            <span className="kicker-new-badge">Nuevo</span>
            Karting
          </div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>
            Mecánica, alineación<br />y puesta a punto para kartings
          </h2>
          <p className="s-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            En karting cada ajuste se nota. Una alineación incorrecta, frenos desparejados o
            un chasis fuera de punto cambian todo el comportamiento en pista.
            Andrés Racing Performance incorpora servicios específicos para kartings.
          </p>
        </div>

        <div ref={featureRef} className="karting-feature reveal">
          <ImageCrossfade
            className="karting-feature-cf"
            interval={6000}
            images={[
              { src: '/img/karting/karting-hero.png',          alt: 'Taller karting ARP — Pinamar, Buenos Aires',              pos: 'center center' },
              { src: '/img/karting/karting-motor-premium.png', alt: 'Mecánica de motor karting — Andrés Racing Performance',   pos: 'center center' },
              { src: '/img/karting/karting-setup-tablet.png',  alt: 'Setup técnico karting con datos — ARP Pinamar',           pos: 'center center' },
            ]}
          />
          <div className="karting-feature-overlay">
            <span className="karting-feature-tag">Nueva área técnica · Valeria del Mar, Pinamar</span>
          </div>
        </div>

        <div ref={bodyRef} className="karting-grid reveal">
          {kartServices.map((s, i) => (
            <div className="kart-card" key={i}>
              {s.img && (
                <div className="kart-card-img-wrap">
                  <img
                    src={s.img}
                    alt={s.imgAlt}
                    className="kart-card-img"
                    style={{ objectPosition: s.imgPosition || 'center center' }}
                    loading="lazy"
                    decoding="async"
                    onError={imgFallback(...(s.imgFallbacks || []))}
                  />
                </div>
              )}
              <div className="kart-card-body">
                <div className="kart-card-icon"><s.Icon /></div>
                <div className="kart-card-title">{s.title}</div>
                <p className="kart-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={galleryRef} className="karting-photos reveal">
          {kartPhotos.map((p, i) => (
            <div className="kart-photo" key={i}>
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="karting-cta reveal">
          <p className="karting-cta-note">
            Nueva área karting — consultá disponibilidad para revisión, alineación y puesta a punto.
          </p>
          <a className="btn btn-pink btn-lg" href={waLink(WA_MSGS.karting)} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Consultar por karting
          </a>
        </div>

      </div>
    </section>
  )
}
