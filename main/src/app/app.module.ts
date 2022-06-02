import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiButtonModule, TuiRootModule } from "@taiga-ui/core";
import { AppComponent } from './app.component';
import {TuiInputModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
