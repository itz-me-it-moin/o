"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "তানভীর আহমেদ",
    role: "এসএসসি পরীক্ষার্থী",
    image: "/placeholder-user.jpg",
    content:
      "প্রগতি আমার পড়াশোনায় অনেক সাহায্য করেছে। আমি যখনই কোন প্রশ্ন করি, তখনই সঠিক উত্তর পাই। এটি আমার পরীক্ষার প্রস্তুতিতে অনেক সাহায্য করেছে।",
    rating: 5,
  },
  {
    id: 2,
    name: "সাদিয়া রহমান",
    role: "এইচএসসি পরীক্ষার্থী",
    image: "/placeholder-user.jpg",
    content:
      "প্রগতি ব্যবহার করে আমি যেকোনো সময় যেকোনো স্থানে পড়াশোনা করতে পারি। এটি আমার সময় বাঁচাতে সাহায্য করে এবং আমি এখন আরও বেশি সময় অধ্যয়ন করতে পারি।",
    rating: 4,
  },
  {
    id: 3,
    name: "রাফি হাসান",
    role: "বিশ্ববিদ্যালয় শিক্ষার্থী",
    image: "/placeholder-user.jpg",
    content: "আমি প্রগতি ব্যবহার করে আমার গবেষণা কাজে অনেক সাহায্য পাই। এটি আমাকে দ্রুত তথ্য খুঁজে পেতে সাহায্য করে এবং আমার সময় বাঁচায়।",
    rating: 5,
  },
  {
    id: 4,
    name: "নাফিসা খান",
    role: "শিক্ষক",
    image: "/placeholder-user.jpg",
    content: "আমি আমার ছাত্রদের প্রগতি ব্যবহার করতে উৎসাহিত করি। এটি তাদের পড়াশোনায় অনেক সাহায্য করে এবং তারা আরও বেশি আগ্রহী হয়ে ওঠে।",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের ব্যবহারকারীদের মতামত</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতি ব্যবহারকারীরা কিভাবে এটি তাদের অধ্যয়নে সাহায্য করছে তা জানুন।
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-3xl blur-xl -z-10"></div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold">
              {activeIndex + 1}/{testimonials.length}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">{testimonials[activeIndex].name}</h3>
                <p className="text-blue-600">{testimonials[activeIndex].role}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-gray-700 relative">
                  <span className="text-6xl text-blue-200 absolute -top-8 -left-4">"</span>
                  {testimonials[activeIndex].content}
                  <span className="text-6xl text-blue-200 absolute -bottom-12 -right-4">"</span>
                </blockquote>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-blue-300 hover:bg-blue-50"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5 text-blue-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-blue-300 hover:bg-blue-50"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
