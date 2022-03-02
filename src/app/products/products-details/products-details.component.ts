import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product: any;
  constructor(private productsService: ProductsService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((queryParams: Params) => {
      this.productsService.getProductDetails(queryParams['id']).subscribe({
        next: (data: any) => {
          this.product = data;
        },
        error: (error: any) => {
          this.router.navigate(['']);
        },
      });
    });
  }
}
