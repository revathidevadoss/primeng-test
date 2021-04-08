import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SortEvent ,SelectItem,FilterService,FilterMatchMode} from 'primeng/api';
import { Customer, datas } from "../customer";
import { SaleService } from "../SaleService";
import { AuthService } from '../auth/auth.service';
import { pojoService } from '../pojoService';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
 
  sales: any[];
  customers: Customer[];
  datas;
  columns:any;
 // public slider;

  constructor(
          private saleService: SaleService,
          private pojo:pojoService
          ) { }

  ngOnInit() {
    
    this.saleService.getSale().then(customers => {
      this.customers = customers.column;
      let salesDatas =customers.datas;
      console.log(customers);
      let tempSales=this.pojo.getProduct();
      console.log("tempSales"+"  "+JSON.stringify(tempSales));
      this.sales=salesDatas.concat(tempSales);
      console.log("temporySales"+"  "+JSON.stringify(this.sales)); 
    });

  }
    onEditInit(): void {
      //console.log(this.books);
      console.log('Edit Init Event Called');
    }
    
    onEditCancel():void {
     // console.log(this.books);
      console.log('Edit Cancel Event Called');
    }
    
}
