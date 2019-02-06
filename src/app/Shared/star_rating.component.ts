import{Component,OnChanges,Input} from '@angular/core';


@Component({
selector:'app-rating',
templateUrl:'./star_rating.component.html',
styleUrls:['./star_rating.component.css']
})

export class StarComponent implements OnChanges
{
    starwidth:number;
    @Input() rating:number;

    ngOnChanges():void{
        this.starwidth=this.rating *86/6;
    }


}