/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "nodebook-cream": "rgb(255, 249, 230)",
        "nodebook-green": "rgb(97, 176, 84)",
        "nodebook-green-dark": "rgb(77, 140, 67)",
        "nodebook-yellow": "rgb(255, 246, 122)",
        primary: "rgb(255,249,230)",
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-ibm-plex)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderWidth: {
        3: "3px",
        4: "4px",
      },
      boxShadow: {
        neu: "4px 4px 0px 0px rgba(0,0,0,1)",
        "neu-sm": "2px 2px 0px 0px rgba(0,0,0,1)",
        "neu-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
        "neu-xl": "12px 12px 0px 0px rgba(0,0,0,1)",
        "neu-green": "4px 4px 0px 0px rgb(97, 176, 84), 4px 4px 0px 2px rgba(0,0,0,1)",
        "neu-yellow": "4px 4px 0px 0px rgb(255, 246, 122), 4px 4px 0px 2px rgba(0,0,0,1)",
        "neu-multi":
          "2px 2px 0px 0px rgba(0,0,0,0.1), 4px 4px 0px 0px rgba(0,0,0,0.2), 6px 6px 0px 0px rgba(0,0,0,0.3), 8px 8px 0px 0px rgba(0,0,0,1)",
        "neu-float": "0 4px 0px 0px rgba(0,0,0,1), 0 8px 15px -5px rgba(0,0,0,0.3)",
        "neu-inset": "inset 4px 4px 0px 0px rgba(0,0,0,0.2)",
        "neu-glow": "4px 4px 0px 0px rgba(0,0,0,1), 0 0 20px rgba(97, 176, 84, 0.3)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        tilt: "tilt 10s ease-in-out infinite",
        "pulse-shadow": "pulseShadow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.3s ease-out",
        "rotate-gentle": "rotateGentle 20s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        blink: "blink 1s ease-in-out infinite",
        "timeline-flow": "timelineFlow 4s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "magnetic": "magnetic 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        pulseShadow: {
          "0%, 100%": { boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" },
          "50%": { boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.8)" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        rotateGentle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        timelineFlow: {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "translateY(0)"
          },
          "50%": { 
            opacity: "1",
            transform: "translateY(-100%)"
          },
        },
        glowPulse: {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(97, 176, 84, 0.5), 0 0 10px rgba(97, 176, 84, 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(97, 176, 84, 0.8), 0 0 40px rgba(97, 176, 84, 0.5)"
          },
        },
        magnetic: {
          "0%, 100%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%": { transform: "translateX(2px) translateY(-2px) rotate(1deg)" },
          "50%": { transform: "translateX(-2px) translateY(2px) rotate(-1deg)" },
          "75%": { transform: "translateX(1px) translateY(1px) rotate(0.5deg)" },
        },
      },
    },
  },
  plugins: [],
};
