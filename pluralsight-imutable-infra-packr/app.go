package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	auth := r.Header.Get("X-Auth")
	if auth == "SuperSecureCode" {
		fmt.Fprintln(w, "You are authenticated to Globomantics' middle-tier app!")
	} else {
		fmt.Fprintln(w, "This is Globomantics' middle-tier app!")
	}
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}