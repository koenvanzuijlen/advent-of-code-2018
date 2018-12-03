const chalk = require("chalk");
const fs = require("fs");

module.exports = (half = 1) => {
	const input = fs
		.readFileSync("./day3/input", { encoding: "utf-8" })
		.split("\n");

	if (half === 1) {
		const grid = [];

		const regex = /^#\d+ @ (\d+),(\d+): (\d+)x(\d+)$/;

		input.forEach(areaData => {
			areaData = regex.exec(areaData);
			let x = areaData[1];
			let y = areaData[2];
			const width = areaData[3];
			const height = areaData[4]

			for (let i = 0; i < width; i++) {
				for (let j = 0; j < height; j++) {
					if(!grid[x]) {
						grid[x] = [];
					}
					if(!grid[x][y]) {
						grid[x][y] = 0;
					}
					grid[x][y]++;
					y++;
				}
				x++;
				y = areaData[2];
			}
		});


		let takenMultipleTimes = 0;
		grid.forEach(row => {
			row.forEach(inch => {
				if(inch > 1) {
					takenMultipleTimes++;
				}
			});
		});

		console.log(
			chalk.blue(
				`Squares of fabric with multiple claims: ${takenMultipleTimes}`,
			),
		);
	} else if (half === 2) {
	}
};
