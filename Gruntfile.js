/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      app: {
        options: {
          '-W055': true,
          '-W064': true,
          globals: {
            jQuery: true,
            document: true,
            define: true,
            require: true,
            window: true
          }
        },
        src: ['js/app/**/*.js']
      }
    },

    copy: {
      vendor: {
        files: [
          { src: 'bower_components/bacon/dist/Bacon.js', dest: 'js/vendor/bacon.js' },
          { src: 'bower_components/bacon.model/dist/bacon.model.js', dest: 'js/vendor/bacon.model.js' },
          { src: 'bower_components/react/react.js', dest: 'js/vendor/react.js' },
          { src: 'bower_components/react/JSXTransformer.js', dest: 'js/vendor/JSXTransformer.js' },
          { src: 'bower_components/requirejs/require.js', dest: 'js/vendor/require.js' },
        ]
      }
    },

    react: {
      jsx: {
        files: [
          {
            expand: true,
            cwd: 'js/app',
            src: [ '**/*.jsx' ],
            dest: 'js/app',
            ext: '.js'
          }
        ]
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      react: {
        files: 'js/app/**/*.jsx',
        tasks: ['react']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-recess');

  // Default task.
  grunt.registerTask('default', ['copy', 'recess', 'requirejs']);
};