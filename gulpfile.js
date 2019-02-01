const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug-compile', ()=>{
  return gulp.src(['app/pug/**/*.pug', '!app/pug/includes/**/*.pug'])
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest('app/html'))
});

gulp.task('watch',()=>{
  gulp.watch('app/pug/**/*.pug', gulp.series('pug-compile'))
});
