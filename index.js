import chalk from 'chalk';
import figlet from 'figlet';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Sbu'));
console.log(styledMessage);


figlet("Hello Musawenkosi!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});