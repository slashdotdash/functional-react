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
          { src: 'bower_components/backbone.babysitter/lib/backbone.babysitter.js', dest: 'js/vendor/backbone.babysitter.js' },
          { src: 'bower_components/backbone/backbone.js', dest: 'js/vendor/backbone.js' },
          { src: 'bower_components/backbone.marionette/lib/core/amd/backbone.marionette.js', dest: 'js/vendor/backbone.marionette.js' },
          { src: 'bower_components/backbone.wreqr/lib/backbone.wreqr.js', dest: 'js/vendor/backbone.wreqr.js' },
          { src: 'bower_components/d3/d3.js', dest: 'js/vendor/d3.js' },
          { src: 'bower_components/jquery/dist/jquery.js', dest: 'js/vendor/jquery.js' },
          { src: 'bower_components/nvd3/nv.d3.js', dest: 'js/vendor/nv.d3.js' },
          { src: 'bower_components/nvd3/nv.d3.css', dest: 'css/vendor/nv.d3.css' },
          { src: 'bower_components/react/react.js', dest: 'js/vendor/react.js' },
          { src: 'bower_components/react/JSXTransformer.js', dest: 'js/vendor/JSXTransformer.js' },
          { src: 'bower_components/requirejs/require.js', dest: 'js/vendor/require.js' },
          { src: 'bower_components/underscore/underscore.js', dest: 'js/vendor/underscore.js' }
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

    recess: {
      dist: {
        src: [
          'bower_components/bootstrap/less/bootstrap.less',
          'bower_components/bootstrap/less/responsive.less',
          'css/less/app.less'
        ],
        dest: 'css/main.css',
        options: {
          compile: true,
          compress: true
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'js/ledger',
          mainConfigFile: 'js/app/main.js',
          name: 'main',
          out: 'js/app.js'
        }
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      // lib: {
      //   files: '<%= jshint.lib.src %>',
      //   tasks: ['jshint:lib']
      // },
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