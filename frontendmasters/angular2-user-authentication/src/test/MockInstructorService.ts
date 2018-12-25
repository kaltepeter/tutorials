import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MockInstructorService {
  getInstructors() {
    return Observable.of([]);
  }
}
