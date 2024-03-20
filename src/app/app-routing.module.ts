import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiComponent } from './outil-guidage/bi/bi.component';
import { DmComponent } from './outil-guidage/dm/dm.component';
import { PmComponent } from './outil-guidage/pm/pm.component';
import { GlobalComponent } from './outil-guidage/global/global.component';

const routes: Routes = [
  { path: '/bonjour', component: BiComponent  },
  { path: '/dm', component: DmComponent },
  { path: '/pm', component: PmComponent },
  { path: '/mm', component: GlobalComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
