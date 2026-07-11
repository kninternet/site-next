'use client'

import { useState, createContext, useContext, useCallback } from 'react'
import { CoverageModal } from '@/components/coverage-modal'

interface ModalContextType {
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
})

export function useModal() {
  return useContext(ModalContext)
}

export function CoverageModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <CoverageModal open={open} onClose={closeModal} />
    </ModalContext.Provider>
  )
}