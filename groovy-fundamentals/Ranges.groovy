def numbers = 1..10
for (num in numbers) {
    println num
}

def letters = 'a'..'g'
for (let in letters) {
    println let
}

def enum DAYS {
    SUN,
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT
}

for (day in DAYS) {
    println day
}

def weekdays = DAYS.MON..DAYS.FRI

println 'Weekdays'

for (day in weekdays) {
    println day
}

println 'Extents: '
println weekdays.from
println weekdays.to