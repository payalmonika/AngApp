import {Component ,OnInit} from '@angular/core';

import{ActivatedRoute,Router} from '@angular/router';

import{Iprod} from "./prod.model"

@Component({
templateUrl:'./productDetail.component.html'
})

export class ProductdetalComponent implements OnInit
{

    name:string;
    description:string;
    imageUrl:string;

constructor ( private _route:ActivatedRoute){}

    ngOnInit():void{
        this._route.queryParams
        .subscribe((mydata)=>
        {
            this.name=mydata['Qname'],
            this.imageUrl=mydata['Qimg']
        }
        )

    }
}