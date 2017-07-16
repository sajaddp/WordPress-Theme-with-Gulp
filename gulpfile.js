/* In the Name of GOD */

let gulp = require ('gulp');
let concatCss = require ('gulp-concat-css');
let concat = require ('gulp-concat');
let sourcemaps = require ('gulp-sourcemaps');
let uglify = require ('gulp-uglify');
let imagemin = require ('gulp-imagemin');
let postcss = require ('gulp-postcss');
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('autoprefixer');

/* District Directory */
let distDir = './dist';

gulp.task ('css', () => {
	let list = [
		'./node_modules/bootstrap/dist/css/bootstrap.min.css',
		'./node_modules/bootstrap-rtl/dist/css/bootstrap-rtl.min.css',
		'./node_modules/font-awesome/css/font-awesome.min.css',
		'./assets/css/iranian-font.css',
		'./assets/css/style.css'
	];
	gulp.src (list, {base: './assets/css'})
		.pipe (concatCss ('all.css',{rebaseUrls:false}))
		.pipe (postcss ([autoprefixer]))
		.pipe (sourcemaps.init (), { loadMaps: true })
		.pipe (cleanCSS())
		.pipe (sourcemaps.write ('.'))
		.pipe (gulp.dest (`${distDir}/css`));
});

gulp.task ('scripts', function () {
	return gulp.src ([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
		'./assets/js/custom.js'
	])
		.pipe (sourcemaps.init ())
		.pipe (concat ('all.js',{rebaseUrls:false}))
		.pipe (uglify ())
		.pipe (sourcemaps.write ('./'))
		.pipe (gulp.dest (`${distDir}/js`));
});

gulp.task ('images', () => {
	gulp.src ('./assets/images/**/*.*')
		.pipe (imagemin ())
		.pipe (gulp.dest (`${distDir}/images`));
});

gulp.task ('fonts', () => {
	gulp.src ([
		'./node_modules/vazir-font/dist/Farsi-Digits/*.*',
		'./node_modules/bootstrap/dist/fonts/*.*',
		'./node_modules/font-awesome/fonts/*.*',
		'./assets/fonts/*.*'
	])
		.pipe (gulp.dest (`${distDir}/fonts`));
});

/** First run gulp copy-css and gulp copry-scripts **/
gulp.task ('default', ['images', 'fonts', 'css', 'scripts'], () => {
	gulp.watch ('./assets/css/*.css', ['css']);
	gulp.watch ('./assets/js/*.js', ['scripts']);
	gulp.watch ('./assets/images/**/*.*', ['images']);
	gulp.watch ('./assets/fonts/*.*', ['fonts']);
});