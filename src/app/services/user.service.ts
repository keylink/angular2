import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class UserService {
    public userState = new BehaviorSubject<User>({name: '', password: ''})
    defaultUser: Observable<User>

    constructor() { 
        // cheking if localStorage is not empty
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            this.userState = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
        }    
        this.defaultUser = this.userState.asObservable();
    }

    updateUserState(userState: object) {
        this.userState.next(userState);
        localStorage.setItem("currentUser", JSON.stringify(userState));
    }

    logout(user: object) {
        this.userState.next(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
    }
}

interface User {
  name?: string;
  password?: string;
}

