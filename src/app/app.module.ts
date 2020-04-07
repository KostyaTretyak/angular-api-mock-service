import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiMockModule } from '@ng-stack/api-mock';
import { NgStackFormsModule } from '@ng-stack/forms';
import { ContenteditableModule } from '@ng-stack/contenteditable';

import { AppComponent } from './app.component';
import { SimpleService } from './simple.service';
import { environment } from '../environments/environment';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';

const apiMockModule = ApiMockModule.forRoot(SimpleService, { delay: environment.apiMockHttpDelay, postNoAction: true });

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroesComponent,
    HeroEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgStackFormsModule,
    ContenteditableModule,
    !environment.production && environment.apiMockRun ? apiMockModule : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
