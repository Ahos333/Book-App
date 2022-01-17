import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  */
  {
    path: 'cover',
    loadChildren: () => import('./Pages/cover/cover.module').then( m => m.CoverPageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./Pages/toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./Pages/chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./Pages/chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  },
  {
    path: 'chapter3',
    loadChildren: () => import('./Pages/chapter3/chapter3.module').then( m => m.Chapter3PageModule)
  },
  {
    path: 'backcover',
    loadChildren: () => import('./Pages/backcover/backcover.module').then( m => m.BackcoverPageModule)
  },
  {
    path: 'chapter4',
    loadChildren: () => import('./Pages/chapter4/chapter4.module').then( m => m.Chapter4PageModule)
  },
  {
    path: 'chapter5',
    loadChildren: () => import('./Pages/chapter5/chapter5.module').then( m => m.Chapter5PageModule)
  },
  {
    path: 'chapter6',
    loadChildren: () => import('./Pages/chapter6/chapter6.module').then( m => m.Chapter6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
