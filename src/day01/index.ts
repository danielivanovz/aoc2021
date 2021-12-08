import run from "aocrunner";
import { EOL } from "os";

const parseInput = (rawInput: string) => rawInput;

const window = (n: number[], i: number) =>
  parseInt([n[i], n[i + 1], n[i + 2]].reduce((a, c) => a + c).toString(), 10);

const part1 = (rawInput: string) => {
  return parseInput(rawInput)
    .split(EOL)
    .map((n) => parseInt(n, 10))
    .filter((v, i, a) => v > a[i - 1]).length;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split(EOL)
    .map((n: string) => parseInt(n, 10))

	return input.reduce((a, c, i) => {
		if (window(input, i) < window(input, i + 1)){
			a = a + 1;
		}
		return a;
	});
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
