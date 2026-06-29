/**
 * Returns an onError handler that tries fallback URLs in order.
 * When all fallbacks are exhausted, hides the parent wrapper element.
 *
 * Usage:
 *   <img src="/img/primary.jpg" onError={imgFallback('/img/fallback.webp')} />
 *   <img src="/img/primary.jpg" onError={imgFallback('/img/fb1.jpg', '/img/fb2.webp')} />
 *   <img src="/img/primary.jpg" onError={imgFallback()} />  // hide immediately on error
 */
export const imgFallback = (...fallbacks) => (e) => {
  const img = e.currentTarget
  const tried = parseInt(img.dataset.fb || '0', 10)
  if (tried < fallbacks.length) {
    img.dataset.fb = tried + 1
    img.src = fallbacks[tried]
  } else {
    img.parentElement.style.display = 'none'
  }
}
