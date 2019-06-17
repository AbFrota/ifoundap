
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../modelos/user';


@Injectable()
export class AuthProvider {
  user = {} as User; 
  authState: any = null;



public _userLogged;
  constructor(
              private afAuth: AngularFireAuth,
              ) {
                this.afAuth.authState.subscribe((auth) => {
                  this.authState = auth
    });

  }

  get authenticated(): boolean {
    return this.authState !== null;
} 

  async login(user: User) {

    const result  = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)

    return result

  
  
}
get currentUserId(): string {
  return this.authenticated ? this.authState.uid : '';
}


async register(user:User){
return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
}

singOut(){
  return this.afAuth.auth.signOut();
}
}
