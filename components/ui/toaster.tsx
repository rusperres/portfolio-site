"use client"

import { ToastProvider, ToastViewport } from "./toast"

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport className="fixed bottom-0 right-0 p-4 w-96" />
    </ToastProvider>
  )
}