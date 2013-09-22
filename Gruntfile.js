'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			coffee: {
				files: ['coffee/{,*}*.coffee'],
				tasks: ['coffee']
			},
			sass: {
				files: ['sass/{,*/}*.sass'],
				tasks: ['sass']
			},
			livereload: {
				options: {livereload: true},
				files: [
					'public/css/{,*/}*.css',
					'public/js/{,*/}*.js',
					'public/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
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
					cwd: 'coffee',
					src: '{,*/}*.coffee',
					dest: 'public/js',
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
					'public/css/main.css': 'sass/main.sass'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'coffee']);
};
