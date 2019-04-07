import { CountriesRespository, Continent } from "./countries.repository";
import { RestCountries } from "./rest-countries";
import { RestCountriesAdapter } from "./rest-countries-adapter";

// let countriesRepo = new CountriesRespository();
let countriesRepo = new RestCountriesAdapter(new RestCountries());

countriesRepo.allByCurrency("EUR").then(euroCountries => {
    console.log("Euro countries: ", euroCountries);
});

countriesRepo.allByContinent(Continent.NorthAmerica)
    .then(northAmerica => {
        console.log(`Number of north american countries stored: ${northAmerica.length}`);
    });

let restCountries = new RestCountries();
restCountries.getByRegion('Americas').then(northAmerica => {
    console.log(`Number of North American countries: ${northAmerica.length}`);
});