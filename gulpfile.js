// Gulp v4.0 syntax

var
	pkg = require('./package.json'),
	gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    replace = require('gulp-replace'),
    banner = ['/*!',
            ' * Webmenu v<%= pkg.version %>',
            ' * (c) <%= new Date().getFullYear() %> <%= pkg.author.name %>',
            ' * licensed under <%= pkg.licenses[0].type %>',
            ' */',
            ''].join('\n');

gulp.task('less', function () {
 return gulp.src('./dev/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(plumber())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  return gulp.src('./dev/js/*.js')
    .pipe(plumber())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(uglify({preserveComments: 'some'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {

	// gulp v3 notation
	//gulp.watch(['*.js', '*.less'], ['js', 'less']);

	// gulp v4
	gulp.watch('./dev/js/**/*.js', gulp.parallel('js'));
	gulp.watch('./dev/less/**/*.less', gulp.parallel('less'));
});

gulp.task( 'default', gulp.series( gulp.parallel( 'js', 'less' ), 'watch' ) );
