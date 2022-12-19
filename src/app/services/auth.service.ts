import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private API_PATH: string = environment.api + 'auth/';

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.API_PATH + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  public register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.API_PATH + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  public logout(): Observable<any> {
    return this.http.post(this.API_PATH + 'signout', { }, httpOptions);
  }
}