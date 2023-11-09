import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.component').then(m => m.UserComponent)
  },
  {
    path: 'todo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./todo/todo.component').then(m => m.TodoComponent)
  },
  {
    path: 'calendar',
    canActivate: [AuthGuard],
    loadChildren: () => import('./calendar/calendar.component').then(m => m.CalendarComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
