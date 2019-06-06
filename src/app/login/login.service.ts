import{Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class LoginService{

    constructor(private router: Router){}

    login(userName: string, password: string){
        console.log(userName,password)

        this.router.navigate(['dashboard/']);
    }

}