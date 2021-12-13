import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(public angularFirestore: AngularFirestore) {}

  getAllProducts() {
    return this.angularFirestore.collection<any>("products").snapshotChanges();
  }
}
