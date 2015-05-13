module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      mprogress: {
        files: {
          'javascripts/mprogress.min.js': ['bower_components/mprogress/mprogress.min.js'],
          'stylesheets/mprogress.min.css': ['bower_components/mprogress/mprogress.min.css']
        }
      }
    },
    'bower-install-simple': {
      options: {
        color: true,
        directory: 'bower_components'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-bower-install-simple");

  grunt.registerTask('bower', [
    'bower-install-simple',
    'concat'
  ]);

};
