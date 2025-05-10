"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mic, Menu, Users, LogIn, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/components/auth/auth-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    // Throttled scroll handler for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate header background opacity based on scroll position
  const headerBgOpacity = Math.min(scrollY / 100, 0.9)

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/features", label: "বৈশিষ্ট্য" },
    { href: "/how-it-works", label: "কিভাবে কাজ করে" },
    { href: "/developers", label: "ডেভেলপার" },
    { href: "/team", label: "টিম" },
    { href: "/contact", label: "যোগাযোগ" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${headerBgOpacity})`,
        boxShadow: scrollY > 50 ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        backdropFilter: scrollY > 50 ? "blur(8px)" : "none",
      }}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.25, 0.75, 1],
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <Mic className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h1
            className={cn(
              "font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300",
              scrollY > 50 ? "text-xl" : "text-2xl",
            )}
          >
            প্রগতি
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={24} height={14} className="h-4 w-auto" priority />

          {/* User Authentication */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  <User className="h-4 w-4 mr-2" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/profile" className="flex items-center w-full">
                    <User className="h-4 w-4 mr-2" />
                    প্রোফাইল
                  </Link>
                </DropdownMenuItem>
                {user.role === "parent" && (
                  <DropdownMenuItem>
                    <Link href="/parent-dashboard" className="flex items-center w-full">
                      <Users className="h-4 w-4 mr-2" />
                      অভিভাবক ড্যাশবোর্ড
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
                  <LogOut className="h-4 w-4 mr-2" />
                  লগআউট
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="hidden md:flex">
              <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                <LogIn className="h-4 w-4 mr-2" />
                লগইন
              </Button>
            </Link>
          )}

          {/* Parent Dashboard Button - Only show if logged in as parent */}
          {user && user.role === "parent" && (
            <Link href="/parent-dashboard" className="hidden md:flex">
              <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                <Users className="h-4 w-4 mr-2" />
                অভিভাবক ড্যাশবোর্ড
              </Button>
            </Link>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] border-l-cyan-500">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Mic className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      প্রগতি
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {user ? (
                    <>
                      <Link
                        href="/profile"
                        className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100 flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        প্রোফাইল
                      </Link>

                      {user.role === "parent" && (
                        <Link
                          href="/parent-dashboard"
                          className="text-blue-600 hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-blue-50 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          <Users className="h-4 w-4 mr-2" />
                          অভিভাবক ড্যাশবোর্ড
                        </Link>
                      )}

                      <button
                        className="text-red-600 hover:text-red-700 transition-colors py-2 px-4 rounded-md hover:bg-red-50 flex items-center w-full text-left"
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        লগআউট
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="text-blue-600 hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-blue-50 flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      লগইন
                    </Link>
                  )}
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    বিজ্ঞান প্রকল্প
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Button */}
          <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            বিজ্ঞান প্রকল্প
          </Button>
        </div>
      </div>
    </header>
  )
}
