module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Core pink brand emotion, confident expertise
        primary: {
          DEFAULT: "#FF69B4", // hotpink
          light: "#FFB6C1", // lightpink
          dark: "#FF1493", // deeppink
          50: "#FFF5F7",
          100: "#FFE6EA",
          200: "#FFCCD5",
          300: "#FFB3C1",
          400: "#FF8CAD",
          500: "#FF69B4", // hotpink
          600: "#FF1493", // deeppink
          700: "#DB0A7A",
          800: "#B80661",
          900: "#940448",
        },
        
        // Secondary Colors - Supporting warmth, approachable professionalism
        secondary: {
          DEFAULT: "#FFB6C1", // lightpink
          light: "#FFC0CB", // pink-200
          dark: "#FF69B4", // hotpink
          50: "#FFF9FA",
          100: "#FFF0F3",
          200: "#FFE1E6",
          300: "#FFD1D9",
          400: "#FFC3CC",
          500: "#FFB6C1", // lightpink
          600: "#FF8FA0",
          700: "#FF6880",
          800: "#FF4160",
          900: "#E6003D",
        },
        
        // Accent Colors - Critical focus moments, call-to-action prominence
        accent: {
          DEFAULT: "#FF1493", // deeppink
          light: "#FF69B4", // hotpink
          dark: "#C71585", // mediumvioletred
          50: "#FFF0F8",
          100: "#FFE0F0",
          200: "#FFC1E1",
          300: "#FFA2D2",
          400: "#FF5BB3",
          500: "#FF1493", // deeppink
          600: "#E6007A",
          700: "#C71585", // mediumvioletred
          800: "#A0116A",
          900: "#7A0D4F",
        },
        
        // Background Colors - Clean content canvas, professional clarity
        background: {
          DEFAULT: "#FAFAFA", // gray-50
          alt: "#F7F7F7", // gray-100
        },
        
        // Surface Colors - Card depth, content separation
        surface: {
          DEFAULT: "#FFFFFF", // white
          elevated: "#FFFFFF", // white
        },
        
        // Text Colors - Extended reading comfort, technical authority
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-600
          tertiary: "#A0AEC0", // gray-500
          inverse: "#FFFFFF", // white
        },
        
        // Status Colors - System feedback and user guidance
        success: {
          DEFAULT: "#48BB78", // green-500
          light: "#9AE6B4", // green-300
          dark: "#38A169", // green-600
          50: "#F0FFF4",
          100: "#C6F6D5",
          200: "#9AE6B4",
          300: "#68D391",
          400: "#48BB78",
          500: "#38A169",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        
        warning: {
          DEFAULT: "#ED8936", // orange-500
          light: "#FBD38D", // orange-300
          dark: "#DD6B20", // orange-600
          50: "#FFFAF0",
          100: "#FEEBC8",
          200: "#FBD38D",
          300: "#F6AD55",
          400: "#ED8936",
          500: "#DD6B20",
          600: "#C05621",
          700: "#9C4221",
          800: "#7B341E",
          900: "#652B19",
        },
        
        error: {
          DEFAULT: "#F56565", // red-500
          light: "#FC8181", // red-400
          dark: "#E53E3E", // red-600
          50: "#FFF5F5",
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E",
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
        
        // Border Colors - Content separation and accents
        border: {
          light: "#FFE6EA", // pink-100
          DEFAULT: "#FFB6C1", // lightpink
          accent: "#FF69B4", // hotpink
        },
      },
      
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        cta: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      
      boxShadow: {
        'pink-sm': '0 1px 2px 0 rgba(255, 105, 180, 0.05)',
        'pink-base': '0 4px 6px rgba(255, 105, 180, 0.1)',
        'pink-md': '0 6px 12px rgba(255, 105, 180, 0.12)',
        'pink-lg': '0 10px 25px rgba(255, 105, 180, 0.15)',
        'pink-xl': '0 20px 40px rgba(255, 105, 180, 0.18)',
      },
      
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '300ms',
        slow: '500ms',
      },
      
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'terminal-cursor': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}