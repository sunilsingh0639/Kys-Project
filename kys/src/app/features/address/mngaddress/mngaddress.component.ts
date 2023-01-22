import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-mngaddress',
  templateUrl: './mngaddress.component.html',
  styleUrls: ['./mngaddress.component.scss']
})
export class MngaddressComponent {


  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}