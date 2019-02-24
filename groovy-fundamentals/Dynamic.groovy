def cat = "meow"
def one = 1

println cat
println cat.getClass()
println cat.toUpperCase()

println one
println one.getClass()
//println one.toUpperCase()

one = "one"
println one.getClass()
println one.toUpperCase()

//Integer two = "two"
// prefer def and use type to enforce type checking
// def still has types

