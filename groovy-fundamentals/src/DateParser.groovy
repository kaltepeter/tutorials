package src

@groovy.lang.Grapes([
        @Grab(group = 'joda-time', module = 'joda-time', version = '2.9.9'),
        @GrabConfig(systemClassLoader = true)
])

import org.joda.time.DateTime

class DateParser {
    def String parse(time) {
        if (!time)
            throw new IllegalArgumentException()

        use (DateTimeCategory) {
            def printableTime = new DateTime(time)
            printableTime.createPrintableTime()
        }
    }
}