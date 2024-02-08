import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  // name = "vineet"
  addToCart: number = 0
  product = {
    name: 'iPhone',
    price: 999,
    color: 'black',
    discount: 8.5,
    inStock:5,
    pimage: '/assets/images/iphone.png'
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  // onNameChange(event: any){
  //   this.name=event.target.value
  // }

  decrementCartValue(){
    if(this.addToCart>0){
      this.addToCart=this.addToCart-1
    }
  }
  incrementCartValue(){
    if(this.addToCart<this.product.inStock){
      this.addToCart=this.addToCart+1
    }
  }
}
