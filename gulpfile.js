var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// Serve tasks
gulp.task('serve', function() {
    browserSync.init({
        server: './',
        port: 8080
    });

    gulp.watch('./master.html').on('change', browserSync.reload);
    gulp.watch('./css/style.css').on('change', browserSync.reload);
});