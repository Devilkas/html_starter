import iconfont from "gulp-iconfont";
import iconfontCss from "gulp-iconfont-css";

export const svgIconFont = () => {
    let fontName = 'icons';
    let runTimestamp = Math.round(Date.now() / 1000);

    return app.gulp.src(app.path.src.svgicons, {})
        .pipe(iconfontCss({
            fontName: fontName,
            path: `${app.path.srcFolder}/styles/templates/_icons.scss`,
            targetPath: `../../styles/_iconsfont.scss`,
            fontPath: `../fonts/iconfont/`
        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['eot', 'woff', 'woff2', 'ttf', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp,
        }))

        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/iconfont`))
}
