import axios from 'axios';

export class RestCountries {
    private _baseUrl: string = "https://restcountries.eu/rest/v2/";
    
    private async getParsedCountries(url: string): Promise<any[]>{
        return axios.get(url).then(response => response.data).then(data => data as any[]);
    }

    async getAll(): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}all`);
    }
    
    async getByName(name: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}name/${name}`);
    }

    async getByFullName(fullName: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}fullName/${fullName}`);
    }

    async getByCode(code: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}alpha/${code}`);
    }

    async getByCurrency(currency: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}currency/${currency}`);
    }
    
    async getByCapitalCity(capital: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}capital/${capital}`);
    }

    async getByCallingCode(callingCode: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}callingcode/${callingCode}`);
    }

    async getByRegion(region: string): Promise<any[]> {
        return this.getParsedCountries(`${this._baseUrl}region/${region}`);
    }
}