const fs = require('fs');



let listadoPorHacer = [];


const guardadData = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`dataBase/data.json`, data, (err) => {
        if (err) throw new Erro('No se pudo grabar ', err);
    });

}

const cargarData = () => {

    try {
        listadoPorHacer = require('../dataBase/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

const getListado = () => {

    cargarData();
    return listadoPorHacer;

}
const crear = (descripcion) => {

    cargarData();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardadData();
    return porHacer

}

const actualizar = (descripcion, completado = true) => {
    cargarData();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardadData();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarData();
    let nuevoListdo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListdo.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListdo;
        guardadData();
        return true;
    }
}

module.exports = {
    crear,
    guardadData,
    getListado,
    actualizar,
    borrar
}