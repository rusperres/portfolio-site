"use client"

import * as React from "react"

type Toast = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

const ToastContext = React.createContext<any>(null)

export function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  function toast(toast: Toast) {
    setToasts((prev) => [...prev, toast])

    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }

  return { toast, toasts }
}