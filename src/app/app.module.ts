import {NgModule} from '@angular/core';

// Module
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from "@angular/forms";
import{HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router';
// Components
import {AppComponent} from './app.component';
//import { DetailComponent } from './detail.component';
import { PrdDetailComponent } from './Product/prod.component';
import { FilterPipe } from './Product/filiter.pipe';
import { prodService } from './Product/prod.service';
import { StarComponent } from './Shared/star_rating.component';
import { ProductdetalComponent } from './Product/productDetail.component';
import { homeComponent } from './Home/home.component';
import { OrderComponent } from './Order/order.component';

// decorator
@NgModule({
    // all your module & routing
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path:'products',component:PrdDetailComponent},
            {path:'products/:id',component:ProductdetalComponent},
            {path:'home',component:homeComponent},
            {path:'order',component:OrderComponent},
            {path:'',redirectTo:'home',pathMatch:'full'}
            
        ])
    ],

    // all your component & pipes
    declarations: [
        AppComponent,
       // DetailComponent,
        PrdDetailComponent,
        FilterPipe,
        StarComponent,
        ProductdetalComponent,
        homeComponent,
        OrderComponent
    ],

    // only and only first component
    bootstrap: [
        AppComponent
    ],

    // all the services
    providers: [
        prodService
     ]
})

export class AppModule {

}

