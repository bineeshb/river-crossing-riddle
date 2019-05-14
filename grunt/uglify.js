module.exports = {
  options: {
    banner: '/*\n * <%= pkg.name.replace(/-/g, " ").toUpperCase() %>\n * <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
  },
  docs: {
    files: {
      'docs/scripts.min.js': 'docs/scripts.min.js'
    }
  }
};
