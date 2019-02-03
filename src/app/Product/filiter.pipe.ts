import { Pipe, PipeTransform } from '@angular/core';
import { Iprod } from './prod.model';

@Pipe({
name:'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value:Iprod,searchtext:string)
    {
        if(!value) return[];
        if (!searchtext) return value;
        searchtext= searchtext.toLowerCase();
        return value.name
    }

}