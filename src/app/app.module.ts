import {NgModule} from '@angular/core';

// Module
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from "@angular/forms";
// Components
import {AppComponent} from './app.component';
//import { DetailComponent } from './detail.component';
import { PrdDetailComponent } from './Product/prod.component';

// decorator
@NgModule({
    // all your module & routing
    imports: [
        BrowserModule,
        FormsModule
    ],

    // all your component & pipes
    declarations: [
        AppComponent,
       // DetailComponent,
        PrdDetailComponent
    ],

    // only and only first component
    bootstrap: [
        AppComponent
    ],

    // all the services
    providers: [ ]
})

export class AppModule {

}

