module.exports = {
  options: {
    implementation: require('node-sass')
  },
  dist: {
    files: {
      'dist/styles.min.css': 'src/scss/styles.scss'
    }
  }
};
