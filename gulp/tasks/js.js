import webpack from "webpack-stream";
export const js = () => {
    return (
        app.gulp
            .src(app.path.src.js, { sourcemaps: true })
            // .pipe(babel({
            //     presets: ['@babel/preset-env']
            //   }))
            // .pipe(concat("app.js"))
            .pipe(
                webpack({
                    mode: "development",
                    output: {
                        filename: "app.js",
                    },
                })
            )
            .pipe(app.gulp.dest(app.path.build.js))
            .pipe(app.plugins.browserSync.stream())
    );
};
