// function tarea( done ) {
//     console.log('Mi primera tarea');

//     done(); //! Callback para finalizar la funcion
// }

// exports.tarea = tarea; //! se llama a la funcion para luego ejecutarla con npx gulp <nombre de la funcion>

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css( done ) {
    
    //! src identifica el archivo y luego ejecuta los pipes
    src('src/scss/**/*.scss') //! Identificar archivo de sass
        .pipe(plumber())
        .pipe(sass()) //! Compilarlo
        .pipe(dest('build/css')) //! Almacenar en el disco duro

    done();
}

function dev( done ) {

    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;