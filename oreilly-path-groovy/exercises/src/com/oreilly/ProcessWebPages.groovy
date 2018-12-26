package com.oreilly

//'http://oreilly.com'.toURL().text.eachLine { println it }
//'http://oreilly.com'.toURL().eachLine { println it }

println 'http://oreilly.com'.toURL().readLines()*.size()
println 'http://oreilly.com'.toURL().text.readLines()*.size()
