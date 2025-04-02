package main

import (
	_ "embed"
	"fmt"
	"log"
	"strconv"
	"strings"
)

var (
	//go:embed fissures.txt
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

type Line struct {
	p1 *Point
	p2 *Point
}

func parsePoint(line string) (*Point, error) {
	parts := strings.Split(line, ",")
	x, err := strconv.Atoi(parts[0])
	if err != nil {
		return nil, err
	}

	y, err := strconv.Atoi(parts[1])
	if err != nil {
		return nil, err
	}
	return &Point{
		x: x,
		y: y,
	}, nil
}

func parseLine(line string) (*Line, error) {
	parts := strings.Split(line, " -> ")
	p1, err := parsePoint(parts[0])
	if err != nil {
		return nil, err
	}

	p2, err := parsePoint(parts[1])
	if err != nil {
		return nil, err
	}

	return &Line{
		p1: p1,
		p2: p2,
	}, nil
}

func main() {
	lines := []Line{}
	for _, l := range strings.Split(input, "\n") {
		line, err := parseLine(l)
		if err != nil {
			log.Fatal("Hey we couldn't parse the line")
		}
		lines = append(lines, *line)
	}

	fmt.Printf("%+v", lines)
}
