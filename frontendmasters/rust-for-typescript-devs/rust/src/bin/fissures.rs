use anyhow::{anyhow, Result, Context};
use std::str::FromStr;

fn get_input(file_path: &str) -> String {
    return std::fs::read_to_string(file_path).expect("Should have been able to read the file");
}

#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

#[derive(Debug)]
struct Line {
    p1: Point,
    p2: Point,
}

impl FromStr for Point {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self> {
        let result = s.split_once(",");
        if result.is_none() {
            return Err(anyhow!("expected a point to contain a comma"));
        }
        let (x, y) = result.unwrap();
        let x: i32 = str::parse(x)?;
        let y: i32 = str::parse(y)?;

        return Ok(Point { x, y });
    }
}

impl FromStr for Line {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self> {
        let result = s.split_once(" -> ");

        if result.is_none() {
            return Err(anyhow!("expected a line to contain ->"));
        }
        let (p1, p2) = result.unwrap();
        let p1 = str::parse(p1)?;
        let p2 = str::parse(p2)?;

        return Ok(Line { p1, p2 });
    }
}

impl Line {
    fn is_horv(&self) -> bool {
        return self.p1.x == self.p2.x || self.p1.y == self.p2.y;
    }
}

fn main() {
    let data = get_input("../../../fissures.txt");

    let lines = data
        .lines()
        .flat_map(str::parse)
        .filter(|x: &Line| x.is_horv())
        .collect::<Vec<Line>>();

    println!("{:?}", lines);
}
