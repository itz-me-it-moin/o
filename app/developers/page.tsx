import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, FileJson, BookOpen, Server, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ডেভেলপার ডকুমেন্টেশন | প্রগতি",
  description: "প্রগতি এপিআই এবং এসডিকে ব্যবহার করে আপনার অ্যাপ্লিকেশনে প্রগতির ক্ষমতা যোগ করুন।",
}

export default function DevelopersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ডেভেলপার ডকুমেন্টেশন</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            প্রগতি এপিআই এবং এসডিকে ব্যবহার করে আপনার অ্যাপ্লিকেশনে প্রগতির ক্ষমতা যোগ করুন।
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="#getting-started">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                শুরু করুন
              </button>
            </Link>
            <Link href="#api-docs">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors">
                এপিআই ডকুমেন্টেশন
              </button>
            </Link>
            <Link href="#sdk">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors">
                এসডিকে ডাউনলোড
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white" id="getting-started">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-800">শুরু করুন</h2>

            <Tabs defaultValue="rest-api">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="rest-api">REST API</TabsTrigger>
                <TabsTrigger value="android-sdk">Android SDK</TabsTrigger>
                <TabsTrigger value="ios-sdk">iOS SDK</TabsTrigger>
              </TabsList>

              <TabsContent value="rest-api" className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    API কী পান
                  </h3>
                  <p className="text-gray-700 mb-4">
                    প্রগতি REST API ব্যবহার করতে, আপনাকে প্রথমে একটি API কী পেতে হবে। আপনার ডেভেলপার অ্যাকাউন্টে লগ ইন করুন এবং API
                    কী জেনারেট করুন।
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>
                      curl -X POST https://api.progoti.ai/v1/auth/token \<br /> -H "Content-Type: application/json" \
                      <br /> -d {"{"}"username": "your-username", "password": "your-password"{"}"}
                    </pre>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileJson className="h-5 w-5 text-blue-600" />
                    API কল করুন
                  </h3>
                  <p className="text-gray-700 mb-4">
                    আপনার API কী ব্যবহার করে, আপনি প্রগতি API কল করতে পারেন। নিচের উদাহরণটি দেখুন:
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>
                      curl -X POST https://api.progoti.ai/v1/chat/completions \<br /> -H "Content-Type:
                      application/json" \<br /> -H "Authorization: Bearer YOUR_API_KEY" \<br /> -d {"{"}
                      <br /> "prompt": "বাংলাদেশের স্বাধীনতা যুদ্ধ কবে হয়েছিল?",
                      <br /> "max_tokens": 100
                      <br /> {"}"}
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="android-sdk" className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Download className="h-5 w-5 text-blue-600" />
                    SDK ইনস্টল করুন
                  </h3>
                  <p className="text-gray-700 mb-4">
                    আপনার Android প্রজেক্টে প্রগতি SDK যোগ করতে, নিচের কোডটি আপনার build.gradle ফাইলে যোগ করুন:
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>
                      dependencies {"{"}
                      <br /> implementation &apos;ai.progoti:progoti-android-sdk:1.0.0&apos;
                      <br />
                      {"}"}
                    </pre>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    SDK ইনিশিয়ালাইজ করুন
                  </h3>
                  <p className="text-gray-700 mb-4">আপনার অ্যাপ্লিকেশনে প্রগতি SDK ইনিশিয়ালাইজ করুন:</p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>
                      import ai.progoti.sdk.Progoti;
                      <br />
                      <br />
                      public class MyApplication extends Application {"{"}
                      <br /> @Override
                      <br /> public void onCreate() {"{"}
                      <br /> super.onCreate();
                      <br /> const apiKey = &quot;YOUR_API_KEY&quot;; // Replace with your actual API key
                      Progoti.initialize(this, apiKey);
                      <br /> {"}"}
                      <br />
                      {"}"}
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ios-sdk" className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Download className="h-5 w-5 text-blue-600" />
                    SDK ইনস্টল করুন
                  </h3>
                  <p className="text-gray-700 mb-4">আপনার iOS প্রজেক্টে প্রগতি SDK যোগ করতে, CocoaPods ব্যবহার করুন:</p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>pod &apos;ProgotiSDK&apos;, &apos;~&gt; 1.0.0&apos;</pre>
                  </div>
                  <p className="text-gray-700 mt-4">অথবা Swift Package Manager ব্যবহার করুন:</p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>
                      .package(url: &quot;https://github.com/progoti/progoti-ios-sdk.git&quot;, from: &quot;1.0.0&quot;)
                    </pre>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    SDK ইনিশিয়ালাইজ করুন
                  </h3>
                  <p className="text-gray-700 mb-4">আপনার অ্যাপ্লিকেশনে প্রগতি SDK ইনিশিয়ালাইজ করুন:</p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                    <pre>
                      import ProgotiSDK @UIApplicationMain class AppDelegate: UIResponder, UIApplicationDelegate {"{"}
                      func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions:
                      [UIApplication.LaunchOptionsKey: Any]?) -&gt; Bool {"{"}
                      const apiKey = &quot;YOUR_API_KEY&quot;; // Replace with your actual API key
                      Progoti.initialize(apiKey: apiKey) return true
                      {"}"}
                      {"}"}
                    </pre>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">সম্পূর্ণ ডকুমেন্টেশন</h3>
              <p className="text-gray-700 mb-4">
                আরও বিস্তারিত ডকুমেন্টেশন, টিউটোরিয়াল, এবং কোড উদাহরণের জন্য আমাদের সম্পূর্ণ ডেভেলপার ডকুমেন্টেশন দেখুন।
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>ডকুমেন্টেশন</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Code className="h-5 w-5" />
                  <span>কোড উদাহরণ</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Server className="h-5 w-5" />
                  <span>API রেফারেন্স</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="api-docs">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-800">API রেফারেন্স</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Authentication</h3>
                <p className="text-gray-700 mb-4">
                  সমস্ত API কল আপনার API কী ব্যবহার করে অথেনটিকেট করতে হবে। আপনার API কী Authorization হেডারে Bearer টোকেন
                  হিসাবে পাঠান।
                </p>
                <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                  <pre>Authorization: Bearer YOUR_API_KEY</pre>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Endpoints</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">GET /v1/models</h4>
                    <p className="text-gray-700">উপলব্ধ মডেলগুলি পান।</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">POST /v1/chat/completions</h4>
                    <p className="text-gray-700">একটি চ্যাট কমপ্লিশন জেনারেট করুন।</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">POST /v1/audio/transcriptions</h4>
                    <p className="text-gray-700">অডিও থেকে টেক্সট ট্রান্সক্রিপ্ট জেনারেট করুন।</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">POST /v1/audio/speech</h4>
                    <p className="text-gray-700">টেক্সট থেকে স্পিচ জেনারেট করুন।</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Rate Limits</h3>
                <p className="text-gray-700 mb-4">
                  API কলের জন্য রেট লিমিট রয়েছে। ফ্রি টায়ারে প্রতি মিনিটে ৬০টি রিকোয়েস্ট এবং প্রতি দিনে ১০০০টি রিকোয়েস্ট করতে
                  পারবেন।
                </p>
                <p className="text-gray-700">আরও বেশি রিকোয়েস্ট করতে, আমাদের পেইড প্ল্যান দেখুন।</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span>সম্পূর্ণ API ডকুমেন্টেশন দেখুন</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
