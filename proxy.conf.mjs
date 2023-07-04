export default [
  {
    context: "/api",
    target: "https://mandalorian-store.netlify.app",
    // target: "https://api.adviceslip.com/advice",
    // pathRewrite: { "^/api": "" },
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
  },
];
