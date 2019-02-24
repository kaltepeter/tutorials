package src

import groovy.sql.Sql

@GrabConfig(systemClassLoader = true)
@Grapes([
        @Grab(group = 'mysql', module = 'mysql-connector-java', version = '6.0.6')
])

def credentialsFile = new File('credentials.groovy')
def configSlurper = new ConfigSlurper()
def credentials = configSlurper.parse(credentialsFile.toURL())
def sql = Sql.newInstance("jdbc:mysql://${credentials.database.host}:${credentials.database.port}/${credentials.database.name}?characterEncoding=utf8&useUnicode=true&sessionVariables=storage_engine%3DInnoDB&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC",
        "${credentials.database.user}",
        "${credentials.database.password}",
        'com.mysql.cj.jdbc.Driver')

//sql.eachRow('select * from routepoints where temperature < 50') {
//    println "Latitude: ${it.latitude}, Longitude: ${it.longitude}, Timestamp: ${it.timestamp}, Temperature: ${it.temperature}"
//}

def row = sql.firstRow('select latitude,longitude from routepoints')
println "Latitude: ${row.latitude}, Longitude: ${row.longitude}"

//def newTemperature = 100
//sql.executeUpdate("update routepoints set temperature = ${newTemperature}")



sql.close()
