import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import autoPrefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp
        .src(app.path.src.scss, { sourcemaps: true })
        .pipe(sass())
        .pipe(
            autoPrefixer({
                grid: true,
                cascade: true,
                overrideBrowsersList: ["last 3 versions"],
            })
        )
        .pipe(
            rename({
                extname: ".css",
            })
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
};
export const scssWatch = () => {
    return app.gulp
        .src(app.path.watch.appScss, { sourcemaps: true })
        .pipe(sass())
        .pipe(
            autoPrefixer({
                grid: true,
                cascade: true,
                overrideBrowsersList: ["last 3 versions"],
            })
        )
        .pipe(
            rename({
                extname: ".css",
            })
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
};
