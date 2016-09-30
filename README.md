# gulppacktest
gulp打包测试项目

基于流的构建工具，简单易用，清晰明了
## task
    gulp.task('jshint', function () {
        return gulp.src('src/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
## react
    var gulp = require('gulp');
    var react = require('gulp-react');
     
    gulp.task('default', function () {
        return gulp.src('template.jsx')
            .pipe(react())
            .pipe(gulp.dest('dist'));
    });
    