module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					sourcemap: true
				},
				files: {
					'public/css/main.css': 'sass/main.sass'
				}
			}
		},

		watch: {
			sass: {
				files: ['sass/**/*'],
				tasks: ['sass']
			},
			livereload: {
				options: {livereload: true},
				files: ['public/**/*', 'views/**/*']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass']);
};
