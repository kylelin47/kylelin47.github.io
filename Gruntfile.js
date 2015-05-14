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
      },
      bootstrap: {
        files: {
          'javascripts/bootstrap.min.js': ['bower_components/bootstrap/dist/js/bootstrap.min.js'],
          'stylesheets/bootstrap.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
          'stylesheets/bootstrap-theme.min.css': ['bower_components/bootstrap/dist/css/bootstrap-theme.min.css']
        }
      }
    },
    serve: {
      options: {
          port: 3000
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
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', [
    'serve'
  ]);

  grunt.registerTask('bower', [
    'bower-install-simple',
    'concat'
  ]);

};
