import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { MentionLegaleComponent } from './pages/mention-legale/mention-legale.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { FunctionalityComponent } from './pages/functionality/functionality.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'loading',pathMatch: 'full'
  },
  {
    path:'loading',
    component: LoadingComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'benefits',
    component: BenefitsComponent
  },
  {
    path:'functionality',
    component: FunctionalityComponent
  },
  {
    path:'blog',
    children: [
      {
        path: '',
        component: BlogComponent
      }, 
      {
        path: ':id',
        component: BlogSingleComponent
      }
    ]
  },
  {
    path:'contact',
    component: ContactPageComponent
  },{
    path: 'mention-legale',
    component: MentionLegaleComponent
  },{
    path: 'politique-confidentielle',
    component: PolitiqueConfidentialiteComponent
  },{
    path: 'CGU',
    component: CGUComponent
  },{
    path: 'CGV',
    component: CGVComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
