module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      jquery: {
        files: {
          'javascripts/jquery.min.js': ['bower_components/jquery/dist/jquery.min.js']
        }
      },
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
      },
      'prod': {
        options: {
          production: true
        }
      },
      'dev': {
        options: {
          production: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-bower-install-simple");

  grunt.registerTask('default', [
    'bower-install-simple',
    'concat'
  ]);

  grunt.registerTask('bower', [
    'bower-install-simple',
    'concat'
  ]);

};
