"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "../../utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export function NavBar({ items, className, activeTab: externalActiveTab, onTabChange }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(externalActiveTab || items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (externalActiveTab) {
      setActiveTab(externalActiveTab);
    }
  }, [externalActiveTab]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        // Default positioning removed to allow parent control
        // "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        "flex justify-center",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-sm">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name)
                onTabChange?.(item.name)
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors outline-none",
                "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400",
                isActive && "text-primary dark:text-blue-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 dark:bg-blue-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary dark:bg-blue-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 dark:bg-blue-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 dark:bg-blue-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 dark:bg-blue-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}