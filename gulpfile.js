const gulp = require('gulp')
const sass = require('gulp-sass')



gulp.task('sass', () => {
 	return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    //Compress Sass
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));

});

gulp.task('sass-compress', function () {
 return gulp.src('./src/sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/compress'));
});

gulp.task('watch', () => {
	 gulp.watch(['./src/sass/**/*.scss'], ['sass']);
      gulp.watch(['./src/sass/**/*.scss'], ['sass-compress']);
})


gulp.task('default', () =>  {
	gulp.start('watch');
});
