import type { ComponentType } from 'react'
import {
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '@/components/brand-icons'

export const SOCIAL_LINKS = [
  {
    key: 'instagram',
    href: 'https://www.instagram.com/sementeaju/',
    label: 'Instagram',
    handle: '@sementeaju',
    Icon: InstagramIcon,
    featured: false,
  },
  {
    key: 'youtube',
    href: 'https://www.youtube.com/@batistadopinheiro',
    label: 'YouTube',
    handle: '@batistadopinheiro',
    Icon: YoutubeIcon,
    featured: false,
  },
  // {
  //   key: 'whatsapp',
  //   href: 'https://wa.me/5579988172199',
  //   label: 'WhatsApp',
  //   handle: '(79) 98817-2199',
  //   Icon: WhatsappIcon,
  //   featured: true,
  // },
] as const satisfies readonly {
  key: string
  href: string
  label: string
  handle: string
  Icon: ComponentType<{ className?: string }>
  featured: boolean
}[]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-2.5 ${className}`}
      aria-label="Redes sociais da Semente Aju"
    >
      {SOCIAL_LINKS.map(({ key, href, label, handle, Icon, featured }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-featured={featured ? 'true' : 'false'}
          >
            <Icon className="size-4 shrink-0" />
            <span>{label}</span>
            <span className="sr-only">— {handle}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}