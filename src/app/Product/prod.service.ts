import {Injectable} from '@angular/core';
import { Iprod } from './prod.model';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';

@Injectable()

export class prodService{

    private  _productUrl ="https://ngproductsparam.herokuapp.com/api/getProductDetails";
    
    constructor(private _http:HttpClient){}
    getproduct():Observable<Iprod[]>
    {
        return this._http.get<Iprod[]>(this._productUrl);
    }
}

