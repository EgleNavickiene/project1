import {Component} from '@angular/core';

import {ELEMENT_DATA} from '../products';
  
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
    displayedColumns: string[] = ['position', 'name', 'price', 'description', 'photo', 'button'];
        
    dataSource = ELEMENT_DATA;
  }
