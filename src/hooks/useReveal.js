import { useEffect, useRef } from 'react'

/**
 * Adds the `visible` class to every `.reveal` element when it scrolls
 * into the viewport (progressive enhancement — CSS handles the animation).
 */
export default function useReveal() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current ?? document
    const elements = root.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return rootRef
}
