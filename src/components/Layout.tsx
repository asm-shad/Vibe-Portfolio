import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-neutral-800 dark:text-neutral-200 transition-colors duration-300 font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default Layout