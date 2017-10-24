import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http"
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BookService } from "./services/book.service";
import { HeroService, HERO_REST_URL } from "./services/hero.service";
import { TableComponent } from './heroes/table/table.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    DashboardComponent,
    HeroesComponent,
    TableComponent,
    HeroDetailComponent
  ],
  exports: [
    DashboardComponent,
    HeroesComponent,
  ],
  providers: [
    BookService,
    HeroService,
    { provide: HERO_REST_URL, useValue: "http://localhost:3500/" }]
})
export class PagesModule { }
