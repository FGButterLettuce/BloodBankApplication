import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mobile-home', loadChildren: './mobile-home/mobile-home.module#MobileHomePageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'mobile-sign-up', loadChildren: './mobile-sign-up/mobile-sign-up.module#MobileSignUpPageModule' },
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule' },
  { path: 'mobile-log-in', loadChildren: './mobile-log-in/mobile-log-in.module#MobileLogInPageModule' },
  { path: 'user-home/:id', loadChildren: './user-home/user-home.module#UserHomePageModule' },
  { path: 'mobile-user-home/:id', loadChildren: './mobile-user-home/mobile-user-home.module#MobileUserHomePageModule' },
  { path: 'points', loadChildren: './user/points/points.module#PointsPageModule' },
  { path: 'schedule', loadChildren: './user/schedule/schedule.module#SchedulePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
