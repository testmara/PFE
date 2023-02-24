import { Component } from '@angular/core';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.scss']
})
export class TechnicienComponent {
  displayedColumns = ['Colonne1', 'Colonne2'];
  dataSource = ELEMENT_DATA;
}

export interface TechnicienDetails {
  Colonne1: string;
  Colonne2: string;
}

const ELEMENT_DATA: TechnicienDetails[] = [
  {Colonne1: 'Entreprise', Colonne2: 'Thales'},
  {Colonne1: 'Tél. entreprise', Colonne2: '+33 11 11 11 11 11'},
  {Colonne1: 'Email. entreprise', Colonne2: 'contact@gmail.com'},
  {Colonne1: 'Durée de stage', Colonne2: '4 semaines'},
  {Colonne1: 'Sujet de dtage', Colonne2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo. Penatibus et magnis dis parturient. Sed odio morbi quis commodo. Elit eget gravida cum sociis natoque penatibus et magnis dis. Tristique nulla aliquet enim tortor at auctor urna nunc. Adipiscing bibendum est ultricies integer quis. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Felis eget velit aliquet sagittis id consectetur purus. Quis varius quam quisque id diam vel quam elementum. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Magna etiam tempor orci eu. Ante metus dictum at tempor commodo ullamcorper a. Ut pharetra sit amet aliquam id. Amet dictum sit amet justo. Morbi non arcu risus quis varius quam quisque id. Duis at consectetur lorem donec massa. Augue mauris augue neque gravida in fermentum et.'},
  {Colonne1: 'Tuteur de stage', Colonne2: 'Thales'},
  {Colonne1: 'Tél. tuteur de stage', Colonne2: 'contact@gmail.com'},
  {Colonne1: 'Date de soutenance', Colonne2: '01/09/2023'},
  {Colonne1: 'Créneaux de soutenance', Colonne2: '15H'},

];

