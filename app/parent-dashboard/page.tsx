import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, LineChart, PieChart, Users, Clock, BookOpen, Award, ChevronRight, Search } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "অভিভাবক ড্যাশবোর্ড | প্রগতি",
  description: "আপনার সন্তানের অধ্যয়ন অগ্রগতি ট্র্যাক করুন এবং তাদের শিক্ষা উন্নয়নে সাহায্য করুন।",
}

export default function ParentDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">অভিভাবক ড্যাশবোর্ড</h1>
              <p className="text-blue-100">আপনার সন্তানের অধ্যয়ন অগ্রগতি ট্র্যাক করুন এবং তাদের শিক্ষা উন্নয়নে সাহায্য করুন।</p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">অভিভাবক</p>
                  <p className="font-semibold">আহমেদ হোসেন</p>
                </div>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">প্রোফাইল</Button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-500">মোট অধ্যয়ন সময়</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">৩৮ ঘন্টা</p>
                    <p className="text-sm text-green-600">+১২% গত সপ্তাহের তুলনায়</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-500">সম্পন্ন অধ্যায়</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">১৪</p>
                    <p className="text-sm text-green-600">৮টি বাকি আছে</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-500">গড় স্কোর</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">৮৫%</p>
                    <p className="text-sm text-green-600">+৫% গত মাসের তুলনায়</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
              <TabsTrigger value="overview">ওভারভিউ</TabsTrigger>
              <TabsTrigger value="subjects">বিষয়সমূহ</TabsTrigger>
              <TabsTrigger value="activities">অ্যাক্টিভিটি</TabsTrigger>
              <TabsTrigger value="reports">রিপোর্ট</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>সাপ্তাহিক অধ্যয়ন সময়</CardTitle>
                    <CardDescription>গত ৭ দিনের অধ্যয়ন সময়ের তথ্য</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                      <LineChart className="h-12 w-12 text-blue-300" />
                      <span className="ml-2 text-gray-500">চার্ট লোড হচ্ছে...</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>বিষয় অনুযায়ী অগ্রগতি</CardTitle>
                    <CardDescription>বিষয়ভিত্তিক অধ্যয়ন অগ্রগতি</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex flex-col items-center justify-center bg-gray-50 rounded-md">
                      <PieChart className="h-12 w-12 text-blue-300 mb-4" />
                      <span className="text-gray-500">চার্ট লোড হচ্ছে...</span>
                      <div className="mt-6 w-full space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">গণিত</span>
                          <span className="text-sm font-medium">৯২%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm">বিজ্ঞান</span>
                          <span className="text-sm font-medium">৭৮%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm">ইংরেজি</span>
                          <span className="text-sm font-medium">৬৫%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>সাম্প্রতিক অধ্যয়ন সেশন</CardTitle>
                  <CardDescription>আপনার সন্তানের সাম্প্রতিক অধ্যয়ন সেশনগুলি</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        subject: "গণিত",
                        topic: "বীজগণিত - সমীকরণ সমাধান",
                        date: "আজ, ১০:৩০ AM",
                        duration: "৪৫ মিনিট",
                        score: "৯০%",
                      },
                      {
                        subject: "বিজ্ঞান",
                        topic: "পদার্থবিজ্ঞান - নিউটনের গতিসূত্র",
                        date: "গতকাল, ৪:১৫ PM",
                        duration: "৩০ মিনিট",
                        score: "৮৫%",
                      },
                      {
                        subject: "ইংরেজি",
                        topic: "গ্রামার - টেন্স",
                        date: "গতকাল, ১১:০০ AM",
                        duration: "৫০ মিনিট",
                        score: "৭৫%",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              {session.subject}: {session.topic}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {session.date} • {session.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-medium text-blue-600">{session.score}</p>
                            <p className="text-sm text-gray-500">স্কোর</p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subjects">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>বিষয়সমূহ</CardTitle>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <Input className="pl-9 w-64" placeholder="বিষয় খুঁজুন..." />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "গণিত", icon: "/placeholder.svg?height=40&width=40", progress: 92 },
                      { name: "বিজ্ঞান", icon: "/placeholder.svg?height=40&width=40", progress: 78 },
                      { name: "ইংরেজি", icon: "/placeholder.svg?height=40&width=40", progress: 65 },
                      { name: "বাংলা", icon: "/placeholder.svg?height=40&width=40", progress: 88 },
                      { name: "ইতিহাস", icon: "/placeholder.svg?height=40&width=40", progress: 72 },
                      { name: "ভূগোল", icon: "/placeholder.svg?height=40&width=40", progress: 60 },
                    ].map((subject, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Image src={subject.icon || "/placeholder.svg"} alt={subject.name} width={40} height={40} />
                          </div>
                          <h3 className="font-medium text-lg">{subject.name}</h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">অগ্রগতি</span>
                            <span className="text-sm font-medium">{subject.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${subject.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">বিস্তারিত দেখুন</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle>অ্যাক্টিভিটি লগ</CardTitle>
                  <CardDescription>আপনার সন্তানের সাম্প্রতিক অধ্যয়ন অ্যাক্টিভিটি</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        date: "আজ",
                        activities: [
                          {
                            time: "১০:৩০ AM",
                            description: "গণিত অধ্যায় ৫ সম্পন্ন করেছে",
                            score: "৯০%",
                          },
                          {
                            time: "০৯:১৫ AM",
                            description: "গণিত কুইজ সম্পন্ন করেছে",
                            score: "৮৫%",
                          },
                        ],
                      },
                      {
                        date: "গতকাল",
                        activities: [
                          {
                            time: "০৪:৩০ PM",
                            description: "বিজ্ঞান অধ্যায় ৩ সম্পন্ন করেছে",
                            score: "৯২%",
                          },
                          {
                            time: "০২:০০ PM",
                            description: "ইংরেজি গ্রামার অনুশীলন করেছে",
                            score: "৭৮%",
                          },
                          {
                            time: "১১:৪৫ AM",
                            description: "বাংলা রচনা লিখেছে",
                            score: "৮৮%",
                          },
                        ],
                      },
                    ].map((day, dayIndex) => (
                      <div key={dayIndex}>
                        <h3 className="font-medium text-gray-500 mb-4">{day.date}</h3>
                        <div className="space-y-4">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                                {activity.time.split(" ")[0]}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{activity.description}</p>
                                <p className="text-sm text-gray-500">{activity.time}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-blue-600">{activity.score}</p>
                                <p className="text-sm text-gray-500">স্কোর</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>শিক্ষা রিপোর্ট</CardTitle>
                  <CardDescription>আপনার সন্তানের শিক্ষা অগ্রগতির বিস্তারিত রিপোর্ট</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">সামগ্রিক পারফরম্যান্স</h3>
                      <div className="h-64 flex items-center justify-center bg-white rounded-md">
                        <BarChart className="h-12 w-12 text-blue-300" />
                        <span className="ml-2 text-gray-500">চার্ট লোড হচ্ছে...</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">শক্তি এবং দুর্বলতা</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-600 mb-2">শক্তিশালী বিষয়</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span>গণিত - বীজগণিত</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span>বিজ্ঞান - পদার্থবিজ্ঞান</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span>বাংলা - রচনা লেখা</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600 mb-2">উন্নতি প্রয়োজন</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              <span>ইংরেজি - গ্রামার</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              <span>গণিত - জ্যামিতি</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              <span>বিজ্ঞান - রসায়ন</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700">সম্পূর্ণ রিপোর্ট ডাউনলোড করুন</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
