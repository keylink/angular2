import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user: User;

    constructor(private userService: UserService,) { }

    ngOnInit() {
    // Set user for display it on page
    	this.userService.userState.subscribe(value => {
    		this.user = value;
    	})
    }
}

interface User {
    name?: string;
    password?: string;
}