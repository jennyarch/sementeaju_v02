type IconProps = {
  className?: string
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1.75" y="4.75" width="20.5" height="14.5" rx="4.5" />
      <path d="M10.2 9.05v6.3l5.4-3.15z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.5 11.85a8.5 8.5 0 0 1-12.56 7.47L3.5 20.5l1.22-4.32a8.5 8.5 0 1 1 15.78-4.33Z" />
      <path
        d="M9.1 8.4c.2-.44.4-.45.6-.45h.5c.16 0 .4.06.6.47.22.53.75 1.83.82 1.96.06.13.1.28.02.45-.09.17-.13.28-.26.43l-.39.45c-.13.13-.26.27-.12.53.15.26.65 1.07 1.4 1.73.96.86 1.77 1.13 2.03 1.25.26.13.41.11.57-.06.15-.17.65-.76.83-1.02.17-.26.35-.22.57-.13.22.08 1.43.68 1.67.8.24.13.4.19.46.3.06.11.06.65-.16 1.27-.22.62-1.3 1.2-1.79 1.26-.44.06-1.01.08-1.63-.1-.37-.11-.86-.27-1.48-.53-2.6-1.13-4.3-3.77-4.42-3.95-.13-.17-1.05-1.4-1.05-2.67 0-1.27.66-1.9.9-2.16Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.4h3.5V20.5H3.3zM9.6 8.4h3.35v1.66h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.2 4.18 5.07V20.5h-3.5v-5.9c0-1.41-.03-3.23-1.98-3.23-1.98 0-2.28 1.54-2.28 3.12v5.99H9.6z" />
    </svg>
  )
}