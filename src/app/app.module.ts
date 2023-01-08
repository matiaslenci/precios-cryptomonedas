import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//? Locale
import { LOCALE_ID } from '@angular/core';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES); 




import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaPreciosComponent } from './components/tabla-precios/tabla-precios.component';
import { HomePageComponentComponent } from './pages/home-page-component/home-page-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page-component/not-found-page-component.component';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    TablaPreciosComponent,
    HomePageComponentComponent,
    NotFoundPageComponentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
 {   provide:LOCALE_ID,
    useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
