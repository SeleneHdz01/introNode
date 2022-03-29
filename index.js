const fs = require('fs');
const { isSet } = require('util/types');
const { createFile } = require('../introNode/multiplicar')
const argv = require('./config/yargs');

createFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(nameFile, 'creado'))
    .catch(err => console.log(err));