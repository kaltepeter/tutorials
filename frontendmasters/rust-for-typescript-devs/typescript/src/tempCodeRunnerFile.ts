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