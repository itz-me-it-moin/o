"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "রাফি আহমেদ",
    role: "প্রধান প্রকৌশলী",
    image: "/placeholder.svg?height=300&width=300",
    bio: "রাফি একজন অভিজ্ঞ সফটওয়্যার প্রকৌশলী যিনি এআই এবং মেশিন লার্নিং বিষয়ে বিশেষজ্ঞ। তিনি প্রগতির কোর এআই মডেল ডিজাইন করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "সাদিয়া রহমান",
    role: "প্রোডাক্ট ম্যানেজার",
    image: "/placeholder.svg?height=300&width=300",
    bio: "সাদিয়া একজন দক্ষ প্রোডাক্ট ম্যানেজার যিনি শিক্ষা প্রযুক্তি খাতে ৮ বছরের অভিজ্ঞতা রাখেন। তিনি প্রগতির ব্যবহারকারী অভিজ্ঞতা ডিজাইন করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "তানভীর হোসেন",
    role: "ইউআই/ইউএক্স ডিজাইনার",
    image: "/placeholder.svg?height=300&width=300",
    bio: "তানভীর একজন ক্রিয়েটিভ ডিজাইনার যিনি প্রগতির সুন্দর এবং ব্যবহারকারী-বান্ধব ইন্টারফেস ডিজাইন করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "নাফিসা খান",
    role: "এআই রিসার্চার",
    image: "/placeholder.svg?height=300&width=300",
    bio: "নাফিসা একজন এআই রিসার্চার যিনি ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং এবং স্পিচ রিকগনিশন বিষয়ে বিশেষজ্ঞ। তিনি প্রগতির ভয়েস ইন্টারফেস ডেভেলপ করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 5,
    name: "আরিফ হাসান",
    role: "হার্ডওয়্যার ইঞ্জিনিয়ার",
    image: "/placeholder.svg?height=300&width=300",
    bio: "আরিফ একজন হার্ডওয়্যার ইঞ্জিনিয়ার যিনি প্রগতির ফিজিক্যাল ডিভাইস ডিজাইন এবং প্রোটোটাইপ তৈরি করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 6,
    name: "ফারহানা আক্তার",
    role: "কন্টেন্ট স্পেশালিস্ট",
    image: "/placeholder.svg?height=300&width=300",
    bio: "ফারহানা একজন শিক্ষাবিদ যিনি প্রগতির জন্য বাংলাদেশের পাঠ্যক্রম অনুযায়ী শিক্ষামূলক কন্টেন্ট তৈরি করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
]

export default function TeamSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের টিম</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতির পিছনে রয়েছে প্রতিভাবান এবং উদ্যমী মানুষদের একটি দল যারা শিক্ষার মান উন্নয়নে নিবেদিত।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-64 w-full bg-gradient-to-r from-blue-100 to-cyan-100">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-200 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <Link href={member.social.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href={member.social.twitter} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href={member.social.github} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/team">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              সম্পূর্ণ টিম দেখুন
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
