import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	name: string;
	password: string;

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    login() {
    	let currentUser = {
    		name: this.name,
    		password: this.password
    	}
    	this.userService.updateUserState(currentUser);
    }

}
