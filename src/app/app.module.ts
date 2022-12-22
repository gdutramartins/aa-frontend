import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home..component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { httpInterceptorProviders } from './interceptor/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule} from  '@angular/material/list';
import { MatIconModule} from  '@angular/material/icon';
import { MaterialModule } from 'src/material.module';
import { ErroDialogComponent } from './components/dialogs/erro-dialog/erro-dialog.component';
import { SucessoDialogComponent } from './components/dialogs/sucesso-dialog/sucesso-dialog.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    BoardUserComponent,
    ErroDialogComponent,
    SucessoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule 
    
  ],
  providers: [
    AppService, 
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
