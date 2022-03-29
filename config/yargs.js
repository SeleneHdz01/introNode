const { number, options, boolean } = require('yargs');

const argv = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: number,
            demandOption: true,
            describe: 'Base de la tabla a multiplicar'
        })
    .option(
        'l', {
            alias: 'listar',
            type: boolean,
            demandOption: false,
            describe: 'Lista en consola la tabla de multiplicar'
        }
    )
    .option(
        'h', {
            alias: 'hasta',
            type: number,
            demandOption: true,
            describe: 'Define hasta que número multiplicar'
        }
    )
    .check((argv, options) => {

        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número'
        }
        return true;
        // console.log('yargs', argv);
    })
    .argv;


console.clear();

// console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base, argv.l);

// const [,,arg3 = 'base=9'] = process.argv;
// const [,base = 9] = arg3.split('='); 

// console.log(base);

// const base = 0;

module.exports = argv;