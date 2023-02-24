import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ButtonsComponent} from "../buttons/buttons/buttons.component";
import {TestComponent} from "./test/test.component";
import {SuiviTOEICComponent} from "./suivi-toeic/suivi-toeic.component";
import {SuiviSMIComponent} from "./suivi-smi/suivi-smi.component";
import {ScolarFormComponent} from "./scolar-form/scolar-form.component";
import {PromotionComponent} from "./promotion/promotion.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Dashboard`
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: PromotionComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'butto',
        component: TestComponent,
        data: {
          title: 'Butto'
        },
      },
      {
        path: 'student',
        component: DashboardComponent,
        data: {
          title: 'Student'
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
      },
      {
        path: 'scolarform',
        component: ScolarFormComponent,
        data: {
          title: 'Fiche de scolarité'
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
