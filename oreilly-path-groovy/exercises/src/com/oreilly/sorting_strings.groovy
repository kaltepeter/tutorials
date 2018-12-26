List strings = 'this is a list of strings'.split()
println strings
// Java natural sort
Collections.sort(strings)
println strings

// java sort by length
Collections.sort(strings, new Comparator<String>() {
    int compare(String s1, String s2) {
        s1.size() <=> s2.size()
    }
})
println strings   
assert strings*.size() == [1, 2, 2, 4, 4, 7]

// groovy
println strings.sort(false)

// length sort
println strings.sort(false, new Comparator<String>() {
    int compare(String s1, String s2) {
        s1.size() <=> s2.size()
    }
})

// groovy reverse length with 2 param closure
println strings.sort(false) { s1, s2 -> s2.size() <=> s1.size() }

// groovy length sort with 1 param
println strings.sort(false) { it.size() }

// sort by length, then equal lengths alpha
println strings.sort(false) { String s1, String s2 -> s1.size() <=> s2.size() ?: s2 <=> s1 }