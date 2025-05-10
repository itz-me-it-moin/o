import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "আমাদের টিম | প্রগতি",
  description: "প্রগতির পিছনে রয়েছে প্রতিভাবান এবং উদ্যমী মানুষদের একটি দল যারা শিক্ষার মান উন্নয়নে নিবেদিত।",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের টিম</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            প্রগতির পিছনে রয়েছে প্রতিভাবান এবং উদ্যমী মানুষদের একটি দল যারা শিক্ষার মান উন্নয়নে নিবেদিত।
          </p>
        </div>
      </div>
      <TeamSection />
      <Footer />
    </div>
  )
}
