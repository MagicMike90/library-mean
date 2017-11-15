import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { FlexLayoutModule } from '@angular/flex-layout';

import { reducers, metaReducers } from './reducers';
import { CustomRouterStateSerializer } from './shared/utils';

import { MaterialUiModule } from './material-ui/material-ui.module';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';

import { AuthRoutingModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
// import order matters for NgModules.
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,

    // custom modules
    MaterialUiModule,
    FlexLayoutModule,

    // feature modules
    CoreModule,
    DashboardModule,
    SharedModule,
    AuthRoutingModule,
    AppRoutingModule,

    /**
   * StoreModule.forRoot is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,


    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),


  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
