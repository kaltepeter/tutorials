def beatles = ["John", "Paul","George","Ringo"]

// java like
for (int i = 0; i < beatles.size(); i++) {
    def greeting = "Hello, "
    println "$greeting ${beatles[i]}"
    println '${i*10}'
}

// groovy
for (beatle in beatles) {
    def greeting = "Hello, "
    println "$greeting $beatle"
}
