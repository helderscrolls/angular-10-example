import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(module => module.ContactModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(module => module.AboutModule),
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(module => module.SigninModule),
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/components/components.module')
      .then(module => module.ComponentsModule),
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/services.module')
      .then(module => module.ServicesModule),
  },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/template-driven-forms/template-driven-forms.module')
      .then(module => module.TemplateDrivenFormsModule),
  },
  {
    path: 'chartjs',
    loadChildren: () => import('./modules/application/chartjs/chartjs.module')
      .then(module => module.ChartjsModule),
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(module => module.ItemsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
