#!/usr/bin/env python3
import turtle 

painter = turtle.Turtle()
painter.speed(7)

painter.pencolor("blue")

for i in range(50):
    painter.forward(50+i)
    painter.left(92)
    
painter.pencolor("red")
for i in range(50):
    painter.forward(100+i)
    painter.left(92)
    
turtle.done()
