import { Component, Inject, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc, addDoc  } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ContactService } from 'src/app/sevices/contact.service';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  form: FormGroup | undefined;
  isSubmited: boolean = false
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
    this.initForm(); 
  }

  saveData(){
    this.isSubmited = true; 
    if(this.form?.valid){
      this.contactService.add_newsletter(this.form?.value.email); 

      this._snackBar.open("Votre email a bien été enregistré, vous recevrez beintôt de nos nouvelles ! ", 'Super ! ');
      this.isSubmited = false; 
    }
  }

  initForm(){
    this.form = this.fb.group({
      email: ['', Validators.required],
    });
  }

}
