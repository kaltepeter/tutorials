fn get_input(file_path: &str) -> String {
    return std::fs::read_to_string(file_path).expect("Should have been able to read the file");
}

#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn parse_line(line: &str) -> Point {
    let (dir, amount) = line.split_once(" ").expect("must contain a whitespace");
    let amount = str::parse::<i32>(amount).expect("second arg must be an int");

    if dir == "forward" {
        return Point { x: amount, y: 0 };
    } else if dir == "up" {
        return Point { x: 0, y: -amount };
    }
    return Point { x: 0, y: amount };
}

fn main() {
    let result = get_input("../../../input.txt").lines()
    .map(parse_line)
    .fold(Point {x: 0, y: 0}, |mut acc, point| {
        acc.x += point.x;
        acc.y += point.y;
        return acc;
    });

    println!("{:?}, {}", result, result.x*result.y)
}
