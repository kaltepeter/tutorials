import { readFileSync } from "fs";
import { join } from "path";

function getInput(): string {
    return readFileSync(join(__dirname, "..", "..", "fissures.txt")).toString();
  }

type Point = {
    x: number,
    y: number
}

type Line = {
    p1: Point,
    p2: Point
}

function isHOrV({p1, p2}: Line) {
    return p1.x === p2.x || p1.y === p2.y
}

function parsePoint(p: string) {
    const [x,y] = p.split(',');
    return {
        x: +x,
        y: +y
    }
}

function parseLine(p: string) {
    const [p1, p2] = p.split(' ->');
    return {
        p1: parsePoint(p1),
        p2: parsePoint(p2)
    }
}

const lines = getInput().split("\n")
    .map(x => parseLine(x))
    .filter(isHOrV);

console.log(lines)