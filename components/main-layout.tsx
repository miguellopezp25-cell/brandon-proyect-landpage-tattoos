"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./sidebar"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarWidth, setSidebarWidth] = useState(224) // 14rem = 224px

  useEffect(() => {
    const sidebar = document.querySelector("aside")
    if (sidebar) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setSidebarWidth(entry.contentRect.width)
        }
      })
      observer.observe(sidebar)
      return () => observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main
        className="min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarWidth }}
      >
        {children}
      </main>
    </div>
  )
}
