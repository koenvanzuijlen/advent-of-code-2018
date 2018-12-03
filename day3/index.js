const chalk = require("chalk");
const fs = require("fs");

module.exports = (half = 1) => {
	const input = fs
		.readFileSync("./day3/input", { encoding: "utf-8" })
		.split("\n");

	const grid = [];
	const areaDataRegex = /^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/;
	const areaDataParsed = [];

	//Parse input with regex to separate relevant fields
	input.forEach(areaData => {
		areaData = areaDataRegex.exec(areaData);
		areaDataParsed.push({
			id: areaData[1],
			x: areaData[2],
			y: areaData[3],
			width: areaData[4],
			height: areaData[5],
		});
	});

	//Build grid with number of times each square is claimed
	areaDataParsed.forEach(areaData => {
		let x = areaData.x;
		let y = areaData.y;

		for (let i = 0; i < areaData.width; i++) {
			for (let j = 0; j < areaData.height; j++) {
				if (!grid[x]) {
					grid[x] = [];
				}
				if (!grid[x][y]) {
					grid[x][y] = 0;
				}
				grid[x][y]++;
				y++;
			}
			x++;
			y = areaData.y;
		}
	});

	if (half === 1) {
		//Count how many squares are claimed more than once
		let takenMultipleTimes = 0;
		grid.forEach(row => {
			row.forEach(inch => {
				if (inch > 1) {
					takenMultipleTimes++;
				}
			});
		});

		return console.log(
			chalk.blue(
				`Squares of fabric with multiple claims: ${takenMultipleTimes}`,
			),
		);
	} else if (half === 2) {
		//Find which claimed area doesn't overlap with any other
		const area = areaDataParsed.find(areaData => {
			let x = areaData.x;
			let y = areaData.y;

			for (let i = 0; i < areaData.width; i++) {
				for (let j = 0; j < areaData.height; j++) {
					if (grid[x][y] !== 1) {
						return false;
					}
					y++;
				}
				x++;
				y = areaData.y;
			}

			return true;
		});

		return console.log(chalk.blue(`Claimed area without overlaps: ${area.id}`));
	}
};
