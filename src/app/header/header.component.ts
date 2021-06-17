import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public x: any;
  constructor() { }
   myFunction() {
    this.x = document.getElementById("myTopnav");
    if (this.x.className === "topnav") {
      this.x.className += " responsive";
    } else {
      this.x.className = "topnav";
    }
  }
  isShown: boolean = false;
  isShow: boolean = false;
 
  openNav() {
    this.isShown = !this.isShown;
  }
  closeNav() {
    this.isShown = !this.isShown;
  }
  openNav1() {
    this.isShow = !this.isShow;
  }
  closeNav1() {
    this.isShow = !this.isShow;
    this.isShown = !this.isShown;

  }
  ngOnInit(): void {
     
    
    
  }

}
