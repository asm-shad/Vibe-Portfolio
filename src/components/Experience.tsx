import { FC, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  projects?: Array<{
    title: string
    description: string
    technologies: string
  }>
  additionalTraining?: string
  logo: string
  logoAlt: string
}

const Experience: FC = () => {
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

  const experiences: ExperienceItem[] = [
    {
      company: "LDC Group of Industries",
      role: "Executive Application Development",
      period: "January 2024 - Present",
      description: "Leading full-stack development initiatives and project management with comprehensive expertise in modern web technologies and enterprise solutions.",
      projects: [
        {
          title: "IOT System for KITTING Management",
          description: "Designed and managed comprehensive IoT system for manufacturing optimization, implementing real-time monitoring, automated data collection, and intelligent workflow management to optimize manufacturing processes and reduce operational overhead.",
          technologies: "IoT, Real-time Monitoring, Data Analytics"
        },
        {
          title: "Panda Resort Food & Resting Management System",
          description: "Collaborated on developing a comprehensive resort management system featuring food ordering, room booking, guest management, inventory tracking, and real-time analytics for enhanced customer experience and operational efficiency.",
          technologies: "Prisma ORM, Next.js, Database Management"
        },
        {
          title: "GarmentTech BD Learning Management System",
          description: "Led full-stack development of a scalable learning management system for workforce training, delivering comprehensive course management, progress tracking, assessments, and certification features.",
          technologies: "MERN Stack (React, Express.js, MongoDB)"
        },
        {
          title: "Sewing Production Tracking System",
          description: "Collaborated on implementing a production tracking system featuring real-time monitoring, barcode integration, and automated reporting for reducing manual errors and improving workflow efficiency in garment manufacturing.",
          technologies: "Laravel, MySQL, Barcode Integration"
        },
        {
          title: "Mini Warehouse Management System",
          description: "Collaborated on developing a comprehensive warehouse system implementing real-time inventory tracking, automated stock alerts, and report generation for efficient warehouse operations and inventory management.",
          technologies: "React, Node.js, MySQL, Real-time Systems"
        },
        {
          title: "Legacy ERP System Enhancement",
          description: "Provided support and optimization for legacy ERP system, enhanced system performance by adding IT-requisition module to streamline internal procurement processes and improve workflow efficiency.",
          technologies: "OOP PHP, MySQL/DB2, AJAX"
        }
      ],
      additionalTraining: "Currently undergoing training in Sage X3 ERP system and GraphQL integration as part of company's new system implementation initiative.",
      logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNjM2NkYxIi8+PC9zdmc+",
      logoAlt: "LDC Group Logo"
    },
    {
      company: "LDC Group of Industries",
      role: "Executive System Administrator",
      period: "November 2022 - December 2023",
      description: "Managed Active Directory, server/cloud infrastructure, network support, user support, inventory management and critical applications including Tally, WMS, WCS, and payroll systems. Ensured seamless operation of enterprise-level applications and maintained system reliability across the organization.",
      logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMTA5OTZBIi8+PC9zdmc+",
      logoAlt: "LDC Group Logo"
    },
    {
      company: "Express Systems Limited / Robi Axiata Limited",
      role: "Engineer Windows & Security Specialist",
      period: "February 2022 - November 2022",
      description: "Served as Azure cloud administrator managing deployments, security implementations (Tenable, PAM, eApproval), vulnerability assessments, system patching, and Active Directory support. Worked as service provider at Windows & Security Platform Team for Robi Axiata Limited, ensuring robust security posture and maintaining high availability of cloud infrastructure.",
      logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC5kMSA4LjI2TDEyIDJaIiBmaWxsPSIjRUY0NDQ0Ii8+PC9zdmc+",
      logoAlt: "Robi Axiata Logo"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black py-16 md:py-24" 
      id="experience"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="font-light text-gray-200">My</span>{' '}
            <span className="font-extrabold text-white">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Work Experience Section */}
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Experience
            </motion.h3>
            
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  className="group relative rounded-xl border border-card-border-dark bg-card-dark p-6 transition-all hover:border-neutral-600 hover:shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div className="flex items-center gap-4 mb-2 sm:mb-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                        <img 
                          alt={experience.logoAlt}
                          className="h-6 w-6" 
                          src={experience.logo}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {experience.role}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-neutral-400">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Projects List for Application Development Role */}
                  {experience.projects && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Project Achievements:</h4>
                      <div className="space-y-4">
                        {experience.projects.map((project, projectIndex) => (
                          <motion.div
                            key={project.title}
                            className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                          >
                            <h5 className="text-base font-semibold text-white mb-2">{project.title}</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                            <div className="text-xs text-blue-400 font-medium bg-blue-900/20 px-2 py-1 rounded inline-block">
                              {project.technologies}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Additional Training */}
                      {experience.additionalTraining && (
                        <motion.div 
                          className="mt-4 p-3 bg-gray-700 rounded-lg border border-gray-600"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <p className="text-gray-300 text-sm">
                            <strong className="text-white">Additional Training:</strong> {experience.additionalTraining}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience