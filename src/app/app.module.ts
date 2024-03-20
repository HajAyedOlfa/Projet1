import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmComponent } from './outil-guidage/pm/pm.component';
import { DmComponent } from './outil-guidage/dm/dm.component';
import { BiComponent } from './outil-guidage/bi/bi.component';
import { GlobalComponent } from './outil-guidage/global/global.component';
import { OutilGuidageComponent } from './outil-guidage/outil-guidage.component';
import { SidebarreComponent } from './outil-guidage/sidebarre/sidebarre.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PmComponent,
    DmComponent,
    BiComponent,
    GlobalComponent,
    OutilGuidageComponent,
    SidebarreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
