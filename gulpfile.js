// function tarea( done ) {
//     console.log('Mi primera tarea');

//     done(); //! Callback para finalizar la funcion
// }

// exports.tarea = tarea; //! se llama a la funcion para luego ejecutarla con npx gulp <nombre de la funcion>

const { src, dest, watch, parallel } = require('gulp');

//! CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//! Imagenes
const webp = require('gulp-webp');

function css( done ) {
    
    //! src identifica el archivo y luego ejecuta los pipes
    src('src/scss/**/*.scss') //! Identificar archivo de sass
        .pipe(plumber()) //! Previene que la ejecucion de gulp se detenga a causa de errores
        .pipe(sass()) //! Compilarlo
        .pipe(dest('build/css')) //! Almacenar en el disco duro

    done();
}

function versionWebp( done ) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )

    done();
}

function dev( done ) {

    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);