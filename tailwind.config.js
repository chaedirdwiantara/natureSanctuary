/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Skin Care Theme
        skincare: {
          primary: '#4caf50',
          secondary: '#81c784',
          accent: '#2e7d32',
          bg: '#f1f8e9',
          light: '#e8f5e8'
        },
        // Pain Relief Theme  
        painrelief: {
          primary: '#ff5722',
          secondary: '#ff8a65',
          accent: '#d84315',
          bg: '#fff3e0',
          light: '#ffccbc'
        },
        // Wholesale Theme
        wholesale: {
          primary: '#1565c0',
          secondary: '#42a5f5',
          accent: '#0d47a1',
          bg: '#e3f2fd',
          light: '#bbdefb'
        },
        // Brand Colors
        brand: {
          gold: '#ffd700',
          cream: '#f5f5dc',
          brown: '#8b4513',
          australian: '#012169'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 87, 34, 0.3)',
        'glow-blue': '0 0 20px rgba(21, 101, 192, 0.3)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} 