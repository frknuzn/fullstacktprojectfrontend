import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username,password){
    console.log('before '+this.isUserLoggedIn());
    if (username==="Furkan" && password==="1453") {
      //Html5 özelliğini kullanarak session storage a username i oraya kaydediyoruz
      sessionStorage.setItem('authenticatedUser',username);
      console.log('after '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  //session storage da mevcut authenticatedUser varsa getir.
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user ===null)

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
