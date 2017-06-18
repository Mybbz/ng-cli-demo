import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}
]

export const routing = RouterModule.forRoot(routes, {
  useHash: true
})