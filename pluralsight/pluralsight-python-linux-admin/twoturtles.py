#!/usr/bin/env python3
import turtle

myrtle = turtle.Turtle()
dude = turtle.Turtle()

myrtle.pencolor('red')
dude.pencolor('blue')

myrtle.speed(0)
dude.speed(0)

for i in range(180):
    myrtle.forward(i + 50)
    myrtle.left(92)
    dude.forward(i + 50)
    dude.right(92)

turtle.done()