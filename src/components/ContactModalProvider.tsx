'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import ContactModal from './ContactModal'

type ContactModalContextValue = {
  isOpen: boolean
  openModal: (need?: string) => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [presetNeed, setPresetNeed] = useState<string | undefined>(undefined)

  const openModal = useCallback((need?: string) => {
    setPresetNeed(need)
    setIsOpen(true)
  }, [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ isOpen, openModal, closeModal }), [isOpen, openModal, closeModal])

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} presetNeed={presetNeed} />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
  return ctx
}
