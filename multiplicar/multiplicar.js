//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`La base ${base} no es un número, favor de validar`);
            return;
        }
        data = `\n`;
        data += `===============================\n`;
        data += `==========Tabla de ${base}==========\n`;
        data += `===============================\n`;
        for (let i = 1; i <= limite; i++) {
            let op = base * i;
            data += `${base} * ${i} = ${op} \n`;
        }
        resolve(data.green);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`La base ${base} no es un número, favor de validar`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base}*${i} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt `);

        });
    });
}



module.exports = {
    crearArchivo,
    listarTabla
}