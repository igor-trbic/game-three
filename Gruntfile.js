var path = require('path');
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    distdir: 'client/dist',
    srcdir: 'client/src',
    node_modules: './node_modules',
    copy: {
      vendor: {
        files: [
          {
            expand: true,
            cwd: '<%= node_modules%>/jquery/dist/',
            src: ['jquery.js'],
            dest: '<%= distdir %>/vendor/plugin'
          },
          {
            expand: true,
            cwd: '<%= node_modules%>/three/build/',
            src: ['three.min.js'],
            dest: '<%= distdir %>/vendor/plugin'
          },
          {
            expand: true,
            cwd: '<%= srcdir%>/js/',
            src: ['*.js'],
            dest: '<%= distdir %>/vendor/js'
          },
          {
            expand: true,
            cwd: '<%= srcdir%>/css/',
            src: ['*.css'],
            dest: '<%= distdir %>/vendor/css'
          }
        ]
      },
      index: {
        files: [{
          expand: true,
          cwd: 'client/src/',
          src: ['index.html'],
          dest: '<%= distdir %>/'
        }]
      }
    },
    concurrent: {
      dev: {
        tasks: ['watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    watch: {
      css: {
        files: 'client/src/**/*',
        tasks: ['copy'],
        options: {
          livereload: true
        }
      }
    },
    clean: {
      src: [
        'client/dist/**'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('dev', ['clean', 'copy', 'concurrent']);

  grunt.registerTask('default', ['dev']);
};
