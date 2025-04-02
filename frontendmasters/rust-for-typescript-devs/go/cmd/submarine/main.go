package main

import (
	_ "embed"
	"fmt"
	"log"
	"strconv"
	"strings"
)

var (
	//go:embed input.txt
	input string
)

func check(e error) {
	if e != nil {
		log.Fatal(e)
		panic(e)
	}
}

type Point struct {
	x int
	y int
}

func parseLine(line string) Point {
	parts := strings.Split(line, " ")
	amount, err := strconv.Atoi(parts[1])
	check(err)

	if parts[0] == "forward" {
		return Point{
			x: amount,
			y: 0,
		}
	} else if parts[0] == "up" {
		return Point{
			x: 0,
			y: -amount,
		}
	}
	return Point{
		x: 0,
		y: amount,
	}

}

func main() {
	lines := strings.Split(input, "\n")

	pos := Point{0, 0}
	for _, line := range lines {
		amount := parseLine(line)
		pos.x += amount.x
		pos.y += amount.y
	}
	fmt.Printf("point: %+v, %+v", pos, pos.x*pos.y)
}
