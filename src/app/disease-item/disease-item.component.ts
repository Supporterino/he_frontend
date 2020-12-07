import { Component, Input, OnInit } from '@angular/core';
import { Disease } from './disease.model';

@Component({
  selector: 'app-disease-item',
  templateUrl: './disease-item.component.html',
  styleUrls: ['./disease-item.component.scss'],
})
export class DiseaseItemComponent implements OnInit {
  @Input() disease: Disease;

  constructor() { }

  ngOnInit() {}

}
