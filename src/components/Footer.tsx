import { motion } from 'framer-motion'
import { Github, Linkedin, Facebook, MessageCircle, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/asm-shad',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/asmshad/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/14PwCq3Dsns/',
      icon: Facebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Discord',
      href: 'https://discord.com/users/1256491544165220394',
      icon: MessageCircle,
      color: 'hover:text-indigo-400'
    }
  ]

  return (
    <motion.footer 
      className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-800 text-white py-12 px-4 md:px-8 mt-auto relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-black rounded-tr-xl rounded-bl-xl flex items-center justify-center font-bold text-xl transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 15.74L12 22L10.91 15.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="font-bold font-display tracking-wide text-xl">ASM Shad</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full Stack Developer passionate about creating innovative web solutions with modern technologies. 
              Turning ideas into digital reality.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-4"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg ${social.color} transition-all duration-300 hover:bg-gray-700 hover:scale-110 hover:shadow-lg group`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Let's connect and build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2024 ASM Shad. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>in Bangladesh</span>
          </div>
          
          <motion.div 
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer