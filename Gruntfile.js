module.exports = function(grunt) {

  // Configuration
  var options = {
    pkg: grunt.file.readJSON('package.json'),
    config: {
      src: 'grunt/*.js'
    }
  };
  var configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  // Load Plugins
  var tasks = { scope: [ 'devDependencies' ] };

  require('load-grunt-tasks')(grunt, tasks);

  // Register Tasks
  grunt.registerTask('default', ['serve:dev']);

  grunt.registerTask('build', ['sass', 'cssmin', 'htmlmin', 'jshint', 'concat']);

  grunt.registerTask('build:dev', ['build']);

  grunt.registerTask('serve:dev', ['build:dev', 'connect', 'watch']);

  grunt.registerTask('build:prod', ['build', 'uglify']);

  grunt.registerTask('serve:prod', ['build:prod', 'connect', 'watch']);
};
