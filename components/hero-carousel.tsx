'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { TouchEvent } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const slides = [
  {
    src: '/assets/img/galeria/semente-1.webp',
    caption: 'Uma comunidade que celebra a vida',
  },
  {
    src: '/assets/img/galeria/semente-2.webp',
    caption: 'Igreja de portas abertas em Aracaju',
  },
  {
    src: '/assets/img/galeria/semente-3.webp',
    caption: 'Juntos construímos o Reino de Deus',
  },
  {
    src: '/assets/img/galeria/semente-4.webp',
    caption: 'Acolhimento, diversidade e cuidado com a criação',
  },
  {
    src: '/assets/img/galeria/semente-5.webp',
    caption: 'Um lugar para cada pessoa',
  },
  {
    src: '/assets/img/galeria/semente-6.webp',
    caption: 'Fé que se traduz em cuidado',
  },
]

const AUTOPLAY_MS = 6000
const SWIPE_THRESHOLD = 45

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStart = useRef<number | null>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const go = useCallback((step: number) => {
    setIndex((current) => (current + step + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!playing || reducedMotion) return
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [index, playing, reducedMotion, go])

  function handleTouchStart(event: TouchEvent) {
    touchStart.current = event.touches[0].clientX
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStart.current === null) return
    const distance = event.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(distance) < SWIPE_THRESHOLD) return
    go(distance < 0 ? 1 : -1)
  }

  return (
    <div
      className="relative order-1 aspect-[16/10] touch-pan-y overflow-hidden rounded-[1.5rem] select-none lg:order-2 lg:aspect-[4/3]"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de imagens da Semente"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, position) => {
        const isActive = position === index
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              fill
              priority={position === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        )
      })}

      <div className="absolute inset-0 bg-gradient-to-t from-[#4f2029]/70 via-[#4f2029]/15 to-transparent" />

      <p
        className="absolute inset-x-5 bottom-14 text-sm font-medium text-white transition-opacity duration-500 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-[55%]"
        aria-live="polite"
      >
        {slides[index].caption}
      </p>

      <div className="absolute inset-x-0 bottom-3 hidden items-center justify-center gap-2 sm:flex">
        {slides.map((slide, position) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(position)}
            aria-label={`Ir para a imagem ${position + 1}`}
            aria-current={position === index ? 'true' : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              position === index
                ? 'w-6 bg-white'
                : 'w-1.5 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      <div className="absolute right-3 bottom-3 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Imagem anterior"
          className="flex size-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition-colors hover:bg-black/55"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => setPlaying((current) => !current)}
          aria-label={playing ? 'Pausar carrossel' : 'Reproduzir carrossel'}
          className="flex size-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition-colors hover:bg-black/55"
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima imagem"
          className="flex size-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition-colors hover:bg-black/55"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}