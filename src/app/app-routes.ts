import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ServicesComponent } from "./pages/services/services.component";
import {Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
]

export default appRoutes;
