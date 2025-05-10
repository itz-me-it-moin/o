"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "প্রগতি কি?",
    answer:
      "প্রগতি হল একটি এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে। এটি আপনার কণ্ঠস্বর দিয়ে প্রশ্ন জিজ্ঞাসা করতে এবং উত্তর পেতে সাহায্য করে।",
  },
  {
    question: "প্রগতি কিভাবে কাজ করে?",
    answer:
      "প্রগতি আপনার কণ্ঠস্বর শোনে, আপনার প্রশ্ন বোঝে এবং উন্নত এআই মডেল ব্যবহার করে উত্তর দেয়। এটি বাংলাদেশের পাঠ্যক্রম অনুযায়ী তৈরি করা হয়েছে এবং বাংলা ভাষায় উত্তর দেয়।",
  },
  {
    question: "প্রগতি কি শুধু বাংলা ভাষা সমর্থন করে?",
    answer: "না, প্রগতি বাংলার পাশাপাশি ইংরেজি এবং অন্যান্য ভাষাও সমর্থন করে। তবে এটি বিশেষভাবে বাংলা ভাষায় অধ্যয়নের জন্য ডিজাইন করা হয়েছে।",
  },
  {
    question: "প্রগতি ডিভাইস কি ইন্টারনেট ছাড়া কাজ করে?",
    answer: "প্রো প্যাকেজে অফলাইন মোড সাপোর্ট করে। অন্যান্য প্যাকেজে ইন্টারনেট সংযোগ প্রয়োজন। অফলাইন মোডে কিছু সীমিত ফিচার ব্যবহার করা যায়।",
  },
  {
    question: "প্রগতি ডিভাইসের ব্যাটারি লাইফ কত?",
    answer: "প্রগতি ডিভাইসের ব্যাটারি একবার চার্জে ৮-১২ ঘন্টা পর্যন্ত চলে, ব্যবহারের উপর নির্ভর করে।",
  },
  {
    question: "প্রগতি অ্যাপ কি বিনামূল্যে?",
    answer: "প্রগতি অ্যাপ ডাউনলোড করা বিনামূল্যে, কিন্তু পূর্ণ ফিচার ব্যবহার করতে প্রগতি ডিভাইস কিনতে হবে বা সাবস্ক্রিপশন প্ল্যান নিতে হবে।",
  },
  {
    question: "প্রগতি ডিভাইস কোথায় পাওয়া যাবে?",
    answer:
      "প্রগতি ডিভাইস আমাদের ওয়েবসাইট থেকে অর্ডার করা যাবে। এছাড়া বাংলাদেশের প্রধান শহরগুলোতে আমাদের অফিশিয়াল রিটেইল স্টোর থেকেও কিনতে পারবেন।",
  },
  {
    question: "প্রগতি ডিভাইসের ওয়ারেন্টি কত দিন?",
    answer: "প্যাকেজ অনুযায়ী ওয়ারেন্টি ভিন্ন। স্টার্টার প্যাকেজে ৩ মাস, প্রিমিয়াম প্যাকেজে ৬ মাস এবং প্রো প্যাকেজে ১২ মাস ওয়ারেন্টি।",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">সাধারণ প্রশ্নাবলী</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">প্রগতি সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর এখানে পাবেন।</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-blue-100 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex items-center justify-between p-4 bg-blue-50 text-left font-medium text-blue-900 hover:bg-blue-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn("h-5 w-5 text-blue-600 transition-transform", openIndex === index ? "rotate-180" : "")}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
