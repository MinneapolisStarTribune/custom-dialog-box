var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function(){
    gulp.src('./customDialogBox.js')
        .pipe(uglify())
        .pipe(rename('customDialogBox.min.js'))
        .pipe(gulp.dest('./build'));
        
    gulp.src('./customDialogBox.css')
        .pipe(gulp.dest('./build'));
});