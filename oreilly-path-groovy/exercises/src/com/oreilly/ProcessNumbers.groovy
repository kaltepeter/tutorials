package com.oreilly

class ProcessNumbers {
    List<Number> findPositives(Number... values) {
        values.findAll { it > 0 }
    }
}
