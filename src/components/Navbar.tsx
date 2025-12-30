import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'About Me', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Me', href: '#contact' }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <motion.a 
          className="flex items-center gap-2 group" 
          href="#"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 bg-primary dark:bg-white text-white dark:text-black rounded-tr-xl rounded-bl-xl flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 15.74L12 22L10.91 15.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-wide dark:text-white">ASM Shad</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-600 dark:text-gray-300">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              className="hover:text-primary dark:hover:text-white transition-colors text-sm lg:text-base"
              href={item.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.a
            className="bg-primary text-white px-3 py-2 rounded-md font-semibold flex items-center gap-1 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all text-sm"
            href="https://drive.google.com/file/d/1KZjBlXJz_GDCVZrPl1usqhgoNbCtmswK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-4 w-4" />
          </motion.a>
          
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </div>

        <motion.a
          className="hidden md:flex bg-primary text-white px-4 py-2 md:px-5 md:py-3 rounded-md font-semibold items-center gap-2 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
          href="https://drive.google.com/file/d/1KZjBlXJz_GDCVZrPl1usqhgoNbCtmswK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span>Resume</span>
          <Download className="h-4 w-4 md:h-5 md:w-5" />
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-t border-gray-100 dark:border-neutral-800"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors font-medium"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar