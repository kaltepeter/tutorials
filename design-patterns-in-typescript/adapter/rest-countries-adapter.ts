import { ICountriesRepository } from "./icountries-repository";
import { Country } from "./country";
import { Continent } from "./countries.repository";
import { RestCountries } from "./rest-countries";

export class RestCountriesAdapter implements ICountriesRepository {
    constructor(private _restCountriesApi: RestCountries) {}

    private restCountryToCountry(restCountry: any): Country {
        return {
            name: restCountry.name,
            capital: restCountry.capital,
            currency: restCountry.currency
        }
    }

    private restCountriesToCountries(restCountries: any[]): Country[] {
        return restCountries.map(restCountry => this.restCountryToCountry(restCountry));
    }

    async all(): Promise<Country[]> {
        let restCountries = await this._restCountriesApi.getAll();
        return this.restCountriesToCountries(restCountries);
    }    
    
    async allByContinent(continent: Continent): Promise<Country[]> {
        let region = "";
        if (continent == Continent.NorthAmerica || continent == Continent.SouthAmerica) {
            region = "Americas";
        } else {
            region = Continent[continent];
        }
        let restCountries = await this._restCountriesApi.getByRegion(region);
        let result = [];
        if (continent == Continent.NorthAmerica) {
            result = restCountries.filter(restCountry => restCountry.subregion == "Northern America");
        } else if (continent == Continent.SouthAmerica) {
            result = restCountries.filter(restCountry => restCountry.subregion == "South America");
        } else {
            result = restCountries;
        }
        return this.restCountriesToCountries(result);
    }
    
    async allByCurrency(currency: string): Promise<Country[]> {
        let restCountries = await this._restCountriesApi.getByCurrency(currency);
        return this.restCountriesToCountries(restCountries);
    }


}