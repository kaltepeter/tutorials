import { Country } from "./country";
import fs from "fs";

export enum Continent {
    Africa = "Africa",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "NorthAmerica",
    SouthAmerica = "SouthAmerica",
    Oceania = "Oceania"
}

export class CountriesRespository {
    async all(): Promise<Country[]> {
        return Promise.all([
            Continent.Africa, 
            Continent.Asia,
            Continent.Europe,
            Continent.NorthAmerica,
            Continent.SouthAmerica
        ].map(continent => this.allByContinent(continent)))
        .then(results => {
            let consolidated: Country[] = [];
            results.forEach(result => {
                consolidated.push(...result);
            });
            return consolidated;
        });
    }

    async allByContinent(continent: Continent): Promise<Country[]> {
        return new Promise<Country[]>((resolve, reject) => {
            fs.readFile(this.continentToFileName(continent), 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let countries: Country[] = JSON.parse(data);
                    resolve(countries);
                }
            });
        });
    }
    async allByCurrency(currency: string): Promise<Country[]> {
        let all = await this.all();
        return all.filter(country => country.currency == currency);
    }

    private continentToFileName(continent: Continent) {
        let prefix: string = "countries/";
        let filenames: any = {};
        filenames[Continent.Africa] = "africa.json";
        filenames[Continent.Asia] = "asia.json";
        filenames[Continent.Europe] = "europe.json";
        filenames[Continent.NorthAmerica] = "northAmerica.json";
        filenames[Continent.SouthAmerica] = "southAmerica.json";
        return prefix + filenames[Continent[continent]];
    }
}