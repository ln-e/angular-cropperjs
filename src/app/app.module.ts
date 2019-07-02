import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperjsModule } from '@ln-e/cropperjs';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CropperjsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
