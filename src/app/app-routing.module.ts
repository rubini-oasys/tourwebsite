import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TamilnaduComponent } from './home/tamilnadu/tamilnadu.component';
import { AndrapradeshComponent } from './home/andrapradesh/andrapradesh.component';
import { KeralaComponent } from './home/kerala/kerala.component';
import { KarnatakaComponent } from './home/karnataka/karnataka.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tamilnadu', component:TamilnaduComponent },
  { path: 'andrapradesh', component: AndrapradeshComponent},
  { path: 'kerala', component:KeralaComponent },
  { path: 'karnataka', component:KarnatakaComponent },
  { path: 'login', component:LoginComponent },
  { path: 'contactus', component:ContactusComponent },
  { path: 'aboutus', component:AboutusComponent },
  {path:"update/:id",component:UpdateComponent},

 { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
