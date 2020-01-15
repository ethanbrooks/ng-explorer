import {BrowserModule} from '@angular/platform-browser';``
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxFileManagerModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxFileManagerModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
