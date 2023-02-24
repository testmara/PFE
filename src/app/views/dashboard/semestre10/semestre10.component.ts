import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre10',
  templateUrl: './semestre10.component.html',
  styleUrls: ['./semestre10.component.scss']
})
export class Semestre10Component {
  displayedColumns = ['UE',	'CC',	'TP',	'Partiel1',	'Partiel2',	'Projet',	'Rapport',	'Expose',	'Stage', 'Coef', 'NoteFinale'];
  dataSource = ELEMENT_DATA;
}

export interface Semestre10Details {
  UE: string;
  CC: number | null;
  TP: number | null;
  Partiel1: number | null;
  Partiel2: number | null;
  Projet: number | null;
  Rapport: number | null;
  Expose: number | null;
  Stage: number | null;
  Coef: number | null;
  NoteFinale: number | null;
  isUE?: boolean
}

const ELEMENT_DATA: Semestre10Details[] = [
   { UE:'M.E. Stage de Fin d\'Études', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
   { UE:'Stage de fin d\'études', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},

 ];

