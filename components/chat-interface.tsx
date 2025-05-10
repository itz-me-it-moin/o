"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Mic, MicOff, Send, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "হ্যালো! আমি প্রগতি, আপনার এআই স্টাডি অ্যাসিস্ট্যান্ট। আপনাকে কিভাবে সাহায্য করতে পারি?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [voiceMode, setVoiceMode] = useState(false)
  const [hue, setHue] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const micStreamRef = useRef<MediaStream | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const controls = useAnimation()

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Clean up audio resources
  useEffect(() => {
    return () => {
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close()
      }
    }
  }, [])

  // Handle voice animation
  useEffect(() => {
    if (isListening) {
      startVoiceAnimation()
    } else {
      stopVoiceAnimation()
    }
  }, [isListening])

  // Smooth color transition effect
  useEffect(() => {
    if (isListening || voiceMode) {
      const interval = setInterval(() => {
        setHue((prevHue) => (prevHue + 0.5) % 360)
      }, 50) // Update every 50ms for smooth transition
      return () => clearInterval(interval)
    }
  }, [isListening, voiceMode])

  const startVoiceAnimation = async () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      if (!micStreamRef.current) {
        micStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true })
      }

      analyserRef.current = audioContextRef.current.createAnalyser()
      const source = audioContextRef.current.createMediaStreamSource(micStreamRef.current)
      source.connect(analyserRef.current)
      analyserRef.current.fftSize = 256
      const bufferLength = analyserRef.current.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      const updateAudioLevel = () => {
        if (!analyserRef.current) return

        analyserRef.current.getByteFrequencyData(dataArray)
        let sum = 0
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i]
        }
        const average = sum / bufferLength
        const level = Math.min(1, average / 128) // Normalize to 0-1
        setAudioLevel(level)

        animationFrameRef.current = requestAnimationFrame(updateAudioLevel)
      }

      updateAudioLevel()
    } catch (error) {
      console.error("Error accessing microphone:", error)
      setIsListening(false)
    }
  }

  const stopVoiceAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    setAudioLevel(0)
  }

  const toggleListening = () => {
    if (isListening) {
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop())
        micStreamRef.current = null
      }

      // Only add a message if not in voice-only mode
      if (!voiceMode) {
        setTimeout(() => {
          const demoResponses = [
            "আপনার প্রশ্নের উত্তর হল, বাংলাদেশের স্বাধীনতা যুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল।",
            "এই বিষয়ে আমি আপনাকে আরও বিস্তারিত তথ্য দিতে পারি। আপনি কি জানতে চান?",
            "আপনার পরীক্ষার প্রস্তুতির জন্য আমি কিছু গুরুত্বপূর্ণ নোট তৈরি করে দিতে পারি।",
            "এই সমস্যাটি সমাধান করার জন্য আপনি এই পদ্ধতি অনুসরণ করতে পারেন।",
            "বাংলাদেশের ইতিহাস, ভূগোল, এবং সংস্কৃতি সম্পর্কে আপনি যা জানতে চান আমি সাহায্য করতে পারি।",
          ]
          const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)]
          addMessage(randomResponse, "ai")
        }, 1500)
      }
    }
    setIsListening(!isListening)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addMessage(inputValue, "user")
      setInputValue("")

      // Simulate AI response
      setTimeout(() => {
        const demoResponses = [
          "আপনার প্রশ্নের উত্তর হল, বাংলাদেশের মুক্তিযুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল।",
          "এই বিষয়ে আমি আপনাকে আরও বিস্তারিত তথ্য দিতে পারি। আপনি কি জানতে চান?",
          "আপনার পরীক্ষার প্রস্তুতির জন্য আমি কিছু গুরুত্বপূর্ণ নোট তৈরি করে দিতে পারি।",
          "এই সমস্যাটি সমাধান করার জন্য আপনি এই পদ্ধতি অনুসরণ করতে পারেন।",
          "বাংলাদেশের ইতিহাস, ভূগোল, এবং সংস্কৃতি সম্পর্কে আপনি যা জানতে চান আমি সাহায্য করতে পারি।",
        ]
        const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)]
        addMessage(randomResponse, "ai")
      }, 1000)
    }
  }

  const addMessage = (content: string, sender: "user" | "ai") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const toggleVoiceMode = () => {
    setVoiceMode(!voiceMode)
    if (!voiceMode && isListening) {
      // If turning on voice mode while already listening, keep listening
    } else if (!voiceMode && !isListening) {
      // If turning on voice mode and not listening, start listening
      setIsListening(true)
    } else if (voiceMode && isListening) {
      // If turning off voice mode and listening, stop listening
      setIsListening(false)
    }
  }

  // Update the generateGradient function to use blue colors instead of the hue-based gradient
  const generateGradient = () => {
    // Use fixed blue gradient instead of hue-based
    return {
      background: `linear-gradient(45deg, #1e40af, #3b82f6)`,
    }
  }

  // Update the generateGlow function to use blue colors
  const generateGlow = () => {
    const intensity = 10 + audioLevel * 30
    const opacity = 0.3 + audioLevel * 0.5
    return {
      boxShadow: `0 0 ${intensity}px ${intensity / 2}px rgba(59, 130, 246, ${opacity})`,
    }
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full flex items-center justify-center shadow-lg"
        style={generateGradient()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Mic className="h-8 w-8 text-white" />
      </motion.button>

      {/* Chat interface */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Chat header */}
            <div className="flex items-center justify-between rounded-t-2xl p-4" style={generateGradient()}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Mic className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">প্রগতি এআই চ্যাট</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className={cn(
                    "rounded-full p-2 text-white",
                    voiceMode ? "bg-white/30" : "bg-white/10 hover:bg-white/20",
                  )}
                  onClick={toggleVoiceMode}
                  title={voiceMode ? "টেক্সট মোডে যান" : "ভয়েস মোডে যান"}
                >
                  {voiceMode ? <MessageSquare className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </button>
                <button
                  className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {voiceMode ? (
                // Voice-only mode with animated circle
                <motion.div
                  key="voice-mode"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center p-8 h-[400px]"
                >
                  <div className="relative flex items-center justify-center h-64 w-64">
                    {/* Background circles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`bg-circle-${i}`}
                        className="absolute rounded-full opacity-20"
                        style={{
                          ...generateGradient(),
                          width: `${200 + i * 40}px`,
                          height: `${200 + i * 40}px`,
                        }}
                        animate={{
                          scale: [1, 1 + (i + 1) * 0.1 * (audioLevel + 0.5)],
                        }}
                        transition={{
                          duration: 1.5 + i * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      />
                    ))}

                    {/* Main animated circle */}
                    <motion.div
                      className="absolute h-48 w-48 rounded-full"
                      style={{
                        ...generateGradient(),
                        ...generateGlow(),
                      }}
                      animate={{
                        scale: [1, 1 + audioLevel * 0.3],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />

                    {/* Inner circle with microphone icon */}
                    <motion.div
                      className="relative z-10 h-32 w-32 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center"
                      animate={{
                        scale: isListening ? [1, 1.05, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: isListening ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                      }}
                    >
                      <Mic className="h-12 w-12 text-white" />
                    </motion.div>

                    {/* Sound wave circles */}
                    {isListening && audioLevel > 0.1 && (
                      <>
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={`wave-${i}`}
                            className="absolute rounded-full bg-white/20"
                            style={{
                              width: `${4 + audioLevel * 8}px`,
                              height: `${4 + audioLevel * 8}px`,
                            }}
                            animate={{
                              x: [0, Math.cos((i * Math.PI) / 6) * (100 + audioLevel * 50)],
                              y: [0, Math.sin((i * Math.PI) / 6) * (100 + audioLevel * 50)],
                              opacity: [1, 0],
                            }}
                            transition={{
                              duration: 1 + audioLevel,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>

                  <motion.p
                    className="mt-8 text-center text-gray-600"
                    animate={{ opacity: [0.6, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    {isListening ? "আমি শুনছি... কথা বলুন" : "শুরু করতে মাইক্রোফোন বাটনে ক্লিক করুন"}
                  </motion.p>

                  <Button
                    onClick={toggleListening}
                    className="mt-6 rounded-full"
                    style={
                      isListening
                        ? { backgroundColor: "#ef4444", color: "white" }
                        : { ...generateGradient(), color: "white" }
                    }
                    size="lg"
                  >
                    {isListening ? <MicOff className="h-5 w-5 mr-2" /> : <Mic className="h-5 w-5 mr-2" />}
                    {isListening ? "বন্ধ করুন" : "শুরু করুন"}
                  </Button>
                </motion.div>
              ) : (
                // Text chat mode
                <motion.div key="text-mode" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Chat messages */}
                  <div className="h-96 overflow-y-auto p-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "mb-4 max-w-[80%] rounded-2xl p-3",
                          message.sender === "user" ? "ml-auto bg-cyan-100 text-blue-600" : "text-white",
                        )}
                        style={message.sender === "user" ? {} : generateGradient()}
                      >
                        <p>{message.content}</p>
                        <p className="mt-1 text-right text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Voice input visualization */}
                  {isListening && (
                    <div className="relative mx-auto -mt-2 mb-2 flex h-20 items-center justify-center">
                      <motion.div
                        className="absolute h-16 w-16 rounded-full"
                        style={{
                          ...generateGradient(),
                          ...generateGlow(),
                        }}
                        animate={{
                          scale: [1, 1 + audioLevel * 0.5, 1],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      />
                      <Mic className="relative z-10 h-8 w-8 text-white" />
                    </div>
                  )}

                  {/* Chat input */}
                  <form onSubmit={handleSubmit} className="border-t p-4">
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={isListening ? "destructive" : "outline"}
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        style={isListening ? generateGradient() : {}}
                        onClick={toggleListening}
                      >
                        {isListening ? <MicOff className="h-5 w-5 text-white" /> : <Mic className="h-5 w-5" />}
                      </Button>
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="আপনার প্রশ্ন লিখুন..."
                        className="rounded-full"
                        disabled={isListening}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        style={generateGradient()}
                        disabled={!inputValue.trim() && !isListening}
                      >
                        <Send className="h-5 w-5 text-white" />
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </>
  )
}
