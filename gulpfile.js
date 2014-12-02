var debug = require ( 'gulp-debug' );
var gulp = require ( 'gulp' );
var less = require ( 'gulp-less' );
var watchLess = require ( 'gulp-watch-less' );

gulp.task ( 'dev-watch', function () {
  // main.less just imports child less files
  gulp.src ( './app/styles/less/main.less' )
    .pipe ( watchLess ( './app/styles/less/main.less', function (files) {
      return files.pipe ( debug () )
    .pipe ( less () )
    .pipe ( gulp.dest ( './app/styles' ) );
    } ) )
    
  ;
});
