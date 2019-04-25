module.exports = {
  dist: {
    cwd: 'src',
    src: 'js/*.js',
    dest: 'dist/',
    expand: true,
    flatten: true,
    rename: function(dest, src) {
      return dest + src.replace('.js', '.min.js');
    }
  }
};
