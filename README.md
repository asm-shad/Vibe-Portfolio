# Evren Shah - Frontend Developer Portfolio

A complete, pixel-perfect React portfolio with modern animations and comprehensive sections, built with React 19+ and the latest tech stack.

## 🚀 Tech Stack

- **React 19** - Latest React with modern features and improved performance
- **TypeScript** - Type-safe development with enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework with comprehensive custom theme
- **Framer Motion 11** - Advanced animations and micro-interactions
- **GSAP** - Professional scroll-based animations and triggers
- **Lucide React** - Beautiful, customizable icon library
- **Vite 5** - Lightning-fast development and optimized builds

## ✨ Features

- 🎨 **Pixel-perfect design** - Exact conversion from HTML to React
- 🌙 **Dark mode support** - Seamless theme switching with smooth transitions
- 📱 **Fully responsive** - Optimized for all device sizes
- 🎭 **Advanced animations** - GSAP scroll triggers + Framer Motion interactions
- ⚡ **Performance optimized** - React 19 features + Vite optimization
- 🎯 **Modern UX patterns** - Smooth scrolling, hover effects, loading states
- 🔧 **Developer friendly** - TypeScript, ESLint, clean architecture

## 📋 Complete Sections

### 🏠 **Hero Section**
- Animated text reveals with stagger effects
- Social media links with hover animations
- Professional developer illustration
- Smooth scroll-triggered animations

### 🛠️ **Skills Section**
- Interactive skill cards with hover effects
- Technology icons (Git, JavaScript, Sass, Nest.js, Storybook, Socket.io)
- Grid layout with responsive design
- Scroll-triggered card animations

### 💼 **Experience Section**
- Professional timeline with company logos
- Google, YouTube, Apple experience cards
- Hover animations and dark theme optimization
- Real company logos with proper styling

### 👤 **About Me Section**
- Custom SVG character illustration
- Two-column responsive layout
- Professional bio content with smooth animations
- Image with decorative border effects

### 🚀 **Projects Section**
- **Show More Functionality** - Initially displays 3 projects, expands to 6
- Alternating left/right layout for visual interest
- Project images with hover effects
- External link buttons with animations
- Smooth expand/collapse with AnimatePresence

### 💬 **Testimonials Section**
- Three testimonial cards with user photos
- Featured testimonial with special styling
- Quote icons and professional layout
- Hover animations and responsive grid

### 📞 **Contact Section**
- Functional contact form with validation
- Social media links (Facebook, Twitter, Instagram, LinkedIn)
- Contact information display
- Form animations and hover effects

### 🦶 **Footer**
- Professional branding
- Copyright information
- Consistent styling with overall theme

## 🎨 Design System

### **Color Palette**
```css
primary: "#171717"           // Neutral-900 for primary actions
background-light: "#f8fafc"  // Very light cool gray
background-dark: "#0f172a"   // Slate-900
card-light: "#ffffff"        // Pure white cards
card-dark: "#1e293b"         // Dark theme cards
```

### **Typography**
- **Inter** - Primary font for body text and UI elements
- **Sora** - Display font for headings and branding
- **Poppins** - Projects section font

### **Animations**
- **Framer Motion** - Page entrance, micro-interactions, show/hide states
- **GSAP ScrollTrigger** - Section reveals, parallax effects
- **CSS Transitions** - Smooth theme switching and hover states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd evren-shah-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout wrapper with theme support
│   ├── Navbar.tsx          # Navigation with smooth animations
│   ├── Hero.tsx            # Hero section with text animations
│   ├── Skills.tsx          # Skills grid with hover effects
│   ├── SkillCard.tsx       # Individual skill card component
│   ├── Experience.tsx      # Professional timeline
│   ├── About.tsx           # About section with custom illustration
│   ├── Projects.tsx        # Projects with show more functionality
│   ├── Testimonials.tsx    # Client testimonials section
│   ├── Contact.tsx         # Contact form and information
│   └── Footer.tsx          # Site footer
├── App.tsx                 # Main app component
├── main.tsx               # React 19 entry point
└── index.css              # Tailwind imports
```

## 🎯 Key Features Breakdown

### **Show More Projects**
- Initially displays 3 projects
- "Show More Projects" button reveals 3 additional projects
- Smooth animations when expanding/collapsing
- Button text and icon change based on state
- Uses AnimatePresence for smooth transitions

### **Scroll Animations**
- GSAP ScrollTrigger for section reveals
- Staggered animations for lists and grids
- Parallax effects on images
- Smooth scroll behavior

### **Dark Mode**
- System preference detection
- Manual toggle capability
- Smooth transitions between themes
- All components optimized for both modes

### **Responsive Design**
- Mobile-first approach
- Breakpoint optimization
- Touch-friendly interactions
- Flexible layouts

## 🔧 Customization

### **Adding New Sections**
1. Create component in `src/components/`
2. Add to `App.tsx`
3. Update navigation in `Navbar.tsx`
4. Add scroll trigger animations

### **Modifying Colors**
Update `tailwind.config.js` color palette:
```javascript
colors: {
  primary: "#your-color",
  "background-light": "#your-light-bg",
  "background-dark": "#your-dark-bg",
}
```

### **Adding Animations**
- Use Framer Motion for component-level animations
- Use GSAP for scroll-based and complex animations
- Follow existing patterns for consistency

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Icon Replacements

Original SVG icons replaced with Lucide React equivalents:
- Git → `GitBranch`
- JavaScript → `Code2`
- Sass/Scss → `Palette`
- Nest.js → `Layers`
- Storybook → `BookOpen`
- Socket.io → `Zap`
- Social icons → `Facebook`, `Twitter`, `Instagram`, `Linkedin`
- UI icons → `ExternalLink`, `ChevronDown`, `Quote`, `Send`

## 🚀 Performance Optimizations

- React 19 concurrent features
- Lazy loading for images
- Optimized bundle splitting
- Efficient re-renders with proper memoization
- GSAP performance optimizations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Built with ❤️ using React 19, TypeScript, and modern web technologies**