import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private API_PATH: string = environment.baseUrl + 'api/auth/';
  
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<UserDTO> {
    return this.http.post<UserDTO>(
      this.API_PATH + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  public register(username: string, password: string, nome: String): Observable<any> {
    return this.http.post(
      this.API_PATH + 'signup',
      {
        username,
        nome,
        password
      },
      httpOptions
    );
  }

  public logout(): Observable<any> {
    return this.http.post(this.API_PATH + 'signout', { }, httpOptions);
  }
}