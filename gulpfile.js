import gulp from "gulp";
import { deleteSync } from "del";
import ws from "gulp-webserver";
import gulpimage from "gulp-image";
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

const routes = {
  html: {
    watch: "src/**/*.html",
    src: "src/*.html",
    dest: "build",
  },
  img: {
    src: "src/images/**/*",
    dest: "build/images",
  },
  sass: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/style.scss",
    dest: "build/css",
  },
};

const html = () => {
  return gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));
};

const image = () => gulp.src(routes.img.src).pipe(gulp.dest(routes.img.dest));

const style = () =>
  gulp
    .src(routes.sass.src)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(routes.sass.dest));
/*
 * @note del의 deleteSync 함수를 통해 build 폴더 삭제 후, cb를 호출하여, gulp에게 종료 시점을 전달한다.
 */

const clean = (cb) => {
  deleteSync(["build"]);
  cb();
};

const webserver = () => gulp.src("build").pipe(ws({ port: 5500, livereload: true, open: true }));

const watch = () => {
  gulp.watch(routes.html.watch, html);
  gulp.watch(routes.sass.watch, style);
};

const prepare = gulp.series([clean, image]);

const assets = gulp.series([html, style]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);
