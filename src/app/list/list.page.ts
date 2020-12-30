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
  diseasesStore: Disease[] = [];
  searchTerm = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.searchService.getAllDiseases().subscribe(data => {
      this.diseasesStore = data.sort((a, b) => {
        return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0;
      });
      this.searching();
    });
  }

  searching() {
    this.diseases = this.diseasesStore.filter(item => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }
}
