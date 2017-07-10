module.exports = {
  use: [
    ['neutrino-preset-react', {
      polyfills: { babel: false },
      html: { template: './src/index.ejs' }
    }],
  ]
};
