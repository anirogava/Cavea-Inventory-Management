import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { inventoryResult } from './content.model';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  constructor(private fireStore: AngularFirestore) {}
  getData() {
    return this.fireStore.collection('inventory').snapshotChanges();
  }
  deleteData(inventoryResult: inventoryResult) {
    return this.fireStore.doc('inventory/' + inventoryResult.id).delete();
  }
}
