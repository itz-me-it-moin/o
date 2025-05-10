import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Mic, Brain, Server, Sparkles, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "কিভাবে কাজ করে | প্রগতি",
  description: "প্রগতি কিভাবে কাজ করে এবং এটি আপনার অধ্যয়নকে কিভাবে সহজ করে তোলে তা জানুন।",
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">কিভাবে কাজ করে</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            প্রগতি কিভাবে কাজ করে এবং এটি আপনার অধ্যয়নকে কিভাবে সহজ করে তোলে তা জানুন।
          </p>
        </div>
      </div>

      {/* How It Works Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden bg-blue-50">
                    <Image src="/placeholder.svg?height=400&width=600" alt="ভয়েস কমান্ড" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">ভয়েস কমান্ড</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    প্রগতি ডিভাইসে কথা বলুন বা অ্যাপে আপনার প্রশ্ন টাইপ করুন। প্রগতি আপনার কণ্ঠস্বর শোনে এবং আপনার প্রশ্ন বোঝে।
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Mic className="h-5 w-5" />
                    <span>উচ্চ-মানের স্পিচ রিকগনিশন</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden bg-blue-50">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="এআই প্রসেসিং"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">এআই প্রসেসিং</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    প্রগতির উন্নত এআই মডেল আপনার প্রশ্ন বিশ্লেষণ করে এবং বাংলাদেশের পাঠ্যক্রম অনুযায়ী সঠিক উত্তর খুঁজে বের করে।
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Brain className="h-5 w-5" />
                    <span>উন্নত ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden bg-blue-50">
                    <Image src="/placeholder.svg?height=400&width=600" alt="উত্তর প্রদান" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">উত্তর প্রদান</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    প্রগতি আপনার প্রশ্নের উত্তর কণ্ঠস্বরে বা টেক্সট আকারে প্রদান করে। উত্তরগুলি সহজবোধ্য এবং বিস্তারিত।
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Sparkles className="h-5 w-5" />
                    <span>ব্যক্তিগতকৃত শিক্ষা সহায়তা</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden bg-blue-50">
                    <Image src="/placeholder.svg?height=400&width=600" alt="ডাটা সিঙ্ক" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">ডাটা সিঙ্ক</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    আপনার অধ্যয়ন ডাটা ক্লাউডে সিঙ্ক হয়, যাতে আপনি যেকোনো ডিভাইসে আপনার অধ্যয়ন চালিয়ে যেতে পারেন।
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Server className="h-5 w-5" />
                    <span>সুরক্ষিত ক্লাউড সিঙ্ক</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-8">প্রগতি ব্যবহারের সুবিধা</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "দ্রুত এবং সঠিক উত্তর",
                  "সময় সাশ্রয়",
                  "ব্যক্তিগতকৃত শিক্ষা",
                  "যেকোনো সময় যেকোনো স্থানে অধ্যয়ন",
                  "বাংলা ভাষায় সহায়তা",
                  "বাংলাদেশের পাঠ্যক্রম অনুযায়ী",
                  "অভিভাবকদের জন্য প্রগতি ট্র্যাকিং",
                  "নিয়মিত আপডেট এবং নতুন ফিচার",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
