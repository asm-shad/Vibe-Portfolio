import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Facebook, Linkedin, MessageSquare, Github, Code, Sparkles, Zap } from 'lucide-react'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP scroll-based animations
      gsap.fromTo(imageRef.current, 
        { y: 50, opacity: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power2.out",
          delay: 0.5
        }
      )

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random"
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const socialIcons = [
    { Icon: Facebook, href: "https://www.facebook.com/share/14PwCq3Dsns/", filled: true },
    { Icon: Github, href: "https://github.com/asm-shad", filled: false },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/asmshad/", filled: false },
    { Icon: MessageSquare, href: "https://discord.com/users/1256491544165220394", filled: false }
  ]

  const floatingElements = [
    { Icon: Code, position: "top-20 left-20", delay: 0 },
    { Icon: Sparkles, position: "top-40 right-20", delay: 1 },
    { Icon: Zap, position: "bottom-40 left-10", delay: 2 },
    { Icon: Code, position: "bottom-20 right-40", delay: 0.5 },
  ]

  const nameText = "ASM Shad"

  return (
    <section className="bg-background-light dark:bg-background-dark min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`floating-element absolute ${element.position} opacity-10 dark:opacity-20`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: element.delay, duration: 1 }}
          >
            <element.Icon className="w-8 h-8 text-blue-500" />
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400 to-yellow-600 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      <header 
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full relative z-10" 
        id="hero"
      >
        <motion.div 
          className="w-full md:w-1/2 space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2 md:space-y-4">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-display"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hello I'm{' '}
              </motion.span>
              <motion.span 
                className="font-extrabold block mt-1 md:mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {nameText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#3B82F6",
                      transition: { duration: 0.2 }
                    }}
                    className="inline-block cursor-pointer"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                  className="inline-block ml-1 text-blue-500"
                >
                  .
                </motion.span>
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight font-display"
              variants={itemVariants}
            >
              <motion.span 
                className="font-extrabold"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Full Stack
              </motion.span>{' '}
              <motion.span 
                className="text-outline"
              >
                Developer
              </motion.span>
            </motion.h2>
            
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight font-display"
              variants={itemVariants}
            >
              Based In <motion.span 
                className="font-extrabold relative"
                whileHover={{ scale: 1.05 }}
              >
                Bangladesh
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                />
              </motion.span>.
            </motion.h3>
          </div>

          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed text-sm md:text-base"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
            >
              I'm a passionate Full Stack Developer specializing in modern web technologies. 
              I create robust, scalable applications using React, Node.js, TypeScript, and various 
              databases. With experience in both frontend and backend development, I bring ideas to life 
              through clean, efficient code.
            </motion.span>
          </motion.p>

          <motion.div 
            className="flex items-center gap-3 pt-4"
            variants={itemVariants}
          >
            {socialIcons.map(({ Icon, href, filled }, index) => (
              <motion.a
                key={index}
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded border-2 border-black dark:border-white transition-all ${
                  filled 
                    ? 'bg-black dark:bg-white text-white dark:text-black' 
                    : 'bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 50, opacity: 0, rotate: -180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ 
                  delay: 3.2 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div
                  animate={{ rotate: filled ? [0, 360] : 0 }}
                  transition={{ 
                    duration: 2, 
                    repeat: filled ? Infinity : 0,
                    ease: "linear",
                    delay: 4
                  }}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="w-full md:w-1/2 flex justify-center relative">
          <motion.div className="absolute bottom-0 w-3/4 h-1 bg-black dark:bg-white rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          />
          <motion.div
            ref={imageRef}
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
            className="w-full max-w-sm md:max-w-md h-auto"
          >
            {/* Banner Image */}
            <motion.div 
              className="relative w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1"
              animate={{ 
                background: [
                  "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                  "linear-gradient(45deg, #EC4899, #3B82F6, #8B5CF6)",
                  "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)",
                  "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)"
                ]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <motion.div 
                className="w-full h-full rounded-full overflow-hidden"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/src/assets/Banner.jpeg" 
                  alt="ASM Shad - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            
            {/* Floating Tech Icons around image */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-purple-500 rounded-full p-3 shadow-lg"
              animate={{ 
                y: [10, -10, 10],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: 1,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-8 bg-pink-500 rounded-full p-2 shadow-lg"
              animate={{ 
                x: [-5, 5, -5],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </header>
    </section>
  )
}

export default Hero