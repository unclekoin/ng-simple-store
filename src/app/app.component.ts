import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'online store';
  term = '';
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>;
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService.getAll()
      .pipe(
        tap(() => this.loading = false)
      )
    // this.productService.getAll().subscribe({
    //   next: (products: IProduct[]) => this.products = products,
    //   complete: () => {
    //     this.loading = false;
    //   }
    // })
  }
}
