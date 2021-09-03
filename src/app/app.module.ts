import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule,
    CommonModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'juros-simples', component: JurosSimplesComponent},
        {path: 'juros-composto', component: JurosCompostoComponent}
      ]
    )
  ],
  declarations: [ AppComponent, NavBarComponent, HomeComponent, JurosSimplesComponent, JurosCompostoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }