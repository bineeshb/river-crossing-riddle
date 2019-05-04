module.exports = {
  options: {
    livereload: true
  },
  css: {
    files: 'src/scss/**/*.scss',
    tasks: ['sass', 'cssmin']
  },
  html: {
    files: 'src/index.html',
    tasks: ['htmlmin']
  },
  js: {
    files: 'src/js/**/*.js',
    tasks: ['jshint', 'concat']
  }
};
