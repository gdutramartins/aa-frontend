import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  
  constructor(private storageService: StorageService, 
              private authService: AuthService,
              public loadingService: LoadingService) {
    
  }


  public ngOnInit(): void {
  
  }

  public ngOnDestroy(): void {
    
  }
   
 

}

