import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre6',
  templateUrl: './semestre6.component.html',
  styleUrls: ['./semestre6.component.scss']
})
export class Semestre6Component {
  displayedColumns = ['UE',	'CC',	'TP',	'Partiel1',	'Partiel2',	'Projet',	'Rapport',	'Expose',	'Stage', 'Coef', 'NoteFinale'];
  dataSource = ELEMENT_DATA;
}

export interface Semestre6Details {
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

const ELEMENT_DATA: Semestre6Details[] = [
  { UE:'M.E. Langues Vivantes 6', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Culture d\'Entreprise 6', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Télécommunications et Signal 1', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Lignes Guides Fibres optiques', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Théorie du Signal', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Outils de base pour l\'ingénieur 2', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Mathématiques', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Probabilités et statistiques', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Réseaux 1', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Web 1', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Réseaux de Transmission de Données 1', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Outils informatiques', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Informatique Langage C', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Micro-Contrôleurs', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Projet thématique', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Projet Thématique', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},

];
