import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import appRoutes from "./app-routes";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { HomeComponent } from "./pages/home/home.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent
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
    HomeComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
