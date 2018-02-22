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
    livereload =  require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    replace = require('gulp-replace'),
    banner = ['/*!',
            ' * Webmenu v<%= pkg.version %>',
            ' * (c) <%= new Date().getFullYear() %> <%= pkg.author.name %>',
            ' * licensed under <%= pkg.licenses[0].type %>',
            ' */',
            ''].join('\n');

var
    STYLES_PATHS = [ './dev/less/**/*.less' ],
    SCRIPT_PATHS = [ './dev/js/**/*.js' ];


gulp.task('less', function () {
 return gulp.src(STYLES_PATHS)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(plumber())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src(SCRIPT_PATHS)
    .pipe(plumber())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(uglify({preserveComments: 'some'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

gulp.task('watch', function() {

	// gulp v3 notation
	//gulp.watch(['*.js', '*.less'], ['js', 'less']);

	// gulp v4
    require( './server.js' );
    livereload.listen();
	gulp.watch(SCRIPT_PATHS, gulp.parallel('js'));
	gulp.watch(STYLES_PATHS, gulp.parallel('less'));

});

gulp.task( 'default', gulp.series( gulp.parallel( 'js', 'less' ), 'watch' ) );
