const chalk = require("chalk");
const fs = require("fs");

console.log(chalk.bold.magenta("Advent of Code 2018 by koenvanzuijlen"));

if (!process.argv[2]) {
	return console.log(
		chalk.red("Please enter the day and half you wish to run, for example 3-1"),
	);
}

const argParts = process.argv[2].split("-");
const day = parseInt(argParts[0]);
const half = parseInt(argParts[1]);
if (isNaN(day) || [1, 2].indexOf(half) === -1) {
	return console.log(chalk.red("Invalid argument"));
}
if (!fs.existsSync(`./day${day}/index.js`)) {
	return console.log(chalk.red("This half and/or day aren't available (yet)"));
}

console.log(chalk.green(`Solving half ${half} of day ${day}`));
const dayScript = require(`./day${day}`);
dayScript(half);