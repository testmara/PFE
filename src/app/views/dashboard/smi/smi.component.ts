import { Component } from '@angular/core';

@Component({
  selector: 'app-smi',
  templateUrl: './smi.component.html',
  styleUrls: ['./smi.component.scss']
})
export class SmiComponent {

  displayedColumns = ['Remarque'];
  dataSource = ELEMENT_DATA;
}

export interface SuiviSMIDetails {
  Remarque: string | null;
}

const ELEMENT_DATA: SuiviSMIDetails[] = [
  { Remarque: "Lorem ipsum dolor"},

];

