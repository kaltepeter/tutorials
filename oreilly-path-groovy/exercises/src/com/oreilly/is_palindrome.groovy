package com.oreilly

boolean isPalindrome(String s) {
    String test = s.toLowerCase().replaceAll(/\W/, '')
    test == test.reverse()
}

assert isPalindrome("Madam, in Eden, I'm Adam")
assert isPalindrome('Flee to me, remote elf!')
assert isPalindrome("Go hang a salami, I'm a lasagna hog")
assert !isPalindrome('This is NOT a palindrome!')