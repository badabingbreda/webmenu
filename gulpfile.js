// Gulp v4.0 syntax

var
	pkg = require('./package.json'),
	gulp = require('gulp'),

    // use plumber to replace standard onerror handler
    plumber = require('gulp-plumber'),

    // less preporcessor to css
	less = require('gulp-less'),

    // do some path magic
	path = require('path'),

    // add a header to the output
    header = require('gulp-header'),

    // rename the dest file
    rename = require('gulp-rename'),

    // shorten js output
    uglify = require('gulp-uglify'),

    // minify css
    cleancss = require('gulp-clean-css'),

    // minify html
    htmlmin = require('gulp-htmlmin');

    // add livereload to see changes instantly (need to add js to page-source)
    livereload =  require('gulp-livereload'),

    banner = ['/*!',
            ' * Webmenu v<%= pkg.version %>',
            ' * (c) <%= new Date().getFullYear() %> <%= pkg.author.name %>',
            ' * licensed under <%= pkg.licenses[0].type %>',
            ' */',
            ''].join('\n');

var
    STYLES_PATHS    = [ './dev/less/**/*.less' ],
    SCRIPT_PATHS    = [ './dev/js/**/*.js' ];
    HTML_PATHS      = [ './dev/indexnew.html' ];


gulp.task('less', function () {
 return gulp.src(STYLES_PATHS)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(plumber())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./dev/css'))
    .pipe(cleancss({compatibility: '*'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dev/css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src(SCRIPT_PATHS)
    .pipe(plumber())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(uglify({preserveComments: 'some'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});

gulp.task('html', function() {
    return gulp.src(HTML_PATHS)
    .pipe(plumber())
    .pipe(rename('./dist/index.html'))
    .pipe(gulp.dest('./'))
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, removeScriptTypeAttributes:true}))
    .pipe(rename('./dist/indexmin.html'))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('watch', function() {

	// gulp v3 notation
	//gulp.watch(['*.js', '*.less'], ['js', 'less']);

    // gulp v4 notation
	gulp.watch(SCRIPT_PATHS, gulp.parallel('js'));
	gulp.watch(STYLES_PATHS, gulp.parallel('less'));
    gulp.watch(HTML_PATHS, gulp.parallel('html'));

});

gulp.task( 'startserver' , function() {
    // gulp v4
    require( './server.js' );
    livereload.listen();
});

gulp.task( 'default', gulp.parallel( 'startserver', 'watch' ) );

gulp.task( 'update', gulp.parallel( 'js','less','html' ) );
