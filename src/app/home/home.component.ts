import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // toppings= 'abcv';
  constructor() { }
  customOptions1: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }



  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    },
    nav: true
  }
  slidesStore:any;
  pictures: any;
  toppingList: any;
  ngOnInit(): void {

    this.slidesStore= [
      { src:'./../../assets/images/img1.jpg', alt:'image', title:'img', id:'123', text:'No. 2-G, Jalan Kenari 5, Bandar', distance:'0.3km'},
      { src:'./../../assets/images/img2.jpg', alt:'image', title:'img', id:'123', text:'18-G, Jalan Puteri 2/5 Bandar', distance:'0.5km'},
      { src:'./../../assets/images/img3.jpg', alt:'image', title:'img', id:'123', text:'No. 2-G, Jalan Kenari 5, Bandar', distance:'0.6km'},
      { src:'./../../assets/images/img4.jpg', alt:'image', title:'img', id:'123', text:'No. 2-G, Jalan Kenari 5, Bandar', distance:'0.3km'},
      { src:'./../../assets/images/img5.jpg', alt:'image', title:'img', id:'123', text:'No. 2-G, Jalan Kenari 5, Bandar', distance:'0.3km'},
      { src:'./../../assets/images/pomogranate.jpg', alt:'image', title:'img', id:'123', text:'No. 2-G, Jalan Kenari 5, Bandar', distance:'0.3km'}

    ];

    this.pictures= [
      { src:'./../../assets/images/parcel.jpeg', alt:'image', text:'small parcel' },
      { src:'./../../assets/images/parcel.jpeg', alt:'image', text:'small parcel' },
      { src:'./../../assets/images/parcel.jpeg', alt:'image', text:'small parcel' },
      { src:'./../../assets/images/parcel.jpeg', alt:'image', text:'small parcel' },
      { src:'./../../assets/images/parcel.jpeg', alt:'image', text:'small parcel' },
      { src:'./../../assets/images/parcel.jpeg', alt:'image', text:'small parcel' },
    ];

    this.toppingList = [
      {topping:'abc'},
      {topping:'def'},
      {topping:'ghi'},
      {topping:'jkl'},
      {topping:'mno'},

    ]
    
}
}
