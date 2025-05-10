"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  phone: string
  role: "student" | "parent" | "teacher"
  class?: string
  hasDevice?: boolean
  deviceId?: string
  studentId?: string
  schoolName?: string
  city?: string
  address?: string
  country?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: Partial<User> & { password: string }) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("progoti-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const mockUser: User = {
        id: "user-123",
        name: "Demo User",
        email,
        phone: "01700000000",
        role: "student",
        class: "10",
      }

      setUser(mockUser)
      localStorage.setItem("progoti-user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create a mock user with an ID
      const mockUser: User = {
        id: `user-${Date.now()}`,
        name: userData.name || "New User",
        email: userData.email || "",
        phone: userData.phone || "",
        role: userData.role || "student",
        ...userData,
      }

      setUser(mockUser)
      localStorage.setItem("progoti-user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Registration failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("progoti-user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
