module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './webkitbuilds', // Where the build version of my node-webkit app is saved
        mac: true, // We want to build it for mac
        win: true, // We want to build it for win
        linux32: true, // We don't need linux32
        linux64: true // We don't need linux64
        },
      src: ['./*'] // Your node-webkit app
    }
  });


  //Load webkit task
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.file.setBase('./');
  // Default task(s).
  grunt.registerTask('default', ['nodewebkit']);

};
