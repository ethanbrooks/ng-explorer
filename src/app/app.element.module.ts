
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {ExplorerComponent} from './explorer.component';


import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxFileManagerModule } from 'devextreme-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ExplorerComponent
  ],
  imports: [

    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: ExplorerComponent, pathMatch: 'full'},
    ]),

    TransferHttpCacheModule,
    DxFileManagerModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [ExplorerComponent],
//  bootstrap: [ExplorerComponent]
})

export class AppElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(ExplorerComponent, { injector });
    customElements.define('app-explorer', myElement);
  }
  ngDoBootstrap() {}
}


