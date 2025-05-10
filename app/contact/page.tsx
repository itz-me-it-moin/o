import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "যোগাযোগ | প্রগতি",
  description: "প্রগতি টিমের সাথে যোগাযোগ করুন। আমরা আপনার প্রশ্ন বা মতামত শুনতে আগ্রহী।",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            প্রগতি টিমের সাথে যোগাযোগ করুন। আমরা আপনার প্রশ্ন বা মতামত শুনতে আগ্রহী।
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">আমাদের মেসেজ পাঠান</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700 font-medium">
                        নাম
                      </label>
                      <Input id="name" placeholder="আপনার নাম" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700 font-medium">
                        ইমেইল
                      </label>
                      <Input id="email" type="email" placeholder="আপনার ইমেইল" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-700 font-medium">
                      বিষয়
                    </label>
                    <Input id="subject" placeholder="মেসেজের বিষয়" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-700 font-medium">
                      মেসেজ
                    </label>
                    <Textarea id="message" placeholder="আপনার মেসেজ লিখুন" rows={6} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    মেসেজ পাঠান
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 text-blue-800">যোগাযোগের তথ্য</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">ঠিকানা</h3>
                        <p className="text-gray-600">
                          ১২৩/এ, গুলশান এভিনিউ
                          <br />
                          ঢাকা-১২১২, বাংলাদেশ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">ফোন</h3>
                        <p className="text-gray-600">+৮৮০ ১৭০০ ০০০০০০</p>
                        <p className="text-gray-600">+৮৮০ ২ ৯৮৭৬৫৪৩</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">ইমেইল</h3>
                        <p className="text-gray-600">info@progoti.ai</p>
                        <p className="text-gray-600">support@progoti.ai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">অফিস সময়</h3>
                        <p className="text-gray-600">রবিবার - বৃহস্পতিবার: সকাল ৯টা - বিকাল ৫টা</p>
                        <p className="text-gray-600">শুক্রবার - শনিবার: বন্ধ</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-xl text-white">
                  <h2 className="text-2xl font-bold mb-6">সাপোর্ট</h2>
                  <p className="mb-6">
                    প্রযুক্তিগত সমস্যা বা প্রশ্নের জন্য, আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন। আমরা ২৪ ঘন্টার মধ্যে উত্তর দেওয়ার চেষ্টা করি।
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">সাপোর্ট টিকেট খুলুন</Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-16 rounded-xl overflow-hidden h-96 bg-gray-200">
              <div className="w-full h-full">
                {/* Replace with actual map component or iframe */}
                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                  <p className="text-gray-500">মানচিত্র লোড হচ্ছে...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
