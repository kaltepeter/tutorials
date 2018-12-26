package com.oreilly;

public class UseProcessNumbers {
    public static void main(String[] args) {
        ProcessNumbers pn = new ProcessNumbers();
        System.out.println(pn.findPositives(3, -1, 4, -5, -9));
        System.out.println(pn.findPositives(-3, -1, -4, -5, -9));
        System.out.println(pn.findPositives());
    }
}
