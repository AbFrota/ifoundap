import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../modelos/ItemInterface';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Perfil } from '../../modelos/perfil';




@Injectable()
export class FirebaseServiceProvider {



  constructor(public db: AngularFireDatabase,
              private fb: FirebaseApp,
              private afAuth: AngularFireAuth) {

  }

  save(item) { //create
    this.db.list('itens')
      .push(item)
      .then(r => console.log(r));
  }

  /*public uploadAndSave(item: any) {
    let itemNovo = { $key: item.key, nome: item.nome, url: '', fullPath: '' };

    if (itemNovo.$key) {
      this.save(itemNovo);
    } else {
      let storageRef = this.fb.storage().ref();
      let basePath = '/imgs/' // + this.angularFireAuth.auth.currentUser.uid;
      itemNovo.fullPath = basePath + '/' + itemNovo.nome + '.png';

      let uploadTask = storageRef.child(itemNovo.fullPath).putString(item.fileToUpload, 'base64');

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (error) => {
        console.error(error);
      },
      () => {
        itemNovo.url = uploadTask.snapshot.downloadURL;
        this.save(itemNovo);
      });
    }
  }
*/ 


  getAll() { // read
    return this.db.list('itens').snapshotChanges().map(data => {
      return data.map(d => ({ key: d.key, ...d.payload.val() }));
    });
  }

  update(item) {
    return this.db.list('itens').update(item.key, item);
  }

  remove(item) {
    return this.db.list('itens').remove(item.key);
  }

 

}
