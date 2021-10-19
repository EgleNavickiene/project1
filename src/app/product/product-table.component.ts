import {Component} from '@angular/core';

export interface ProductsTable {
  position: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  }  

export const ELEMENT_DATA: ProductsTable[] = [
  {
    position: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    photo: 'https://lt3.pigugroup.eu/colours/456/239/33/45623933/apple-iphone-13-128gb-blue_xbig.jpg'
  },
  {
    position: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    photo: 'https://lt1.pigugroup.eu/colours/347/381/66/34738166/apple-iphone-12-mini-64gb-white-kaina_xbig.jpg'
  },
  {
    position: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    photo: 'https://lt2.pigugroup.eu/colours/314/919/26/31491926/apple-iphone-se-2020-128gb-black-price_xbig.jpg'
  }
  ];
  
  /**
   * @title Basic use of `<table mat-table>`
   */

  @Component({
    selector: 'table-products',
    templateUrl: '/product-table.component.html',
    styleUrls: ['/product-table.component.scss']
  })
  export class ProductsTableComponent {
    title = 'project1'
    displayedColumns: string[] = ['position', 'name', 'price', 'description', 'photo'];
        
    dataSource = ELEMENT_DATA;
  }
