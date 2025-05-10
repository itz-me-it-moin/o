"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Mic,
  BookOpen,
  Brain,
  Clock,
  Users,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Headphones,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductShowcase from "@/components/product-showcase"
import FeatureAnimation from "@/components/feature-animation"
import ScrollColorChange from "@/components/scroll-color-change"
import ChatInterface from "@/components/chat-interface"
import Header from "@/components/header"

// Add imports for the new components
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import StatsSection from "@/components/stats-section"
import PartnersSection from "@/components/partners-section"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollColorChange />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-sm font-medium text-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={16} height={10} className="h-3 w-auto" />
              <span>বিজ্ঞান প্রকল্প</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">প্রগতি</span> -
              আপনার কণ্ঠস্বরে চালিত অধ্যয়ন সহকারী
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              প্রগতি হল একটি এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে। বাংলাদেশের
              শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা এই ডিভাইস এবং অ্যাপ আপনার পড়াশোনার সাথী হবে।
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white group">
                আমাদের সাথে চ্যাট করুন
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                আরও জানুন <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ProductShowcase />
          </motion.div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতি ডিভাইস এবং অ্যাপ</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি একটি ফিজিক্যাল ডিভাইস এবং মোবাইল অ্যাপের সমন্বয়ে তৈরি, যা আপনাকে যেকোনো সময় যেকোনো স্থানে অধ্যয়নে সাহায্য করবে।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="প্রগতি ফিজিক্যাল ডিভাইস"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    প্রগতি ফিজিক্যাল ডিভাইস
                  </h3>
                  <p className="text-gray-700">
                    আধুনিক ডিজাইন এবং উন্নত প্রযুক্তি সম্পন্ন এই ডিভাইসটি আপনার ডেস্কে রাখুন এবং কণ্ঠস্বরে প্রশ্ন করুন।
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Mic className="h-5 w-5 text-blue-600" />
                      <span>উচ্চ-মানের মাইক্রোফোন</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-blue-600" />
                      <span>ক্রিস্টাল ক্লিয়ার স্পিকার</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <span>অন-ডিভাইস এআই প্রসেসিং</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="প্রগতি মোবাইল অ্যাপ"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    প্রগতি মোবাইল অ্যাপ
                  </h3>
                  <p className="text-gray-700">
                    আপনার স্মার্টফোনে প্রগতি অ্যাপ ইনস্টল করুন এবং যেকোনো সময় যেকোনো স্থানে অধ্যয়ন করুন।
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                      <span>অ্যান্ড্রয়েড এবং আইওএস সমর্থন</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>২৪/৭ অ্যাকসেস</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                      <span>ক্লাউড সিঙ্ক</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতির বৈশিষ্ট্যসমূহ</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে। এখানে কিছু প্রধান বৈশিষ্ট্য রয়েছে যা আপনাকে সাহায্য করবে।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                title: "কণ্ঠস্বর নিয়ন্ত্রিত অধ্যয়ন",
                description: "আপনার কণ্ঠস্বর দিয়ে প্রশ্ন জিজ্ঞাসা করুন এবং তাৎক্ষণিক উত্তর পান। টাইপ করার প্রয়োজন নেই।",
              },
              {
                icon: <Brain className="h-6 w-6 text-blue-600" />,
                title: "বাংলা ভাষায় এআই সহায়তা",
                description: "বাংলা ভাষায় প্রশ্ন জিজ্ঞাসা করুন এবং বাংলাতেই উত্তর পান। আপনার মাতৃভাষায় শিখুন।",
              },
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "সময় সাশ্রয়ী অধ্যয়ন",
                description: "দ্রুত এবং সঠিক উত্তর পেয়ে আপনার অধ্যয়নের সময় কমান এবং দক্ষতা বাড়ান।",
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "ব্যক্তিগতকৃত শিক্ষা",
                description: "আপনার শিক্ষার স্টাইল এবং গতি অনুযায়ী ব্যক্তিগতকৃত শিক্ষা পান। প্রগতি আপনার সাথে শিখে।",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                title: "বাংলাদেশী পাঠ্যক্রম সমর্থন",
                description: "বাংলাদেশের পাঠ্যক্রম অনুযায়ী তৈরি করা। এসএসসি, এইচএসসি এবং বিশ্ববিদ্যালয় পর্যায়ের বিষয়গুলি অন্তর্ভুক্ত।",
              },
              {
                icon: <Smartphone className="h-6 w-6 text-blue-600" />,
                title: "ডিভাইস এবং অ্যাপ সিঙ্ক",
                description: "আপনার ফিজিক্যাল ডিভাইস এবং মোবাইল অ্যাপ সিঙ্ক করে রাখুন। যেকোনো ডিভাইসে আপনার অধ্যয়ন চালিয়ে যান।",
              },
            ].map((feature, index) => (
              <FeatureAnimation key={index} index={index}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </FeatureAnimation>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/features">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                সব বৈশিষ্ট্য দেখুন <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Chat Interface */}
      <ChatInterface />

      {/* Footer */}
      <Footer />
    </div>
  )
}
