import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-prod',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  localstoragevalue = localStorage.getItem('ratevalue');
  mainHeading: string = 'Movies List';
  starHeading: string;
  title: string = 'Filter By:';
  nuberText: string = 'Selected Movie Filter:';
  userInput: string;
  imageWidth: number = 50;
  showImage: Boolean = true;

  constructor(private _productService: ProductService){

  }

  products:IProduct [];

  ngOnInit(): void{
    this._productService.getProducts()
        .subscribe((data) => this.products = data);
  }
    
  toggleImage():void{
    this.showImage= !this.showImage
  }

  onDataReceived(message: string){
    this.starHeading = message;
  }

}

//filter
//index of
//map
//ternary operator