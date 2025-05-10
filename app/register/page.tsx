"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mic, Eye, EyeOff, ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"
import Footer from "@/components/footer"

type RegistrationData = {
  name: string
  phone: string
  email: string
  password: string
  confirmPassword: string
  role: "student" | "parent" | "teacher"
  class?: string
  hasDevice: boolean
  deviceId?: string
  studentId?: string
  schoolName?: string
  city?: string
  address?: string
  country: string
}

const initialData: RegistrationData = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "student",
  class: "",
  hasDevice: false,
  deviceId: "",
  studentId: "",
  schoolName: "",
  city: "",
  address: "",
  country: "বাংলাদেশ",
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<RegistrationData>(initialData)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target

    if (type === "radio" && name === "hasDevice") {
      setFormData({
        ...formData,
        hasDevice: value === "yes",
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateStep1 = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "ত্রুটি",
        description: "সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন",
        variant: "destructive",
      })
      return false
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "ত্রুটি",
        description: "একটি বৈধ ইমেইল ঠিকানা দিন",
        variant: "destructive",
      })
      return false
    }

    // Basic phone validation for Bangladesh
    const phoneRegex = /^01[3-9]\d{8}$/
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "ত্রুটি",
        description: "একটি বৈধ বাংলাদেশী ফোন নম্বর দিন (উদাহরণ: 01712345678)",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const validateStep2 = () => {
    if (!formData.password || !formData.confirmPassword) {
      toast({
        title: "ত্রুটি",
        description: "পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড উভয়ই প্রয়োজন",
        variant: "destructive",
      })
      return false
    }

    if (formData.password.length < 8) {
      toast({
        title: "ত্রুটি",
        description: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে",
        variant: "destructive",
      })
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "ত্রুটি",
        description: "পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const validateStep3 = () => {
    if (!formData.role) {
      toast({
        title: "ত্রুটি",
        description: "একটি রোল নির্বাচন করুন",
        variant: "destructive",
      })
      return false
    }

    if (formData.role === "student" && !formData.class) {
      toast({
        title: "ত্রুটি",
        description: "আপনার শ্রেণী নির্বাচন করুন",
        variant: "destructive",
      })
      return false
    }

    if (formData.hasDevice && !formData.deviceId) {
      toast({
        title: "ত্রুটি",
        description: "ডিভাইস আইডি প্রদান করুন",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const validateStep4 = () => {
    if (formData.role === "parent") {
      if (!formData.studentId || !formData.schoolName || !formData.city || !formData.address) {
        toast({
          title: "ত্রুটি",
          description: "সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন",
          variant: "destructive",
        })
        return false
      }
    }

    return true
  }

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    } else if (step === 3 && validateStep3()) {
      if (formData.role === "parent") {
        setStep(4)
      } else {
        handleSubmit()
      }
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (formData.role === "parent" && !validateStep4()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Remove confirmPassword before sending to API
      const { confirmPassword, ...registrationData } = formData

      await register(registrationData)

      toast({
        title: "রেজিস্ট্রেশন সফল",
        description: "আপনি সফলভাবে রেজিস্টার করেছেন",
      })

      router.push("/")
    } catch (error) {
      toast({
        title: "রেজিস্ট্রেশন ব্যর্থ",
        description: "রেজিস্ট্রেশন প্রক্রিয়া ব্যর্থ হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">নাম</Label>
        <Input
          id="name"
          name="name"
          placeholder="আপনার পূর্ণ নাম লিখুন"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">ফোন নম্বর</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="আপনার ফোন নম্বর লিখুন (উদাহরণ: 01712345678)"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">ইমেইল</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="আপনার ইমেইল ঠিকানা লিখুন"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="password">পাসওয়ার্ড</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="একটি শক্তিশালী পাসওয়ার্ড লিখুন"
            value={formData.password}
            onChange={handleChange}
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
        <p className="text-xs text-gray-500">পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">কনফার্ম পাসওয়ার্ড</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="পাসওয়ার্ড আবার লিখুন"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>আপনার রোল নির্বাচন করুন</Label>
        <RadioGroup
          value={formData.role}
          onValueChange={(value) => handleSelectChange("role", value as "student" | "parent" | "teacher")}
          className="grid grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student" className="cursor-pointer">
              শিক্ষার্থী
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="parent" id="parent" />
            <Label htmlFor="parent" className="cursor-pointer">
              অভিভাবক
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="teacher" id="teacher" />
            <Label htmlFor="teacher" className="cursor-pointer">
              শিক্ষক
            </Label>
          </div>
        </RadioGroup>
      </div>

      {formData.role === "student" && (
        <div className="space-y-2">
          <Label htmlFor="class">আপনার শ্রেণী</Label>
          <Select value={formData.class} onValueChange={(value) => handleSelectChange("class", value)}>
            <SelectTrigger>
              <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">১ম শ্রেণী</SelectItem>
              <SelectItem value="2">২য় শ্রেণী</SelectItem>
              <SelectItem value="3">৩য় শ্রেণী</SelectItem>
              <SelectItem value="4">৪র্থ শ্রেণী</SelectItem>
              <SelectItem value="5">৫ম শ্রেণী</SelectItem>
              <SelectItem value="6">৬ষ্ঠ শ্রেণী</SelectItem>
              <SelectItem value="7">৭ম শ্রেণী</SelectItem>
              <SelectItem value="8">৮ম শ্রেণী</SelectItem>
              <SelectItem value="9">৯ম শ্রেণী</SelectItem>
              <SelectItem value="10">১০ম শ্রেণী</SelectItem>
              <SelectItem value="11">১১শ শ্রেণী</SelectItem>
              <SelectItem value="12">১২শ শ্রেণী</SelectItem>
              <SelectItem value="university">বিশ্ববিদ্যালয়</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label>আপনার কি প্রগতি ডিভাইস আছে?</Label>
        <RadioGroup
          value={formData.hasDevice ? "yes" : "no"}
          onValueChange={(value) => handleSelectChange("hasDevice", value === "yes" ? "true" : "false")}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="yes" id="device-yes" />
            <Label htmlFor="device-yes" className="cursor-pointer">
              হ্যাঁ
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="no" id="device-no" />
            <Label htmlFor="device-no" className="cursor-pointer">
              না
            </Label>
          </div>
        </RadioGroup>
      </div>

      {formData.hasDevice && (
        <div className="space-y-2">
          <Label htmlFor="deviceId">ডিভাইস আইডি</Label>
          <Input
            id="deviceId"
            name="deviceId"
            placeholder="আপনার প্রগতি ডিভাইসের আইডি লিখুন"
            value={formData.deviceId}
            onChange={handleChange}
          />
          <p className="text-xs text-gray-500">ডিভাইসের পিছনে বা প্যাকেজিং-এ আইডি পাওয়া যাবে</p>
        </div>
      )}
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="studentId">শিক্ষার্থীর আইডি</Label>
        <Input
          id="studentId"
          name="studentId"
          placeholder="আপনার সন্তানের শিক্ষার্থী আইডি লিখুন"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="schoolName">স্কুলের নাম</Label>
        <Input
          id="schoolName"
          name="schoolName"
          placeholder="আপনার সন্তানের স্কুলের নাম লিখুন"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">শহর</Label>
          <Input id="city" name="city" placeholder="শহরের নাম" value={formData.city} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">দেশ</Label>
          <Input id="country" name="country" value={formData.country} onChange={handleChange} disabled />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">ঠিকানা</Label>
        <Input
          id="address"
          name="address"
          placeholder="আপনার পূর্ণ ঠিকানা লিখুন"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )

  const renderStepIndicator = () => (
    <div className="flex justify-between mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`flex items-center ${
            i <= step ? "text-blue-600" : "text-gray-400"
          } ${i === 4 && formData.role !== "parent" ? "hidden" : ""}`}
        >
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center ${
              i < step
                ? "bg-blue-600 text-white"
                : i === step
                  ? "border-2 border-blue-600 text-blue-600"
                  : "border-2 border-gray-300 text-gray-400"
            }`}
          >
            {i < step ? <Check className="h-5 w-5" /> : i}
          </div>
          {i < (formData.role === "parent" ? 4 : 3) && (
            <div className={`w-12 h-1 ${i < step ? "bg-blue-600" : "bg-gray-300"}`}></div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
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

              <h2 className="text-2xl font-bold text-center mb-2">রেজিস্টার করুন</h2>
              <p className="text-center text-gray-600 mb-6">প্রগতি অ্যাপে স্বাগতম! আপনার অ্যাকাউন্ট তৈরি করুন</p>

              {renderStepIndicator()}

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  nextStep()
                }}
              >
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      পূর্ববর্তী
                    </Button>
                  )}

                  <div className={step === 1 ? "ml-auto" : ""}>
                    {step < (formData.role === "parent" ? 4 : 3) ? (
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center gap-2"
                      >
                        পরবর্তী
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => handleSubmit()}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "প্রক্রিয়াকরণ হচ্ছে..." : "রেজিস্টার করুন"}
                      </Button>
                    )}
                  </div>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline font-medium">
                    লগইন করুন
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
