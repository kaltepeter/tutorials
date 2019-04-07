import { CountriesRespository, Continent } from "./countries.repository";

let countriesRepo = new CountriesRespository();
countriesRepo.allByCurrency("EUR").then(euroCountries => {
    console.log("Euro countries: ", euroCountries);
});

countriesRepo.allByContinent(Continent.NorthAmerica)
    .then(northAmerica => {
        console.log(`Number of north american countries stored: ${northAmerica.length}`);
    });