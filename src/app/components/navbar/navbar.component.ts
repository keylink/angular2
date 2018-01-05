import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TranslateService } from '../../translate';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  	user: User;
    isOpen: string = 'none';
    userName: string;
    public translatedText: string;
    public supportedLangs: any[];

    constructor(
        private userService: UserService,
        private _translate: TranslateService
        ) { }

    ngOnInit() {
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Русский', value: 'ru' },
            { display: '华语', value: 'zh' },
        ];
        this.selectLang('en');

        // Subsribe to user changes
      	this.userService.userState.subscribe(value => {
      		this.user = value;
              console.log("user", this.user)
      	})
    }

    // Mobile menu
    collapse() {
        if (this.isOpen == 'none') {
            this.isOpen = 'block';
        } else {
            this.isOpen = 'none';
        }
    }

    logout() {
      	let currentUser = {
        		name: '',
        		password: ''
      	}
        // clear localStorage
      	this.userService.logout(currentUser);
    }

    isCurrentLang(lang: string) {
        console.log('lang', lang)
        return lang === this._translate.currentLang;
    }
      
    selectLang(lang: string) {
        // set default lang
        this._translate.use(lang);
        this.refreshText();
    }
    
    refreshText() {
        this.translatedText = this._translate.instant('hello world');
    }

}

interface User {
    name?: string;
    password?: string;
}