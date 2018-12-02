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
				`Box ID Checksum: ${boxesWithDoubleLetters * boxesWithTripleLetters}`,
			),
		);
	} else if (half === 2) {
		const idLength = input[0].length;
		let matchingChars;
		input.find(input1 => {
			return input.find(input2 => {
				let count = 0;
				let differentChars = 0;
				matchingChars = [];
				while(count < idLength) {
					if(input1.charAt(count) !== input2.charAt(count)) {
						differentChars++;
						if(differentChars > 1) {
							return false;
						}
					} else {						
						matchingChars.push(input1.charAt(count));
					}
					count++;
				}
				if(differentChars === 1) {
					console.log(input1);
					console.log(input2);
				}
				return differentChars === 1;
			});
		});

		console.log(chalk.blue(`Correct Box ID letters: ${matchingChars.join("")}`));
	}
};
