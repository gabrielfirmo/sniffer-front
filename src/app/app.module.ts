import { ListaLogsComponent } from './lista-logs/lista-logs.component';
import { AppRoutingModule } from './app-routing.module';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationModule } from 'jw-angular-pagination';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovoCadastroComponent,
    ListaCadastrosComponent,
    ListaLogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwPaginationModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
