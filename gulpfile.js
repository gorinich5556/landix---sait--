//Основний модуль
import gulp from "gulp";
//Імпорт шляхів
import { path } from "./gulp/config/path.js";
//Імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

//Передаємо значення в глобальну змінну
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: process.argv.includes("--dev"),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";



//Наблюдач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}  

export { svgSprive }

//Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//Основні задачі
const mainTasks =  gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, svgSprive))

//Побудова сценаріїв виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

// Експорт сценаріїв
export { dev }
export { build }
export { deployZip }

//Виконання сценарію за замовчуванням
gulp.task("default", dev);