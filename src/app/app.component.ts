import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landding-page';
  isLoading: boolean | undefined;
  
  constructor(
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true; 
    if(this.isLoading){
      this._router.navigate(['loading'])
      this.isLoading = false; 
    }
     
  }


}
