import static GeeTwitter.*

search "Groovy DSL"

search ("Groovy DSL") { from, tweet ->
   println  "${from} : ${tweet}"
}

search "from:glaforge @graemerocher "

search from: "glaforge", username: "graemerocher "

search "authentication", from: "alvaro_sanchez", hashtag: "codemotion_es"
