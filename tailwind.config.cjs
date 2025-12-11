module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B72FF',
        accent: '#FF6B6B'
      },
      boxShadow: {
        'card': '0 8px 24px rgba(11,39,80,0.06)'
      }
    },
  },
  plugins: [],
}

