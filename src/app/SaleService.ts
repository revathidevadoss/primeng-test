import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class SaleService {
    constructor(private http: HttpClient) { }

    getSale() {
        return this.http.get<any>('assets/potato_sales.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
}
