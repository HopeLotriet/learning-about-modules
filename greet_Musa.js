import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Musa'));
console.log(styledMessage);