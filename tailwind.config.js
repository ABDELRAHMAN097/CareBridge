
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   xs: "250px", // حجم للشاشات الصغيرة جدًا (مثل الهواتف الصغيرة)
      //   sm: "480px", // حجم للشاشات الصغيرة (أقل من الافتراضي)
      //   xl: "1440px", // حجم أكبر للشاشات الكبيرة
      //   xxl: "2220px" // حجم للشاشات فائقة العرض
      // },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        fadeInDelay: "fadeIn 2s ease-in-out",
        slideUp: "slideUp 1.5s ease-out",
        scaleUp: "scaleUp 1.5s ease-in",
        "spin-slow": "spin 4s linear infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        scaleUp: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        }
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    }
  }
};
