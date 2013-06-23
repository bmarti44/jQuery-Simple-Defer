/**
 * 
 * @param {Object} grunt Instacne of the grunt build tool
 * @author Brian Martin https://twitter.com/bmarti44
 */
module.exports = function (grunt) {
	'use strict';
	
	grunt.initConfig({
		jshint: {
			// these are the files to lint
			all: [
				'Gruntfile.js',
				'jquery-simple-defer.js'
			],
			// these are the JSHint options (more info here http://www.jshint.com/docs/)
			options: {
				passfail: false,	// 'false' means JSHint will not fail after the first error
				maxerr: 100,		// max errors allowed before JSHint will stop scanning
				predef: [],			// predefine extra globals here
				browser: true,		// defines global browser objects since this code is intended to run in browser
				devel: true,		// allows 'console.log' usage, set to false for PROD
				asi: false,			// 'false' enforces semi-colon usage
				curly: true,		// all blocks must use curly braces
				eqeqeq: true,		// require strict comparisons ('===' and '!==')
				eqnull: true,		// suppress '=== null' warnings as this is sometimes useful
				evil: false,		// don't allow eval()
				immed: true,		// immediately invoked functions ((function () {})()) must be wrapped in parens
				latedef: false,		// don't allow variable usage before definition (strict mode doesn't allow this)
				noempty: true,		// no empty code blocks
				onevar: true,		// require single 'var' keyword usage per function
				trailing: false,	// if false, do not allow trailing white space on lines
				laxbreak: true,		// relaxes line breaking on string concatenation (minification will take care of this for PROD)
				smarttabs: true,	// allows mixed spaces+tabs in certain situations (eg. for formatting alignment on complex string concats)
				indent: 4			// set indentation (by tab) width at 4 spaces
			}
		},
		min: {
			js: {
				src: 'jquery-simple-defer.js',
				dest: 'jquery-simple-defer.min.js'
			}
		},
		watch: {
			javascript: {
				files: ['!components/**/*.js', '!node_modules/**/*.js', '**/*.js'],
				tasks: ['jshint', 'min']
			}
		}
	});

	// Grunt tasks that this project depends on
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-yui-compressor');		// provides 'min' and 'cssmin' tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');		// used for checking code quality (similar to JSLint)
	
	grunt.registerTask('default', ['jshint', 'min', 'watch']);
};