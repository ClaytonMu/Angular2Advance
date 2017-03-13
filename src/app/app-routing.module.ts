import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { fullbackRoute } from './fullback-route';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'cards', component: CardsComponent},
  //{ path: 'cards/:num', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
