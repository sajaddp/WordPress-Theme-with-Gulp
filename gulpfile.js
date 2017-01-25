/* In the Name of GOD */
//gulp --prquire('gulp');
let gulp       = require('gulp');
let concatCss  = require('gulp-concat-css');
let cleanCss   = require('gulp-clean-css');
let concat     = require('gulp-concat');
let sourcemaps = require('gulp-sourcemaps');
let uglify     = require('gulp-uglify');
let imagemin   = require('gulp-imagemin');
/* District Directory */
let distDir = './dist';
gulp.task('css', () =>
{
    return gulp.src([
        './assets/css/bootstrap.min.css', './assets/css/iranian-font.css', './assets/css/style.css'
    ])
        .pipe(concatCss('all.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(`${distDir}/css`));
});
gulp.task('scripts', function ()
{
    return gulp.src([
        './assets/js/jquery.min.js', './assets/js/bootstrap.min.js', './assets/js/custom.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`${distDir}/js`));
});
gulp.task('images', () =>
{
    gulp.src('./assets/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest(`${distDir}/images`));
});
gulp.task('fonts', () =>
{
    gulp.src('./assets/fonts/*.*')
        .pipe(gulp.dest(`${distDir}/fonts`));
});
gulp.task('default', ['css', 'scripts', 'images', 'fonts'], () =>
{
    //    gulp.watch('./assets/css/*.css',['css']);
    //    gulp.watch('./assets/js/*.js',['scripts']);
    //    gulp.watch('./assets/images/**/*.*',['images']);
    //    gulp.watch('./assets/fonts/*.*',['fonts']);
});