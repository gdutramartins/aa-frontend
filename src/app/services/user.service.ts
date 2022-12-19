import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class UserService {

  private API_PATH = environment.api + 'test/';
  
  constructor(private http: HttpClient) {

  }

  public getPublicContent(): Observable<any> {
    return this.http.get(this.API_PATH + 'all', { responseType: 'text' });
  }

  public getUserBoard(): Observable<any> {
    return this.http.get(this.API_PATH + 'user', { responseType: 'text' });
  }
  
  
}