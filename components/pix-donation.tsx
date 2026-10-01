'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Check, Copy, QrCode, User } from 'lucide-react'

const PIX = {
  key: 'sementearacaju@gmail.com',
  name: 'Alana Carvalho',
  type: 'Email',
}

type CopyState = 'idle' | 'copied' | 'error'

export function PixDonation() {
  const [state, setState] = useState<CopyState>('idle')
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  function flash(next: CopyState) {
    setState(next)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), 2200)
  }

  async function copyKey() {
    let ok = false
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(PIX.key)
        ok = true
      } else {
        ok = copyWithFallback()
      }
    } catch {
      ok = copyWithFallback()
    }
    flash(ok ? 'copied' : 'error')
  }

  function copyWithFallback() {
    const textarea = document.createElement('textarea')
    textarea.value = PIX.key
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.top = '0'
    textarea.style.left = '0'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, PIX.key.length)
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    document.body.removeChild(textarea)
    return ok
  }

  return (
    <div className="w-full max-w-xl rounded-3xl border border-primary-foreground/15 bg-background p-5 text-foreground shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-6">
      <div className="flex items-center gap-2">
        <QrCode className="size-4 text-primary" aria-hidden="true" />
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Doe via Pix
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-start gap-5">
        <div className="shrink-0 rounded-2xl bg-white p-3 shadow-sm">
          <Image
            src="/assets/img/qrcode-pix-semente.png"
            alt="QR Code Pix para doação à Igreja Batista Semente"
            width={168}
            height={166}
            className="size-[150px] object-contain sm:size-[168px]"
          />
        </div>

        <div className="min-w-[15rem] flex-1 text-center sm:text-left">
          <p className="text-sm leading-6 text-muted-foreground">
            Aponte a câmera do seu banco para o QR Code ao lado, ou copie a chave
            abaixo.
          </p>

          <button
            type="button"
            onClick={copyKey}
            aria-label={`Copiar chave Pix: ${PIX.key}`}
            className="mt-4 flex w-full items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-left transition-colors hover:bg-muted"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Chave Pix
              </span>
              <span className="block truncate text-sm font-semibold text-foreground select-text">
                {PIX.key}
              </span>
            </span>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {state === 'copied' ? <Check className="size-4" /> : <Copy className="size-4" />}
            </span>
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`mt-2 min-h-5 text-xs font-semibold ${
              state === 'copied'
                ? 'text-primary'
                : state === 'error'
                  ? 'text-destructive'
                  : 'text-transparent'
            }`}
          >
            {state === 'copied'
              ? 'Chave copiada!'
              : state === 'error'
                ? 'Não foi possível copiar. Selecione e copie manualmente.'
                : 'placeholder'}
          </p>
        </div>
      </div>

      <dl className="mt-5 grid gap-3 border-t border-border pt-5 text-sm">
        <div className="flex items-center gap-2">
          <dt className="w-16 shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Nome
          </dt>
          <dd className="flex min-w-0 items-center gap-1.5 font-medium">
            <User className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
            {PIX.name}
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="w-16 shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Tipo
          </dt>
          <dd className="font-medium">{PIX.type}</dd>
        </div>
      </dl>
    </div>
  )
}