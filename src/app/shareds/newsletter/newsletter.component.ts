import { Component, Inject, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc, addDoc  } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  form: FormGroup | undefined;
  isSubmited: boolean = false
  constructor(
    private db: Firestore,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.initForm(); 
  }

  saveData(){
    this.isSubmited = true; 
    if(this.form?.valid){
      const collecti = collection(this.db, 'newsletter');
      const id = new Date().getTime().toString(); 
      const email = this.form?.value.email; 
      addDoc(collection(collecti, email, id),{email: email});

      this.isSubmited = false; 
    }
  }

  initForm(){
    this.form = this.fb.group({
      email: ['', Validators.required],
    });
  }

}
