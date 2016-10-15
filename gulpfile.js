var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var cached = require('gulp-cached');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imgmin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync');


var htmlSrc = 'src/*.html';
var htmlDist = 'dist';
var sassSrc = 'src/style/**/*.scss';
var cssDist = 'dist/css';
var cssLibsSrc = 'src/style/libs/*.css';
var cssLibsDist = 'dist/css/libs';
var jsSrc = 'src/js/**/*.js';
var jsDist = 'dist/js';
var jsLibsSrc = 'src/js/libs/*.js';
var jsLibsDist = 'dist/js/libs';
var imgSrc = ['src/img/**/*.{jpg,jpeg,png,gif}', '!src/img/background/*.png'];
var imgDist = 'dist/img';
var spriteSrc = 'src/img/background/*.png';
var spriteDist = 'dist/img/background';


// 清除文件夹内容
gulp.task('clean', function() {
    del('dist');
});


// HTML压缩
gulp.task('html', function() {
    gulp.src(htmlSrc)
        .pipe(htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest(htmlDist));
});


// Sass编译 压缩
gulp.task('css', function() {
    gulp.src(sassSrc)
        .pipe(cached('css'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest(cssDist))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(cssnano({
            zindex: false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.reload({
            stream: true,
        }));
});


// 第三方Css引入
gulp.task('cssLibs', function() {
    gulp.src(cssLibsSrc)
        .pipe(gulp.dest(cssLibsDist));
})


// JavaScript压缩 合并
gulp.task('js', function() {
    gulp.src(jsSrc)
        .pipe(cached('js'))
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(jsDist));
});


// 第三方JavaScript引入
gulp.task('jsLibs', function() {
    gulp.src(jsLibsSrc)
        .pipe(gulp.dest(jsLibsDist));
})


// 图片压缩
gulp.task('img', function() {
    gulp.src(imgSrc)
        .pipe(cached('img'))
        .pipe(imgmin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest(imgDist));
});


// CSS Sprite生成
gulp.task('sprite', function() {
    gulp.src(spriteSrc)
        .pipe(imgmin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
        }))
        .pipe(gulp.dest(spriteDist));
});



gulp.task('default', function() {
    runSequence('img', 'css', 'cssLibs', 'js', 'jsLibs', 'html',
        function() {
            browserSync.init({
                server: {
                    baseDir: 'dist',
                }
            });
            gulp.watch(htmlSrc, ['html']);
            gulp.watch(sassSrc, ['css']);
            gulp.watch(jsSrc, ['js']);
            gulp.watch(['dist/**/*', '!dist/css/**/*']).on('change', browserSync.reload);
        });
});
