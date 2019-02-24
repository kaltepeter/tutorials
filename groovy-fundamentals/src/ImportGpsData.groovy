package src

import groovy.sql.Sql
import groovyx.net.http.RESTClient
import org.joda.time.DateTime

@GrabConfig(systemClassLoader = true)
@Grapes([
        @Grab(group = 'org.codehaus.groovy.modules.http-builder', module = 'http-builder', version = '0.7.1'),
        @Grab(group = 'mysql', module = 'mysql-connector-java', version = '6.0.6'),
        @Grab(group = 'joda-time', module = 'joda-time', version = '2.9.9')
])

def file = new File('../data/fells_loop.gpx')

def slurper = new XmlSlurper()
def gpx = slurper.parse(file)
gpx.with {
    println name
    println ''
    println desc
    println ''
    println attributes()['version']
    println attributes()['creator']
}

def forecastApi = new RESTClient('https://api.darksky.net/')
def credentialsFile = new File('credentials.groovy')
def configSlurper = new ConfigSlurper()
def credentials = configSlurper.parse(credentialsFile.toURL())
def sql = Sql.newInstance("jdbc:mysql://${credentials.database.host}:${credentials.database.port}/${credentials.database.name}?characterEncoding=utf8&useUnicode=true&sessionVariables=storage_engine%3DInnoDB&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC",
        "${credentials.database.user}",
        "${credentials.database.password}",
        'com.mysql.cj.jdbc.Driver')

gpx.rte.rtept.each({
    println it.@lat
    println it.@lon

    def parser = new DateParser()
    println parser.parse(it.time.toString())

    def queryString = "forecast/${credentials.apiKey}/${it.@lat},${it.@lon},${it.time}"
    def response = forecastApi.get(path: queryString)

    println "${response.data.currently.summary}"
    println "${response.data.currently.temperature} degrees"

    def routepoints = sql.dataSet('routepoints')
    routepoints.add(latitude: it.@lat.toDouble(),
            longitude: it.@lon.toDouble(),
            timestamp: new DateTime(it.time.toString()).toDate(),
            temperature: response.data.currently.temperature)
})

sql.close()