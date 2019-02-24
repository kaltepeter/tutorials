package src

@GrabConfig(systemClassLoader = true)
@Grapes([
        @Grab(group = 'joda-time', module = 'joda-time', version = '2.9.9'),
])

import org.joda.time.DateTime

/**
 * Created by kaltepe on 6/11/17.
 */
class DateParserTests extends GroovyTestCase {
    private DateParser parser

    def void setUp() {
        parser = new DateParser()
    }

    def void testCanParseDateTime() {
        def dateTime = new DateTime(2013, 1, 1, 9, 30)
        def result = parser.parse(dateTime.toString())

        assert '01/01/2013 - 09:30 AM' == result
    }

    def void testWillThrowAnErrorWhenNullDateTimeIsProvided() {
        shouldFail(IllegalArgumentException) {
            parser.parse(null)
        }
    }
}
