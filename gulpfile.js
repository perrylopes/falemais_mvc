const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch');
const server = require('gulp-webserver');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('app', ['html', 'styl', 'js']);

gulp.task('html', ()=>{
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))   
        .pipe(gulp.dest('public'))

});

gulp.task('styl', ()=>{
    return gulp.src('src/**/*.styl')
        .pipe(stylus())
        .pipe(uglifycss({'uglifyComments': true}))
        .pipe(concat('app.min.css'))   
        .pipe(gulp.dest('public/css'))
});

gulp.task('js', () => {
    gulp.src('src/js/calculoCtrl.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./public/js'))
});
//gulp.task('js', ()=>{
//    return gulp.src('src/**/*.js')
//        .pipe(babel({presets:['env']}))
//        .pipe(uglify())
//        .pipe(concat('app.min.js'))   
//        .pipe(gulp.dest('public/js'))
//});

gulp.task('watch', ()=>{
    watch('src/**/*.html', ()=> gulp.start('html'))
    watch('src/**/*.styl', ()=> gulp.start('styl'))
    watch('src/**/*.js', ()=> gulp.start('js'))
    

});

gulp.task('server',['watch'], ()=>{
    return gulp.src('public').pipe(server({
        livereload: true,
        port: 3000,
        open: true
    }))
})

gulp.task('default',()=>{
    if(util.env.production){
        sequence('app');
    } else{
        sequence('app', 'server')
    }

})