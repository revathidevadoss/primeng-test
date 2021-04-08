import { Component, OnInit } from '@angular/core';

import { pojoService } from '../pojoService';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})

export class ProductComponent implements OnInit {
    model: any = {};
    focus;
    focus1;
    focus2;   
    display: boolean = false;

    constructor(
            private primengConfig: PrimeNGConfig,
            private pojo:pojoService
            ) { }
    
    ngOnInit() {
      this.primengConfig.ripple = true;
    }
    
    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
    
    onClickSubmit(data:any) {
      console.log(data);
      let tempdata = data;
      tempdata["salesQ1"]="";
      tempdata["salesQ2"]="";
      tempdata["salesQ3"]="";
      tempdata["salesQ4"]="";
      this.pojo.setProduct(tempdata);
      // alert("subnitted successfully");
      this.display = true;
    }
}
