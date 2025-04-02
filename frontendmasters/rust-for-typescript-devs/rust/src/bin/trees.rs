
fn get_input(file_path: &str) -> String {
    return std::fs::read_to_string(file_path).expect("Should have been able to read the file");
}

fn main() {
    let data = get_input("../../../trees.txt");

    let tree_count = data.lines()
        .enumerate()
        .filter_map(|(idx, line)| return line.chars().nth(idx * 3 % line.len()))
        .filter(|&x| x == '#')
        .count();

    println!("treecount: {:?}", tree_count);
}
