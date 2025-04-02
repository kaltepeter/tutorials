import { readFileSync } from "fs";
import { join } from "path";

function getInput(): string {
  return readFileSync(join(__dirname, "..", "..", "input.txt")).toString();
}

function parseLine(line: string): [number, number] {
  const [dir, a] = line.split(" ");
  const amount = +a;

  if (dir === "forward") {
    return [amount, 0];
  } else if (dir === "up") {
    return [0, -amount];
  }
  return [0, amount];
}

const out = getInput()
  .split("\n")
  .map((x) => parseLine(x))
  .reduce(
    (acc, amount) => {
      acc[0] += amount[0];
      acc[1] += amount[1];
      return acc;
    },
    [0, 0]
  );

console.log(out, out[0] * out[1]);
