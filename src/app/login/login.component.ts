import{Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service'

@Component({
    selector: 'login',
    templateUrl : './login.component.html'
    
})

export class LoginComponent{
    userName = new FormControl('');
    password = new FormControl('');
    loginForm = new FormGroup({
        userName: this.userName,
        password: this.password
    });
    constructor(private loginService : LoginService){

    }

    
    login(formValues){
        this.loginService.login(formValues.userName,formValues.password);
    }
    cancel(){
        
    }
}