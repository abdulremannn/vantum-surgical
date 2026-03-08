'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateValue } from '@/lib/utils'

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView && !started) {
      setStarted(true)
      animateValue(0, end, duration, setCount)
    }
  }, [inView, started, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
