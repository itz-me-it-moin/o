"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    value: "১০,০০০+",
    label: "সক্রিয় ব্যবহারকারী",
    description: "সারা বাংলাদেশে প্রগতি ব্যবহারকারীদের সংখ্যা",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    value: "৫০,০০০+",
    label: "প্রশ্নের উত্তর",
    description: "প্রতিদিন প্রগতি যে পরিমাণ প্রশ্নের উত্তর দেয়",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    value: "৭০%",
    label: "সময় সাশ্রয়",
    description: "প্রগতি ব্যবহার করে অধ্যয়নে সময় সাশ্রয়",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    value: "৯৫%",
    label: "সন্তুষ্টি হার",
    description: "প্রগতি ব্যবহারকারীদের সন্তুষ্টি হার",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতি সংখ্যায়</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            প্রগতি কিভাবে বাংলাদেশের শিক্ষার্থীদের সাহায্য করছে তার কিছু পরিসংখ্যান।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-blue-100/20 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">{stat.value}</h3>
              <p className="text-xl font-semibold mb-2 text-white">{stat.label}</p>
              <p className="text-blue-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
