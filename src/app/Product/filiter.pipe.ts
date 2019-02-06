import { Pipe, PipeTransform } from '@angular/core';
import { Iprod } from './prod.model';

@Pipe({
name:'filterProduct'
})

export class FilterPipe implements PipeTransform{
    transform(value:Iprod[],searchprod:string)
    {
        searchprod=searchprod? searchprod.toLowerCase():null ;
        return searchprod? value.filter((product:Iprod)=>
        (product.name.toLowerCase().indexOf(searchprod)!==-1)) : value;
            
        //if(!value) return[];
        //if (!searchtext) return value;
        //searchtext= searchtext.toLowerCase();
        //return value.name
    }

}