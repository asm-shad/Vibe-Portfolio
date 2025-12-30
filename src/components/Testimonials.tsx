import { FC, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, Code, Layers, Target } from 'lucide-react'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  id: number
  name: string
  role: string
  icon: any
  quote: string
  featured?: boolean
}

const Testimonials: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP scroll-based section reveal
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Code Quality",
      role: "My Philosophy",
      icon: Code,
      quote: "I believe in writing clean, maintainable code that not only works today but scales for tomorrow. Every line of code should tell a story and serve a purpose."
    },
    {
      id: 2,
      name: "Full Stack Approach",
      role: "My Expertise",
      icon: Layers,
      quote: "From React frontends to Node.js backends, I handle the complete development cycle. My goal is to create seamless user experiences backed by robust, scalable architecture.",
      featured: true
    },
    {
      id: 3,
      name: "Client Success",
      role: "My Commitment",
      icon: Target,
      quote: "Your project's success is my success. I'm committed to delivering solutions that exceed expectations and drive real business value."
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-16 md:py-24" 
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="font-light text-gray-800 dark:text-gray-200">My</span>{' '}
            <span className="font-extrabold text-black dark:text-white">Philosophy</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch md:items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`p-8 rounded-2xl transition-all duration-300 text-center flex flex-col items-center ${
                testimonial.featured
                  ? 'bg-black text-white transform md:scale-105 z-10 shadow-2xl'
                  : 'bg-white dark:bg-gray-800 hover:shadow-lg border border-gray-100 dark:border-gray-700'
              }`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <div className="relative mb-6">
                <motion.div 
                  className={`w-24 h-24 rounded-tr-xl rounded-bl-xl flex items-center justify-center transition-all duration-300 ${
                    testimonial.featured
                      ? 'bg-black text-white'
                      : 'bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-gray-200 dark:border-gray-700'
                  }`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <testimonial.icon className="w-10 h-10" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className={`absolute bottom-0 right-0 rounded-full p-1 w-8 h-8 flex items-center justify-center ${
                    testimonial.featured
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Quote className="w-3 h-3" />
                </motion.div>
              </div>

              <p className={`text-sm leading-relaxed mb-6 font-medium ${
                testimonial.featured
                  ? 'text-gray-300'
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {testimonial.quote}
              </p>

              <div className="mt-auto">
                <h3 className={`font-display font-bold text-lg ${
                  testimonial.featured
                    ? 'text-white'
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {testimonial.name}
                </h3>
                <p className={`text-sm font-medium mt-1 ${
                  testimonial.featured
                    ? 'text-gray-400'
                    : 'text-gray-500 dark:text-gray-500'
                }`}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials