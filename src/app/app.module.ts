import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import appRoutes from "./app-routes";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppComponent,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
