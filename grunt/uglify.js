module.exports = {
  options: {
    banner: '/*\n * <%= pkg.name.replace(/-/g, " ").toUpperCase() %>\n * <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
  },
  dist: {
    files: {
      'dist/scripts.min.js': 'src/js/scripts.js'
    }
  }
};
