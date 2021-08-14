import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent} from './pages/signup/signup.component';
import { StoreComponent } from './pages/store/store.component';
import { CreateNftComponent } from './pages/nft/create/create.component';
import { DetailsNftComponent } from './pages/nft/details/details.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CollectionComponent } from './pages/collection/collection.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent
  },
  {
    path: 'nft/create',
    component: CreateNftComponent
  },
  {
    path: 'nft/edit/:_id',
    component: CreateNftComponent
  },
  {
    path: 'nft/:token',
    component: DetailsNftComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
