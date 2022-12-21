import gulp from "gulp";
import { deleteSync } from "del";
// import sass from "gulp-sass";
// import webserver from "gulp-webserver";

const routes = {
  html: {
    watch: "src/**/*.html",
    src: "src/*.html",
    dest: "build/",
  },
};

const html = () => {
  return gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));
};

/*
 * @note del의 deleteSync 함수를 통해 build 폴더 삭제 후, cb를 호출하여, gulp에게 종료 시점을 전달한다.
 */
const clean = (cb) => {
  deleteSync(["build/"]);
  cb();
};

// const watch = () => {
//   gulp.watch(routes.html.watch, html);
// };

// const prepare = gulp.series([clean]);

// const assets = gulp.series([html]);

// const postDev = gulp.series([webserver, watch]);

export const dev = gulp.series([clean, html]);
