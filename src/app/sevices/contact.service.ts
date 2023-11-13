import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db: Firestore) { }

  // enregistrement de l'email dans firebase 
  send_email(data: { nom: string; prenom: string; email: string; telephone?: string; message: string; sujet?: string; newsletter?: string;}){
    const collecti = collection(this.db, 'contact');
      const id = new Date().getTime().toString();  
      const nom = data.nom; 
      const prenom = data.prenom;
      const email = data.email; 
      let telephone = '';
      if(data.telephone){
        telephone = data.telephone; 
      }
      const message = data.message; 
      let sujet = '';
      if(data.sujet){
        sujet = data.sujet; 
      }
      addDoc(collection(collecti, nom, id),{
        nom: nom,
        prenom : prenom,
        email: email,
        telephone : telephone,
        sujet: sujet,
        message: message
      });

      if(data.newsletter){
        this.add_newsletter(email); 
      }
  }

  // ajout de la newsletter dans firebase
  add_newsletter(email: string){
    const collecti = collection(this.db, 'newsletter');
      const id = new Date().getTime().toString(); 
      addDoc(collection(collecti, email, id),{email: email});
  }
}
