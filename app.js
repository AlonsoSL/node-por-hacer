//const argv = require = ('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;

const { getListado } = require('./por-hacer/por-hacer');
const porhacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porhacer.getListado();
        for (let tarea of listado) {
            console.log('==========================='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('==========================='.green);

        }
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porhacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('çomando no reconocido');
}