module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
        'css/main.css': 'css/src/main.scss'
        }
      }
    }

  })


grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);
}
