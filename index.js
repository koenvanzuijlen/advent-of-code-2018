const chalk = require("chalk");
const fs = require("fs");

console.log(chalk.bold.magenta("Advent of Code 2018 by koenvanzuijlen"));

if (!process.argv[2]) {
	return console.log(chalk.red("Please enter the day you wish to run"));
}

const day = parseInt(process.argv[2]);
if (!fs.existsSync(`./day${day}/index.js`)) {
	return console.log(chalk.red("Invalid day"));
}

console.log(chalk.green(`Solving day ${day}`));
const dayScript = require(`./day${day}`);
dayScript();
