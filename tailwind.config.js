export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1E",
        card: "#111827",
        primary: "#3B82F6",
        secondary: "#06B6D4",
        text: "#F9FAFB",
        textSecondary: "#9CA3AF",
        danger: "#EF4444",
        safe: "#10B981",
        warning: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
}
