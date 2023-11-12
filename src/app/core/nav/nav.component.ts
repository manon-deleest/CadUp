import { Component, OnInit } from '@angular/core';
import { faBars, faXRay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  readonly burger = faBars; 
  readonly cross = faXRay;
  menuIsOpen: boolean = false; 

  constructor() { }

  ngOnInit(): void {
    this.menuIsOpen = window.innerWidth>740;
  }

  toogleMenu(event: Event){
    event.stopPropagation(); 
    this.menuIsOpen = !this.menuIsOpen;
  }

  onCloseMenu() :void{
    if(window.innerWidth <= 740) {
      this.menuIsOpen = false; 

    }
  }

}
