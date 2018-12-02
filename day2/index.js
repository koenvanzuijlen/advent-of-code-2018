const chalk = require("chalk");
const fs = require("fs");

module.exports = (half = 1) => {
	const input = fs
		.readFileSync("./day2/input", { encoding: "utf-8" })
		.split("\n");

	if (half === 1) {
		let boxesWithDoubleLetters = 0;
		let boxesWithTripleLetters = 0;

		input.forEach(boxId => {
			const chars = {};
			[...boxId].forEach(char => {
				if (!chars[char]) {
					chars[char] = 0;
				}
				chars[char]++;
			});

			let hasDoubleLetter = false;
			let hasTripleLetter = false;
			for (char in chars) {
				hasDoubleLetter = hasDoubleLetter || chars[char] === 2;
				hasTripleLetter = hasTripleLetter || chars[char] === 3;
				if (hasDoubleLetter && hasTripleLetter) {
					break;
				}
			}

			boxesWithDoubleLetters += hasDoubleLetter ? 1 : 0;
			boxesWithTripleLetters += hasTripleLetter ? 1 : 0;
		});

		return console.log(
			chalk.blue(
				`Checksum: ${boxesWithDoubleLetters * boxesWithTripleLetters}`,
			),
		);
	} else if (half === 2) {
	}
};
