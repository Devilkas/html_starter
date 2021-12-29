// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./${rootFolder}`;
const srcFolder = `./src`;

export const path = {
    build: { //Объект пути с результатом 
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: { //Объект пути с исходным файлом
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        favicon: `${srcFolder}/img/favicon.ico`,
        styles: `${srcFolder}/styles/app.sass`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        fontsIcon: `${srcFolder}/fonts/iconfont/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: { //Отдельные пути к файлам и папки за которыми следить
        js: `${srcFolder}/js/**/*.js`,
        styles: `${srcFolder}/styles/**/*.sass`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}