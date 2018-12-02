const chalk = require("chalk");
const fs = require("fs");

module.exports = (half = 1) => {
	const input = fs
		.readFileSync("./day1/input", { encoding: "utf-8" })
		.split("\n");

	if (half === 1) {
		let frequency = 0;

		input.forEach(frequencyChange => {
			frequencyChange = parseInt(frequencyChange);
			if (!isNaN(frequencyChange)) {
				frequency += frequencyChange;
			}
		});

		return console.log(chalk.blue(`Frequency: ${frequency}`));
	
	} else if (half === 2) {
		let frequency = 0;
		const frequenciesSeen = [];

		while(true) {
			for(let frequencyChange of input) {
				frequencyChange = parseInt(frequencyChange);
				if (!isNaN(frequencyChange)) {
					frequency += frequencyChange;
					if(frequenciesSeen.indexOf(frequency) === -1) {
						//Not seen yet
						frequenciesSeen.push(frequency);						
					} else {
						//Found the first repeating frequency
						return console.log(chalk.blue(`First repeated frequency: ${frequency}`));
					}
				}
			};
		}
	}
};
