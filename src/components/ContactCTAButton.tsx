'use client'

import { useContactModal } from './ContactModalProvider'

export default function ContactCTAButton({
  label = 'Prendre contact avec un expert',
  need,
  variant = 'primary',
  className = '',
}: {
  label?: string
  need?: string
  variant?: 'primary' | 'outline'
  className?: string
}) {
  const { openModal } = useContactModal()

  const styles =
    variant === 'primary'
      ? 'bg-electric text-white hover:bg-electric-2'
      : 'border border-mist text-ink-800 hover:border-electric hover:text-electric-2'

  return (
    <button
      onClick={() => openModal(need)}
      className={`px-6 py-3.5 rounded-full text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {label}
    </button>
  )
}
