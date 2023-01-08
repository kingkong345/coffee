import gulp from "gulp";
import { deleteSync } from "del";
import ws from "gulp-webserver";
import gulpimage from "gulp-image";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import concat from "gulp-concat";
import inject from "gulp-inject";
import path from "path";

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
  lib: {
    src: "src/lib/**/*.js",
    dest: "build/js",
  },
  js: {
    watch: "src/js/**/*.js",
    src: "src/js/**/*.js",
    dest: "build/js",
  },
  css: {
    src: "src/css/**/*.css",
    dest: "build/css",
  },
};

/**
 * HTML을 src => build로 폴더 이동
 * task1. js, css를 inject 모듈을 이용하여 html 내부 안에 link,style 삽입
 * @returns gulp
 */
const html = () => {
  return gulp
    .src(routes.html.src)
    .pipe(inject(gulp.src(["./build/js/libs.js"], { read: false }), { ignorePath: "build/", name: "lib" }))
    .pipe(inject(gulp.src(["./build/js/*.js", "./build/css/*.css", "!./build/js/libs.js"], { read: false }), { ignorePath: "build/" }))
    .pipe(gulp.dest(routes.html.dest));
};

const js = () => {
  return gulp.src(routes.js.src).pipe(gulp.dest(routes.js.dest));
};
const css = () => {
  return gulp.src(routes.css.src).pipe(gulp.dest(routes.css.dest));
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
  gulp.watch(routes.js.watch, js);
};

const concatLibJs = () => gulp.src(routes.lib.src).pipe(concat("libs.js")).pipe(gulp.dest(routes.lib.dest));

// const injects = () => {
//   return gulp
//     .src("./build/index.html")
//     .pipe(inject(gulp.src(["./build/js/*.js", "./build/css/*.css"], { read: false }), { ignorePath: "build/" }))
//     .pipe(gulp.dest(routes.html.dest));
// };

const prepare = gulp.series([clean, image, concatLibJs]);

const assets = gulp.series([style, css, js, html]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);
