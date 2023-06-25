import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import appRoutes from "./app-routes";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { HomeComponent } from "./pages/home/home.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
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
    NavBarComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
