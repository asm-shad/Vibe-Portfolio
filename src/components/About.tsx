import { FC, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const About: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

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

      // Image animation
      gsap.fromTo(imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-gray-100 dark:border-neutral-800" 
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          <motion.div 
            ref={imageRef}
            className="w-full max-w-md lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square max-w-[400px]">
              <div className="absolute inset-0 border-2 border-gray-200 dark:border-neutral-700 rounded-lg transform -translate-x-4 -translate-y-4 z-0"></div>
              <div className="relative z-10 w-full h-full bg-gray-50 dark:bg-neutral-800 rounded-lg overflow-hidden">
                <img 
                  src="/AboutMe.jpg" 
                  alt="Evren Shah - About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 text-left">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-400 dark:text-gray-500"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About{' '}
              <span className="text-gray-900 dark:text-white font-extrabold">
                Me
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p>
                I'm a passionate Full Stack Developer based in Bangladesh, specializing in modern web 
                technologies. I create robust, scalable applications using React, Node.js, TypeScript, 
                and various databases. With experience in both frontend and backend development, I bring 
                ideas to life through clean, efficient code.
              </p>
              
              <p>
                My journey in web development has taken me through various roles, from system administration 
                to application development. I've worked with companies like LDC Group and Robi Axiata Limited, 
                gaining valuable experience in enterprise-level applications, system security, and platform 
                management.
              </p>
              
              <p>
                I'm proficient in technologies like JavaScript, TypeScript, React.js, Next.js, Node.js, 
                Laravel, Prisma, PostgreSQL, and MongoDB. I'm always eager to learn new technologies and 
                take on challenging projects that push the boundaries of what's possible on the web.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About