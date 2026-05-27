import { useReveal } from '../hooks/useReveal'

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const testimonials = [
  {
    name: 'Juan M.',
    initial: 'J',
    color: '#E6005C',
    service: 'Banco Dynojet',
    location: 'Pinamar',
    text: 'Llevé el auto al banco sin saber bien qué esperar, y la verdad me sorprendió todo. Te muestra HP, torque, la curva completa. Andrés te explica todo tranquilo, sin charlatanería. Muy buena onda.',
  },
  {
    name: 'Rodrigo C.',
    initial: 'R',
    color: '#7C3AED',
    service: 'Diagnóstico electrónico',
    location: 'Pinamar',
    text: 'Venía con un problema intermitente que en otros talleres no habían podido resolver. Andrés lo encontró enseguida con el diagnóstico. Sin rodeos, sin adivinar, directo al punto. Eso vale mucho.',
  },
  {
    name: 'Lucas F.',
    initial: 'L',
    color: '#0891B2',
    service: 'Performance + Banco',
    location: 'Buenos Aires',
    text: 'Le hice unas modificaciones al auto y quería ver si realmente habían servido. Medimos antes y después en banco, y la diferencia estaba ahí en los números. Lo recomiendo sin dudarlo.',
  },
  {
    name: 'Sergio P.',
    initial: 'S',
    color: '#059669',
    service: 'Mecánica general',
    location: 'Cariló',
    text: 'Lo llevé por un tema de motor que me preocupaba bastante. La revisión fue completa y me dijo exactamente lo que había y lo que no hacía falta tocar. Eso te da mucha confianza.',
  },
  {
    name: 'Martín V.',
    initial: 'M',
    color: '#D97706',
    service: 'Puesta a punto',
    location: 'Pinamar',
    text: 'Me lo habían recomendado y salí muy contento. El auto responde distinto, se nota un montón la diferencia. La atención por WhatsApp también muy rápida, sin vueltas. Diez puntos.',
  },
  {
    name: 'Pablo G.',
    initial: 'P',
    color: '#BE185D',
    service: 'Banco Dynojet',
    location: 'Mar del Plata',
    text: 'Vine desde Mar del Plata especialmente para el banco Dynojet. Vale el viaje. Andrés conoce el tema, no te vende humo. Me fui con los datos claros y sé exactamente por dónde seguir.',
  },
]

const track = [...testimonials, ...testimonials]

export default function Testimonials() {
  const headRef    = useReveal()
  const carouselRef = useReveal(0.06)
  const bottomRef  = useReveal(0.1)

  return (
    <section className="test-section" id="testimonios">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal" style={{ textAlign: 'center' }}>
          <a
            className="testi-rating-badge"
            href="https://g.page/r/andresracingperformance/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver reseñas en Google"
          >
            <GoogleIcon />
            <span className="testi-stars-row">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </span>
            <span className="testi-rating-num">5.0</span>
            <span className="testi-rating-sep">·</span>
            <span className="testi-rating-src">28 reseñas en Google</span>
          </a>
          <h2 className="s-title">Lo que dicen quienes<br />pasaron por el taller</h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            Cada uno llegó con algo distinto. Lo que no cambia es la atención.
          </p>
        </div>
      </div>

      {/* Carousel — fuera del wrap para ocupar todo el ancho */}
      <div ref={carouselRef} className="testi-carousel-wrap reveal">
        {/* Edge fades via divs, sin mask-image */}
        <div className="testi-fade testi-fade-l" aria-hidden="true" />
        <div className="testi-fade testi-fade-r" aria-hidden="true" />

        <div className="testi-track">
          {track.map((t, i) => (
            <article
              className="testi-card"
              key={i}
              style={{ '--ac': t.color }}
              aria-hidden={i >= testimonials.length || undefined}
            >
              {/* Tinte de color — div separado, no pseudo, para evitar compositing */}
              <div className="testi-card-tint" aria-hidden="true" />

              <div className="testi-top-row">
                <span className="testi-pill">{t.service}</span>
                <div className="testi-stars" aria-label="5 estrellas">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
              </div>

              <p className="testi-text">{t.text}</p>

              {/* DIV, no footer — evita la regla global footer{background:var(--black-deep)} */}
              <div className="testi-foot">
                <div className="testi-avatar" aria-hidden="true">{t.initial}</div>
                <div className="testi-info">
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div ref={bottomRef} className="testi-bottom reveal">
          <a
            className="testi-google-link"
            href="https://g.page/r/andresracingperformance/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon />
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}
