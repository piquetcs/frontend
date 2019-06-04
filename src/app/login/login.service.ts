import{Injectable} from '@angular/core';

Injectable()
export class LoginService{

    login(userName: string, password: string){
        console.log(userName,password)
    }

}