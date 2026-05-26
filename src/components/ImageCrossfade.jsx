import { useState, useEffect, useRef } from 'react'
import { imgFallback } from '../utils/imgFallback'

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ImageCrossfade({ images, interval = 5000, className = '' }) {
  const [active, setActive] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (images.length <= 1 || reduced) return
    timer.current = setInterval(
      () => setActive(a => (a + 1) % images.length),
      interval
    )
    return () => clearInterval(timer.current)
  }, [images.length, interval])

  return (
    <div className={`img-cf${className ? ` ${className}` : ''}`}>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`img-cf-slide${i === active ? ' active' : ''}`}
          style={{ objectPosition: img.pos || 'center center' }}
          loading="lazy"
          decoding="async"
          onError={imgFallback(...(img.fallbacks || []))}
        />
      ))}
    </div>
  )
}
