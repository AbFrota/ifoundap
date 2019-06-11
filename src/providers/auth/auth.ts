
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../modelos/user';


@Injectable()
export class AuthProvider {
  user = {} as User; 
public _userLogged;
  constructor(
              private afAuth: AngularFireAuth,
              ) {
  }

  async login(user: User) {

  return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)

  
  
}

obtemUsarioLogado(){
  return this._userLogged,
  console.log(this._userLogged)
}

async register(user:User){
return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
}

singOut(){
  return this.afAuth.auth.signOut();
}
}
