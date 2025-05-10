import Link from "next/link"
import Image from "next/image"
import { Mic, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Mic className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                প্রগতি
              </h3>
            </div>
            <p className="text-gray-300">
              বাংলাদেশের প্রথম এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে।
            </p>
            <div className="flex items-center gap-2">
              <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={24} height={14} className="h-4 w-auto" />
              <span className="text-gray-300">বাংলাদেশে তৈরি</span>
            </div>
            <div className="flex gap-3 mt-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-blue-400 transition-colors">
                  বৈশিষ্ট্য
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
                  মূল্য
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                  কিভাবে কাজ করে
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-gray-300 hover:text-blue-400 transition-colors">
                  ডেভেলপার
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-blue-400 transition-colors">
                  সাপোর্ট
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  ১২৩/এ, গুলশান এভিনিউ
                  <br />
                  ঢাকা-১২১২, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+৮৮০ ১৭০০ ০০০০০০</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@progoti.ai</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">নিউজলেটার</h4>
            <p className="text-gray-300">আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং সর্বশেষ আপডেট পান।</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} প্রগতি। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              গোপনীয়তা নীতি
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              সেবার শর্তাবলী
            </Link>
            <Link href="/refund-policy" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              রিফান্ড নীতি
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
