"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Mic, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { login } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      toast({
        title: "ত্রুটি",
        description: "সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await login(email, password)
      toast({
        title: "সফল লগইন",
        description: "আপনি সফলভাবে লগইন করেছেন",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "লগইন ব্যর্থ",
        description: "ইমেইল বা পাসওয়ার্ড ভুল",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
                    <Mic className="h-5 w-5 text-white" />
                  </div>
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    প্রগতি
                  </h1>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-6">লগইন করুন</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">ইমেইল বা ফোন নম্বর</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">পাসওয়ার্ড</Label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      পাসওয়ার্ড ভুলে গেছেন?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="আপনার পাসওয়ার্ড লিখুন"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    আমাকে মনে রাখুন
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "লগইন হচ্ছে..." : "লগইন করুন"}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline font-medium">
                      রেজিস্টার করুন
                    </Link>
                  </p>
                </div>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">অথবা এর মাধ্যমে লগইন করুন</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
                    <span>Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Facebook" width={24} height={24} />
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
