'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			coffee: {
				files: ['scripts/{,*}*.coffee'],
				tasks: ['coffee']
			},
			sass: {
				files: ['styles/{,*/}*.sass'],
				tasks: ['sass']
			},
			livereload: {
				options: {livereload: true},
				files: [
					'public/scripts/{,*/}*.js',
					'public/styles/{,*/}*.css',
					'public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'views/{,*/}*.haml'
				]
			}
		},
		coffee: {
			dist: {
				options: {
					sourcemap: true
				},
				files: [{
					expand: true,
					cwd: 'scripts',
					src: '{,*/}*.coffee',
					dest: 'public/scripts',
					ext: '.js'
				}]
			},
		},
		sass: {
			dist: {
				options: {
					sourcemap: true
				},
				files: {
					'public/styles/main.css': 'styles/main.sass'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'coffee']);
};
