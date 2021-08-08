import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './pages/store/store.component';
import { NftItemListComponent } from './components/store/nft-item-list/nft-item-list.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateNftComponent } from './pages/nft/create/create.component';
import { DetailsNftComponent } from './pages/nft/details/details.component';

import { UsersService } from './services/users.service';
import { CollectionComponent } from './pages/collection/collection.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    StoreComponent,
    NftItemListComponent,
    ComingSoonComponent,
    NotFoundComponent,
    CreateNftComponent,
    DetailsNftComponent,
    CollectionComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
