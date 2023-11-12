import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateComponent } from '../validate/validate.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup | undefined; 
  isSubmited : boolean = false; 
  constructor(
    private fb: FormBuilder,
    private db: Firestore,
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
      addDoc(collection(collecti, nom, id),{
        nom: nom,
        prenom : prenom,
        email: email,
        telephone : telephone,
        message: message
      });
      this.form.reset();

      // const dialogRef = this.dialog.open(ValidateComponent, {
      //   width: '400px',
      // });
      this.isSubmited = false; 
    }
  }

}
