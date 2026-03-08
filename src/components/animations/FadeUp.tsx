'use client'
import { useEffect, useRef } from 'react'

// Simple, reliable scroll-reveal using IntersectionObserver + CSS classes
// No framer-motion dependency issues — pure CSS transitions

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: keyof React.JSX.IntrinsicElements
}

export function FadeUp({ children, className = '', delay = 0, as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  const AnyTag = Tag as any
  return (
    <AnyTag ref={ref} className={`reveal ${className}`}>
      {children}
    </AnyTag>
  )
}

export function Stagger({ children, className = '', baseDelay = 0, stagger = 100 }: {
  children: React.ReactNode
  className?: string
  baseDelay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const items = container.querySelectorAll(':scope > .stagger-item')
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), baseDelay + i * stagger)
          })
          obs.unobserve(container)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -32px 0px' }
    )
    obs.observe(container)
    return () => obs.disconnect()
  }, [baseDelay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`stagger-item reveal ${className}`}>
      {children}
    </div>
  )
}
