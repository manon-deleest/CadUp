import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ContactService } from 'src/app/sevices/contact.service';

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
    private contactService: ContactService,
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
      message: ['', Validators.required],
      checkbox: ['', Validators.required],
      newsletter: [''],
    });
  }

  onSend(){
    this.isSubmited = true; 
    if(this.form?.valid && this.form?.value.checkbox){
      this.contactService.send_email(this.form?.value);
      this.form.reset();

      this._snackBar.open("Votre demande de contact à bien été envoyée ", 'Ok ! ');
      this.isSubmited = false; 
    }
  }

}
