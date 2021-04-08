import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class pojoService {
    private temarray=[];

    constructor(private http: HttpClient) { }

    setProduct(data){
        this.temarray.push(data);
        
      }
    
      getProduct(){
        return this.temarray;
      }
}
