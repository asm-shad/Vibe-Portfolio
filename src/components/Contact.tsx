import { FC, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Facebook, Github, Linkedin, MessageSquare, Send } from 'lucide-react'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  })

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

      // Form animation
      gsap.fromTo(formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          }
        }
      )

      // Content animation
      gsap.fromTo(contentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/share/14PwCq3Dsns/", label: "Facebook" },
    { Icon: Github, href: "https://github.com/asm-shad", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/asmshad/", label: "LinkedIn" },
    { Icon: MessageSquare, href: "https://discord.com/users/1256491544165220394", label: "Discord" }
  ]

  return (
    <section 
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-16 md:py-24" 
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div 
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-card-light dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                  placeholder="Your name"
                  type="text"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-card-light dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                  placeholder="Email"
                  type="email"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-card-light dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                  placeholder="Your website (Optional)"
                  type="text"
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-card-light dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                  placeholder="How can I help?"
                  rows={5}
                  required
                />
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button
                  className="bg-black text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all text-sm tracking-wide flex items-center gap-2"
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                  Get In Touch
                </motion.button>

                <div className="flex gap-3">
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.6 + index * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Content */}
          <motion.div 
            ref={contentRef}
            className="flex flex-col justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
              <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-8 text-neutral-900 dark:text-white"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's{' '}
              <span className="text-outline">talk</span>{' '}
              for<br />
              Something special
            </motion.h2>

            <motion.p 
              className="text-gray-500 dark:text-gray-400 mb-10 text-base leading-relaxed max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm passionate about creating robust, scalable web applications using modern technologies. 
              Let's collaborate to bring your ideas to life with clean, efficient code.
            </motion.p>

            <motion.div 
              className="space-y-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                className="block text-2xl font-bold font-display text-neutral-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                href="mailto:asmshad@gmail.com"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                asmshad@gmail.com
              </motion.a>
              
              <motion.a
                className="block text-2xl font-bold font-display text-neutral-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                href="tel:01608898818"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                01608898818
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact