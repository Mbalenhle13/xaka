import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from "./pages/blog/blog.component";
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
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
]

export default appRoutes;
