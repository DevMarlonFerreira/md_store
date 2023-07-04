const proxy = [
  {
    // context: "/api",
    // // target: 'http://localhost:8080',
    // target: "https://api.adviceslip.com/advice",
    // // pathRewrite: { "^/api": "" },
    // secure: false,
    // changeOrigin: true,
    // logLevel: "debug",
    devServer: {
      proxy: {
        '/api': {
          target: 'https://other-server.example.com',
          secure: false,
        },
      },
    },

  },
];
module.exports = proxy;

// https://mandalorian-store.netlify.app/equipments
// https://mandalorian-store.netlify.app/api/equipments

// devServer: {
//   proxy: {
//     '/api': {
//       target: 'https://other-server.example.com',
//       secure: false,
//     },
//   },
// },
