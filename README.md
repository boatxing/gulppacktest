# gulppacktest
gulp打包测试项目

基于流的构建工具，简单易用，清晰明了
## task
    [] 依赖的任务
    gulp.task('mytask', ['array', 'of', 'task', 'names'], function() {// 做一些事});
    
    gulp.task('jshint', function () {
        return gulp.src('src/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
## react支持
    npm install gulp-babel babel-plugin-transform-react-jsx
    
    var gulp = require('gulp');
    var babel = require('gulp-babel');
    
    gulp.task("babel", function(){
        return gulp.src("src/jsx/*.jsx").
            pipe(babel({
                plugins: ['transform-react-jsx']
            })).
            pipe(gulp.dest("src/js/"));
    });
## 官方插件
    http://gulpjs.com/plugins/
    