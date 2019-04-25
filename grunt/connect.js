module.exports = {
  server: {
    options: {
      port: 9000,
      base: 'dist',
      hostname: 'localhost',
      livereload: 35729,
      open: {
        target: 'http://localhost:9000'
      }
    }
  }
};
