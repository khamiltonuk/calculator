module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
        unit: {
            configFile: 'karma.conf.js'
        }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'assets/scss/*.scss' : 'build/<%= pkg.name %>.css'
            }
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass','karma', 'uglify']);

};
