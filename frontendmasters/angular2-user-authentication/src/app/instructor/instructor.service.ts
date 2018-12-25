import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';
import {API_URL} from '../app.constants';
import {Instructor} from './instructor';


@Injectable()
export class InstructorService {

  constructor(private http: Http, private authHttp: AuthHttp) {
  }

  public getInstructors(): Observable<Instructor[]> {
    return this.authHttp.get(`${API_URL}/instructors`)
      .map(response => response.json());
  }

  public addInstructor(data): Observable<Instructor> {
    return this.authHttp.post(`${API_URL}/instructors`, data)
      .map(response => response.json());
  }

}
