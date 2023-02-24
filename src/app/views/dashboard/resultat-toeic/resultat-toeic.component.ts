import { Component } from '@angular/core';

@Component({
  selector: 'app-resultat-toeic',
  templateUrl: './resultat-toeic.component.html',
  styleUrls: ['./resultat-toeic.component.scss']
})
export class ResultatToeicComponent {

  displayedColumns = [	'Date', 'Score',	'Remarque'];
  dataSource = ELEMENT_DATA;
}

export interface ToeicDetails {
  StudentNumber: number;
  Score: number;
  Date: string;
  Remarque: string;
}

const ELEMENT_DATA: ToeicDetails[] = [
  { StudentNumber: 11808943, Score: 700, Date: '06/02/2023', Remarque: 'Very Good'},
];

