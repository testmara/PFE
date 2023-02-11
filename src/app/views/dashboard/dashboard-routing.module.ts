import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ButtonsComponent} from "../buttons/buttons/buttons.component";
import {TestComponent} from "./test/test.component";
import {SuiviTOEICComponent} from "./suivi-toeic/suivi-toeic.component";
import {SuiviSMIComponent} from "./suivi-smi/suivi-smi.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons'
      },
      {
        path: 'butto',
        component: TestComponent,
        data: {
          title: 'Butto'
        },
      },
      {
        path: 'suivitoeic',
        component: SuiviTOEICComponent,
        data: {
          title: 'suivitoeic'
        },
      },
      {
        path: 'suivismi',
        component: SuiviSMIComponent,
        data: {
          title: 'suivismi'
        },
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
