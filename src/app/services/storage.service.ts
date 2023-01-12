import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDTO } from '../model/user.model';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private isUsuarioAutenticado$$ = new BehaviorSubject<boolean>(this.isLoggedIn());
  
  public isUsuarioAutenticado$ = this.isUsuarioAutenticado$$.asObservable();



  constructor() {}

  public clean(): void {
    window.sessionStorage.clear();
    this.setUsuarioAutenticado(false);
  }

  public saveUser(user: UserDTO): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.setUsuarioAutenticado(true);
  }

  public getUser(): UserDTO | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  private setUsuarioAutenticado(isAutenticado: boolean) {
    this.isUsuarioAutenticado$$.next(isAutenticado);
  }

}
