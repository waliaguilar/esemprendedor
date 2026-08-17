import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobOffersComponent } from './job-offers/job-offers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ofertas-de-trabajo', component: JobOffersComponent },
  { path: '**', redirectTo: '' }
];