import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService, TRANSLATIONS, dictionary }   from './translate';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        TranslatePipe,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
    	UserService,
    	{ provide: TRANSLATIONS, useValue: dictionary },
    	TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
