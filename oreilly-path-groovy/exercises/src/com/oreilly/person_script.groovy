package com.oreilly

import groovy.transform.Canonical

@Canonical
class Person {
    String first
    String last
}

Person p1 = new Person(first: 'Larry', last: 'Bird')
Person p2 = new Person(first: 'Kevin', last: 'McHale')
Person p3 = new Person('Robert', 'Parrish')
println p1 == p2
println p1 == p3

Set people = [p1, p2, p3]
println people
println people*.last
println people.collect { "$it.first $it.last" }
    .findAll { it.size() > 10 }
    .join(', ')