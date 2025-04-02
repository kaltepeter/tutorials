use anyhow::Ok;
use clap::Parser;
use rust::{config::Config};

use anyhow::{ Result};

fn main() -> Result<()> {
    let opts: Config = rust::opts::Opts::parse()
        .try_into()?;
    println!("{:?}", opts);
    return Ok(());
}