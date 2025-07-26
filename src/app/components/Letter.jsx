"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Heart, Sparkles, RotateCcw } from "lucide-react"
import confetti from "canvas-confetti"

export default function Letter() {
    const [isOpen, setIsOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const [showCursor, setShowCursor] = useState(true)

    const letterText = `To my Lovely Jaan, 
HAPPIEESSTT BIRTHDAAY JAANU, this is a letter from the deep of my heart, I cant express how lucky and grateful I am to have a wifey like you, thats why i tried my best by writing a poem, hope you like it.
You Are MINE Always ✨💖

You are moonlight to my dark nights 🌙,
A calming glow in silent heights.
And sunshine to my waking skies ☀️,
The first hello when I open my eyes 👀.

My mornings bloom with your sweet “hi” 🌼,
And end in peace with your soft “goodbye” 🌌.
You're the soul within my weary frame 🫀,
Without you near, I’m not the same.

Like Bluetooth to my tangled tunes 🎧,
You sync with me in sun and moons 🌞🌝.
You bring me colors when I feel grey 🎨,
A spark of joy in every day 💫.

You're my rhythm, my steady beat 🥁,
My favorite song on repeat 🎶.
In storms, you're shelter, safe and wide ⛱️,
In restless times, my quiet guide 🧭.

Like stars that shimmer when all seems still 🌠,
You light me up, you always will 💡.
You're the answer I didn’t seek 🔍,
The strength I find when I feel weak 💪.

You’re my muse, my peace, my fight ✍️🕊️⚔️,
My calm in day, my dream at night 😌🌙.
Every word I write is true—✒️
My world begins and ends with you ❤️🌍.

I love you a lot lot lot lot lot lot lot lot lot my baby, my love, and i want to bring the world for you and treat you like my princess, soo once again i want to tell you Happier Birthday (Cause the happiest birthday will be after we are married to each other), and just to let you know YOU ARE ONLY MINE, and I DONT SHARE WHATS MINE, soo VERYY HAPPY BIRTHDAYY ONLY MINE DEAR PRINCESS.`

    useEffect(() => {
        if (showText) {
            let index = 0
            const timer = setInterval(() => {
                if (index < letterText.length) {
                    setCurrentText(letterText.slice(0, index + 1))
                    index++

                } else {
                    clearInterval(timer)
                    setShowCursor(false)
                    confetti({
                        particleCount: 50,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#ff69b4", "#ff1493", "#9370db", "#8a2be2", "#ffd700"],
                    })
                }
            }, 75)

            return () => clearInterval(timer)
        }
    }, [showText, letterText])

    const handleOpenLetter = () => {
        setIsOpen(true)
        setTimeout(() => {
            setShowText(true)
        }, 800)
    }

    const handleReset = () => {
        setIsOpen(false)
        setShowText(false)
        setCurrentText("")
        setShowCursor(true)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl w-full">
                <motion.div
                    className="text-center mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
                        A Special Letter
                    </h1>
                    <p className="text-lg text-purple-300">Just for you, on your special day 💌</p>
                </motion.div>

                <motion.div
                    className="relative w-full h-full flex justify-center "
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="envelope"
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenLetter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-80 h-52 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-26 bg-gradient-to-br from-pink-300 to-purple-300 transform origin-top"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Mail className="w-16 h-16 text-pink-500" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Sparkles className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <motion.div
                                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-pink-700 text-base font-semibold"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        Click to open
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="letter"
                                className="w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-pink-300 p-8 relative transition-all"
                                initial={{ rotateX: -90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.2 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                style={{
                                    background:
                                        "linear-gradient(135deg, #fce7f3 0%, #fae8ff 25%, #e0e7ff 50%, #fdf2f8 75%, #fce7f3 100%)",
                                }}
                            >
                                <div className="text-center mb-6">
                                    <motion.div
                                        className="inline-block"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <Heart className="w-12 h-12 text-red-500 fill-current mx-auto mb-3" />
                                    </motion.div>
                                </div>

                                <div className="min-h-72 max-h-72 overflow-y-auto text-gray-700 leading-relaxed">
                                    {showText && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 mr-2 ">
                                            <div className="whitespace-pre-wrap font-cute">
                                                {currentText}
                                                {showCursor && (
                                                    <motion.span
                                                        className="inline-block w-0.5 h-4 bg-purple-600 ml-1"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {currentText === letterText && (
                                    <motion.div
                                        className="text-center mt-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <button
                                            onClick={handleReset}
                                            className="inline-flex items-center gap-2 bg-white/60 text-pink-600 font-medium border border-pink-400 px-5 py-2 rounded-full hover:bg-pink-100 transition-all"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                            Read Again
                                        </button>
                                    </motion.div>
                                )}

                                <div className="absolute top-4 left-4">
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Heart className="w-6 h-6 text-rose-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <Sparkles className="w-6 h-6 text-purple-500" />
                                </div>
                            </motion.div>

                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    )
}
