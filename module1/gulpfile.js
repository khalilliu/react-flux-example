'use strict'

var gulp  = require('gulp');
var connect = require('gulp-connect'); //run a local dev server
var open = require('gulp-open'); //open a url in browser

var config = {
	post: 8080,
	devBaseUrl: 'http://localhost',
	paths:{
		html: './src/*.html',
		dist: './dist'
	}
}

// start a dev server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		post: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

//open and read html then pipe it to the port
gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({ url: config.devBaseUrl + ':' + config.port + '/' }))
})

//read html then pipe to the root dest folder
gulp.task('html',function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
})

//watch the file change
gulp.task('watch',function(){
	gulp.watch(config.paths.html,['html'])
})

gulp.task('default',['html','open','watch']);