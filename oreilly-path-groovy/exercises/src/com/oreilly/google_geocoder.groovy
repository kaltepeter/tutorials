String base = 'https://maps.googleapis.com/maps/api/geocode/xml?'
def encoded = ['10 Fawcett Street', 'Cambridge', 'MA'].collect {
    URLEncoder.encode(it, 'UTF-8')
}.join(',')
def qs = "address=$encoded"
//"$base$qs".toURL().text
def root = new XmlSlurper().parse("$base$qs")
def loc = root.result[0].geometry.location
println "(${loc.lat},${loc.lng})"