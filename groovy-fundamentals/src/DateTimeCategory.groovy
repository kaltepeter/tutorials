package src

@groovy.lang.Grapes([
        @Grab(group = 'joda-time', module = 'joda-time', version = '2.9.9'),
        @GrabConfig(systemClassLoader = true)
])

import org.joda.time.format.DateTimeFormat

/**
 * Created by kaltepe on 6/19/17.
 */
class DateTimeCategory {
    def static String createPrintableTime(dateTime) {
        def format = DateTimeFormat.forPattern('MM/dd/yyyy - hh:mm aa')
        dateTime.toString(format)
    }
}
