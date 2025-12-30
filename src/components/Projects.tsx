import { FC, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, ChevronDown, Github } from 'lucide-react'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  link: string
  github?: {
    main?: string
    frontend?: string
    backend?: string
  }
  technologies: string
}

const Projects: FC = () => {
  const [showAll, setShowAll] = useState(false)
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

  const projects: Project[] = [
    {
      id: 1,
      title: "GenZ Mart",
      description: "A comprehensive E-Commerce System built with modern full-stack technologies. Features include product catalog, shopping cart, user authentication, order management, and payment integration. Developed with NextJS and ShadCN for the frontend, and PRISMA with PostgreSQL for robust backend data management.",
      image: "/projects/genZMart.png",
      imageAlt: "GenZ Mart E-Commerce Platform",
      link: "https://gen-z-mart-frontend.vercel.app/",
      github: {
        frontend: "https://github.com/asm-shad/GenZMart-Frontend.git",
        backend: "https://github.com/asm-shad/GenZFashion.git"
      },
      technologies: "NextJS, ShadCN, TypeScript, PRISMA, PostgreSQL, NodeJS"
    },
    {
      id: 2,
      title: "GenZ Fashion",
      description: "An elegant E-Commerce System focused on fashion retail with advanced state management and modern UI. Built with React ecosystem including Redux Toolkit for state management, RTK Query for efficient data fetching, and Express.js with MongoDB for scalable backend architecture.",
      image: "/projects/genZFashion.png",
      imageAlt: "GenZ Fashion E-Commerce Platform",
      link: "https://gen-z-fashion-frontend.vercel.app/",
      github: {
        main: "https://github.com/asm-shad/GenZFashion.git"
      },
      technologies: "React, Redux Toolkit, RTK Query, TypeScript, Tailwind CSS, Express, Mongoose"
    },
    {
      id: 3,
      title: "Parcelo",
      description: "A comprehensive Parcel Delivery System with real-time tracking, user authentication, and delivery management. Features include package tracking, delivery scheduling, user dashboards, and secure authentication using Passport.js. Built with React and Express for optimal performance.",
      image: "/projects/Parcelo.png",
      imageAlt: "Parcelo Parcel Delivery System",
      link: "https://parcelo-iota.vercel.app/",
      github: {
        frontend: "https://github.com/asm-shad/Parcelo.git",
        backend: "https://github.com/asm-shad/Parcel-Delivery-API.git"
      },
      technologies: "React, Redux Toolkit, RTK Query, TypeScript, Tailwind CSS, Express, Mongoose, Passport"
    },
    // Additional projects for "show more" functionality
    {
      id: 4,
      title: "RedAid",
      description: "A Blood Donation Platform connecting donors with recipients to save lives. Features include donor registration, blood request management, location-based matching, and emergency notifications. Built with React and MongoDB to handle critical healthcare data efficiently and securely.",
      image: "/projects/RedAid.png",
      imageAlt: "RedAid Blood Donation Platform",
      link: "https://redaid-b0f4e.web.app/",
      github: {
        frontend: "https://github.com/asm-shad/RedAid-Blood-Donation-Application-Client.git",
        backend: "https://github.com/asm-shad/RedAid-Blood-Donation-Application-Server.git"
      },
      technologies: "React, RTK Query, TypeScript, Tailwind CSS, Express, MongoDB"
    },
    {
      id: 5,
      title: "Advencha",
      description: "A stunning Travel Landing Page showcasing beautiful destinations and travel packages. Features responsive design, smooth animations, and modern UI components. Built with NextJS and TypeScript for optimal performance and SEO optimization to attract travel enthusiasts.",
      image: "/projects/Advencha.png",
      imageAlt: "Advencha Travel Landing Page",
      link: "https://advencha.vercel.app/",
      github: {
        main: "https://github.com/asm-shad/Advencha.git"
      },
      technologies: "NextJS, TypeScript, Responsive Design, SEO Optimization"
    },
    {
      id: 6,
      title: "CarePulse",
      description: "A comprehensive Healthcare Management System for managing patient appointments, medical records, and healthcare workflows. Features include patient registration, appointment scheduling, medical history tracking, and healthcare provider management. Built with NextJS and ShadCN for modern healthcare solutions.",
      image: "/projects/carePlus.png",
      imageAlt: "CarePulse Healthcare Management System",
      link: "https://care-pulse-mu-ten.vercel.app/",
      github: {
        main: "https://github.com/asm-shad/CarePulse.git"
      },
      technologies: "NextJS, ShadCN, TypeScript, Healthcare Management, Appointment System"
    }
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="font-poppins bg-black py-16 md:py-24" 
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.header 
          ref={titleRef}
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="font-light text-gray-400">My</span>{' '}
            <span className="font-extrabold text-white">Projects</span>
          </h1>
        </motion.header>

        <motion.div 
          className="space-y-24 md:space-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10 md:gap-16 group`}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-full md:w-1/2 relative">
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <img
                      alt={project.imageAlt}
                      className="relative w-full h-auto object-cover rounded-xl border border-gray-100 dark:border-gray-800"
                      src={project.image}
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                  <motion.span 
                    className="text-5xl md:text-6xl font-bold text-white"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {String(project.id).padStart(2, '0')}
                  </motion.span>
                  
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold leading-tight text-white"
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed text-base md:text-lg mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div 
                    className="mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                  >
                    <div className="text-sm text-blue-400 font-medium bg-blue-900/20 px-3 py-1 rounded-full inline-block">
                      {project.technologies}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 pt-2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {/* Live Demo Link */}
                    <motion.a
                      aria-label="View Live Demo"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors duration-200"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>

                    {/* GitHub Links */}
                    {project.github && (
                      <div className="flex items-center gap-2">
                        {project.github.main && (
                          <motion.a
                            aria-label="View GitHub Repository"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-200"
                            href={project.github.main}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </motion.a>
                        )}
                        
                        {project.github.frontend && (
                          <motion.a
                            aria-label="View Frontend Repository"
                            className="inline-flex items-center gap-2 px-3 py-2 border border-gray-600 text-white rounded-full font-medium text-xs hover:bg-gray-800 transition-colors duration-200"
                            href={project.github.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-3 h-3" />
                            Frontend
                          </motion.a>
                        )}
                        
                        {project.github.backend && (
                          <motion.a
                            aria-label="View Backend Repository"
                            className="inline-flex items-center gap-2 px-3 py-2 border border-gray-600 text-white rounded-full font-medium text-xs hover:bg-gray-800 transition-colors duration-200"
                            href={project.github.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-3 h-3" />
                            Backend
                          </motion.a>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{showAll ? 'Show Less Projects' : 'Show More Projects'}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects