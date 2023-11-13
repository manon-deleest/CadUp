import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection, setDoc, doc, addDoc  } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(
    private db: Firestore,
    private _router: Router,
    private http:HttpClient
  ) { }


  async ngOnInit(): Promise<void> {
    // this.enregistrer(); 
    console.log('loading'); 
    // this._router.navigate(['about'])
    setTimeout(() => this._router.navigate(['about']), 1400); 
  }

  enregistrer(){
    const dateNow = new Date(); 
    const collecti = collection(this.db, 'acceSite');
    let uniqK : string = ""; 
    if(localStorage.getItem('Uniqk') != '' && localStorage.getItem('Uniqk') != null){
      uniqK = localStorage.getItem('Uniqk')!; 
    }else{
      uniqK = Math.random().toString(16).slice(2); 
      localStorage.setItem('Uniqk', uniqK);
    }
    addDoc(collection(collecti, uniqK, dateNow.toString()),{date: dateNow, uniqK: uniqK});
  }

}
