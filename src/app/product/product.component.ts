import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input('id') productId?: string;
  @Input('anyStaticDataYouMightWantToPass') title?: string;
  @Input('type') type?: string;
  @Input('productData') data?: object;

  ngOnInit() {
    console.log('Product Id:', this.productId);
    console.log('static data:', this.title);
    console.log('Query params as type', this.type);
    console.log('Data from resolver:::', this.data);
  }
}
