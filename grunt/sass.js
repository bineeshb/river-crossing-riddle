module.exports = {
  options: {
    implementation: require('node-sass')
  },
  docs: {
    files: {
      'docs/styles.min.css': 'src/scss/styles.scss'
    }
  }
};
