//requireds
//const fs = require('fs');
const argv = require('./Config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(archivo => console.log(`${archivo}`))
            .catch(e => { console.log(e); })
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(Mensaje => console.log(`Archivo creado: ${Mensaje.green}`))
            .catch(e => { console.log(e); })
            // console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(argv.base);


// crearArchivo(base).then(archivo => console.log(`${archivo}`))
// .catch(e => { console.log(e); })

// let operacion = async(base, num) => {
//     return (base * num);
// }
// let multiplica = async(base) => {
//     console.log(base);
//     let salto = '';
//     for (let i = 1; i < 11; i++) {
//         let multi = await operacion(base, i);
//         salto += `${base} X ${i} = ${multi} \n`;
//     }
//     return salto;
// }



// multiplica(bas).then(mensaje => {
//     fs.writeFile(`tablas/tabla-${bas}.txt`, mensaje, (err) => {
//         if (err) throw err;
//         console.log('El archivo tabla-2 ha sido creado');
//     });
// })