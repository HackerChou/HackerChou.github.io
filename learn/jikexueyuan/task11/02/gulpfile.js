'use strict'
const gulp = require('gulp');
const less = require('gulp-less');

// 定义gulp default
gulp.task('default', function () {
    console.log('请输入gulp的运行参数, 格式为：gulp 参数');
    console.log('"release"\t直接输出，直接将./css/目录下的less文件编译输为style.css');
    console.log('"dev"\t\t开发使用，观察./css/目录下的less文件，如果有变化则输出为style.css');
});

// 开发状态下的gulp工作流
gulp.task('dev', function () {
    gulp.watch('*.less', ['release']);
});

gulp.task('release', function () {
    console.log('start to compile less file...');
    gulp.src('style.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
    console.log('less file compile complete...');
});