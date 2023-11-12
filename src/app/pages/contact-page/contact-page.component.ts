import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  form: FormGroup | undefined; 
  isSubmited : boolean = false; 
  constructor(
    private fb: FormBuilder,
    private db: Firestore,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['',Validators.required],
      telephone: [''],
      sujet: ['',Validators.required],  
      message: ['', Validators.required],
      checkbox: ['', Validators.required],
    });
  }

  onSend(){
    this.isSubmited = true; 
    if(this.form?.valid && this.form?.value.checkbox){
      const collecti = collection(this.db, 'contact');
      const id = new Date().getTime().toString();  
      const nom = this.form?.value.nom; 
      const prenom = this.form?.value.prenom;
      const email = this.form?.value.email; 
      const telephone = this.form?.value.telephone; 
      const message = this.form?.value.message; 
      const sujet = this.form?.value.sujet; 
      addDoc(collection(collecti, nom, id),{
        nom: nom,
        prenom : prenom,
        email: email,
        telephone : telephone,
        sujet: sujet,
        message: message
      });
      this.form.reset();

      // const dialogRef = this.dialog.open(ValidateComponent, {
      //   width: '400px',
      // });
      this._snackBar.open("Votre demande de contact à bien été envoyée ", 'Ok ! ');
      this.isSubmited = false; 
    }
  }
}

