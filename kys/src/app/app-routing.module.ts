import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberTypeComponent } from './features/renew/subscriber-type/subscriber-type.component';
import { LayoutsComponent } from './shared/layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/renew/renew.module')
    .then((mod) => mod.RenewModule),
    component: LayoutsComponent

  }
  // {
  //   path : '',
  //   component : login ka component
  // },
  // {
  //   path: 'app',
  //   component: layout ka component ,
  //   children: [
  //     {
  //       path: 'books',
  //       loadChildren: () =>
  //         import('./features/books/books.module').then(
  //           (mod) => mod.BooksModule
  //         ),
  //     },
  //     {
  //       path: 'auth',
  //       loadChildren: () =>
  //         import('./features/auth/auth.module').then(
  //           (mod) => mod.AuthModule
  //         ),
  //     },
  //     {
  //       path: 'plans',
  //       loadChildren: () =>
  //         import('./features/plans/plans.module').then(
  //           (mod) => mod.PlansModule
  //         ),
  //     },
  //     {
  //       path: 'subscriber',
  //       loadChildren: () =>
  //         import('./features/subscriber/subscriber.module').then(
  //           (mod) => mod.SubscriberModule
  //         ),
  //     },
      ,{
         path: 'renew',
         loadChildren: () =>
           import('./features/renew/renew.module').then(
             (mod) => mod.RenewModule
          ),
     },
  //     {
  //       path: 'admin',
  //       loadChildren: () =>
  //         import('./features/admin/admin.module').then(
  //           (mod) => mod.AdminModule
  //         ),
  //     },
  //     {
  //       path: 'address',
  //       loadChildren: () =>
  //         import('./features/address/address.module').then(
  //           (mod) => mod.AddressModule
  //         ),
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
