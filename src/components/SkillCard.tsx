import { FC, JSX, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

interface SkillCardProps {
  Icon: () => JSX.Element
  title: string
  filled?: boolean
  index: number
}

const SkillCard: FC<SkillCardProps> = ({ Icon, title, filled = false, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation with 3D effect
      gsap.fromTo(cardRef.current,
        { 
          y: 80, 
          opacity: 0,
          scale: 0.8,
          rotateX: 45,
          rotateY: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.15
        }
      )

      // Icon floating animation
      gsap.to(iconRef.current, {
        y: -8,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.3
      })

      // Icon rotation on scroll
      gsap.to(iconRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      })
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      className={`group relative flex flex-col items-center justify-center p-6 md:p-8 border-2 border-black dark:border-white rounded-lg cursor-default transition-all duration-500 overflow-hidden ${
        filled 
          ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white' 
          : 'bg-white dark:bg-card-dark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
      }`}
      whileHover={{ 
        scale: 1.08, 
        y: -10,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mb-3 md:mb-4">
        <motion.div 
          ref={iconRef}
          className="group-hover:scale-125 transition-transform duration-300"
          whileHover={{ 
            rotate: [0, -15, 15, -15, 0],
            scale: 1.3,
            transition: { duration: 0.6 }
          }}
        >
          <Icon />
        </motion.div>
      </div>
      
      <motion.h3 
        className="relative z-10 font-bold text-base md:text-lg text-center"
        initial={{ opacity: 0.8 }}
        whileHover={{ 
          opacity: 1,
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {title}
      </motion.h3>

      {/* Skill proficiency bar */}
      <div className="relative z-10 w-full mt-3 bg-gray-300 dark:bg-gray-600 rounded-full h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: "90%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default SkillCard