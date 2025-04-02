package main

import (
	_ "embed"
	"fmt"
	"strings"
)

var (
	//go:embed trees.txt
	input string
)

type Thing = int

const (
	Tree Thing = iota
	Snow
)

func main() {
	data := strings.Split(input, "\n")

	treeCount := 0
	for r, line := range data {
		if string(line[r*3%len(line)]) == "#" {
			treeCount += 1
		}
	}

	fmt.Printf("treecount %v\n", treeCount)
}
