const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'

};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {

    argv
}