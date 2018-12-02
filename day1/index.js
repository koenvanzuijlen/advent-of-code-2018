const chalk = require("chalk");
const fs = require("fs");

module.exports = () => {
	let frequency = 0;

	const input = fs
		.readFileSync("./day1/input", { encoding: "utf-8" })
		.split("\n");

	input.forEach(frequencyChange => {
		frequencyChange = parseInt(frequencyChange);
		if (!isNaN(frequencyChange)) {
			frequency += frequencyChange;
		}
	});

	console.log(chalk.blue(`Frequency: ${frequency}`));
};
