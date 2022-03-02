import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsList: any = null;
  dataSource: any;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsList = this.productsService
      .getProductsList()
      .subscribe((data: any) => {
        this.productsList = data;
      });
  }

  getProductDetails(id: any): void {
    this.router.navigate([`products/product-details/${id}`]);
  }
}
