const fs = require('fs');
const colors = require('colors');

const createFile = (base, listar = false, hasta, callback) => {

        return new Promise((resolve, reject) => {
            let salida = ' ';

            for (let index = 1; index <= hasta; index++) {
                salida += `${base} x  ${index} = ${base * index}\n`

            }

            if (base === 0) {

                reject('No puede multiplicar por 0')
            }

            if (listar) {
                console.log(colors.red('================='));
                console.log(`Tabla del ${base}`);
                console.log(colors.red('================='));

                console.log(salida);
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla del ${base} creado`);
        })
    }
    // const createFile = async(base) => {

//     try{ 
//         console.log('=================');
//         console.log(`Tabla del ${base}`);
//         console.log('=================');

//         let salida = ' ';

//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base * index}\n`
//         }

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         return `tabla-${base}.txt`;
//     }catch (err){
//         console.log(err);
//     } 

// }

module.exports = {
    createFile
}