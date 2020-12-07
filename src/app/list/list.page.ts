import { Component, OnInit } from '@angular/core';
import { Disease } from '../disease-item/disease.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  diseases: Disease[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.searchService.getAllDiseases().subscribe(data => {
      this.diseases = data;
    })
  }

}
