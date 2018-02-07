import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {


  imageWidth = 150;
  imageMargin = 20;
  showImage = true;
  pageTitle = 'This is Restaurant Management Title';
  restaurants: any = [{
    'restaurantId': 1,
    'restaurantTitle': 'Mogli',
    'restaurantCity': 'Delhi',
    'restaurantState': 'Delhi',
    'starRating': 3.5,
    'imageUrl': 'https://img0.etsystatic.com/151/0/14457362/il_340x270.1169952820_9qnk.jpg'
},
{
    'restaurantId': 2,
    'restaurantTitle': 'Haldiram',
    'restaurantCity': 'Nagpur',
    'restaurantState': 'Maharashtra',
    'starRating': 2.5,
    'imageUrl': 'http://www.indiagiftcenter.com/haldiramlogo.gif'
},
 {
    'restaurantId': 3,
    'restaurantTitle': 'Yo China',
    'restaurantCity': 'Noida',
    'restaurantState': 'Uttar Pradesh',
    'starRating': 5,
    'imageUrl': 'http://www.design-worldwide.com/images/clients/big/yochina6big.jpg'
}];


  constructor() { }

  ngOnInit() {
  }
  toggleImage():void
  {
    this.showImage =!this.showImage;
  }

}
