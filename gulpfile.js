import gulp from 'gulp';

// config imports
import { path } from './gulp/config/path.js';

// tasks imports
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { plugins } from './gulp/config/plugins.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
 
global.app = {
    path,
    gulp,
    plugins,
}

function watcher() {
    gulp.watch(path.watch.assets, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}

const dev = gulp.series(
    reset, 
    gulp.parallel(copy, html, scss, js), 
    gulp.parallel(watcher, server))

gulp.task('default', dev);