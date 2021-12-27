export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        ghostMode: { clicks: false, scroll: false, },
        notify: false,
        online: true,
    });
}