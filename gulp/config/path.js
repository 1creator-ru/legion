import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets/images/`,
    },
    src: {
        js: `${srcFolder}/assets/js/*.js`,
        scss: `${srcFolder}/assets/scss/*.scss`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/images/*.*`,
    },
    watch: {
        js: `${srcFolder}/assets/js/*.js`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/images/*.*`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
}