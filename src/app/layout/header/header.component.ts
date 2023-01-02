import { Component } from '@angular/core';
import { Role } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilsService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private roles: Role[] | undefined;
  public isLoggedIn = false;
  public username?: string;

  constructor(
    public storageService: StorageService,
    private authService: AuthService,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      if (user) {
        this.roles = user.roles;

        this.username = user.username;
      }
    }
  }

  public logout(): void {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.storageService.clean();
        this.utilsService.navigateToHome();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
