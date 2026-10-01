'use client'

import { useState } from 'react'
import { Leaf, Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    setDarkMode((current) => {
      const next = !current
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Semente Aju - início">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">semente<span className="text-primary">aju</span></span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Navegação principal">
          <a className="transition-colors hover:text-foreground" href="#sobre">Sobre nós</a>
          <a className="transition-colors hover:text-foreground" href="#agenda">Agenda</a>
          <a className="transition-colors hover:text-foreground" href="#reflexoes">Reflexões</a>
          <a className="transition-colors hover:text-foreground" href="#contato">Contato</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}>
            {darkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <a href="#contato" className="hidden h-8 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 sm:inline-flex">Faça parte</a>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-border/70 px-5 py-4 md:hidden" aria-label="Menu mobile">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {['sobre', 'agenda', 'contribua', 'reflexoes', 'contato'].map((item) => (
              <a key={item} className="capitalize text-muted-foreground hover:text-foreground" href={`#${item}`} onClick={() => setMenuOpen(false)}>{item === 'agenda' ? 'Agenda' : item === 'contribua' ? 'Contribua' : item === 'reflexoes' ? 'Reflexões' : item === 'contato' ? 'Contato' : 'A Semente'}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex items-center gap-2 font-medium text-foreground"><Leaf className="size-4 text-primary" aria-hidden="true" /> sementeaju</div>
        <p>Plantando oportunidades, cultivando futuros.</p>
        <p>© {new Date().getFullYear()} Semente Aju</p>
      </div>
    </footer>
  )
}
