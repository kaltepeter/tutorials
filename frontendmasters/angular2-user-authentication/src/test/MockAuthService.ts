import {Injectable} from '@angular/core';

@Injectable()
export class MockAuthService {
  getToken() {
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OWZlM2E2NTVhYWU5MDg1NjM0OGQwM2IiLCJ1c2VybmFtZSI6ImR1Y2siLCJlbWFpbCI6ImR1Y2tAbWFpbGluYXRvci5jb20iLCJyb2xlIjoiYWRtaW4iLCJncmF2YXRhciI6Imh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvNzE2ZjI5YWQ2ZTc2YjBkMzNlN2U4MWE1YjJkMDExMTciLCJpYXQiOjE1MDk4NjMzNjAsImV4cCI6MTUwOTg2Njk2MH0._t9gBbJhvW4PetotTZF4gfhHlqtmn8hW9SdeB6W_xfQ';
  }

  isAuthenticated() {
    return true;
  }

  isAdmin() {
    return true;
  }
}
