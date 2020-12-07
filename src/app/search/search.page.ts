import { Component, OnInit } from '@angular/core';
import { SignsService } from '../services/signs.service';
import { SearchService } from '../services/search.service';
import {FormGroup, Validators, FormControl } from '@angular/forms'
import { Disease } from '../disease-item/disease.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  myForm: FormGroup;
  selectedSigns: Set<string> = new Set<string>();
  diseases: Disease[] = [];

  constructor(private signsService: SignsService, private searchService: SearchService) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      sign: new FormControl('', [
        Validators.required
      ])
    })
  }

  ionViewWillEnter() {
    this.selectedSigns = new Set<string>();
    this.diseases = []
  }

  submit() {
    this.selectedSigns.add(this.myForm.value.sign);
    this.myForm.reset();
    console.log(this.selectedSigns);
  }

  remove(val) {
    this.selectedSigns.delete(val);
  }

  search() {
    this.searchService.getPossibleDiseases(Array.from(this.selectedSigns)).subscribe(data => {
      this.diseases = data;
      this.selectedSigns = new Set<string>();
    })
  }
}
