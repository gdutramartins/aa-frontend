import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class LoadingService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  
  public isLoading$ = this.isLoading$$.asObservable();
  
  public setLoading(isLoading: boolean) {
    this.isLoading$$.next(isLoading);
  }
}