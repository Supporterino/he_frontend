import { Component, OnInit } from '@angular/core';
import { SignsService } from '../services/signs.service';
import { SearchService } from '../services/search.service';
import { FormGroup, Validators, FormControl } from '@angular/forms'
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
  rawSigns: string[] = [];
  signs: string[] = [];

  constructor(public signsService: SignsService, private searchService: SearchService) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      sign: new FormControl('', [
        Validators.required
      ])
    });
  }

  ionViewWillEnter() {
    this.selectedSigns = new Set<string>();
    this.diseases = [];
    this.signsService.getAllSigns().subscribe(data => this.rawSigns = data);
  }

  initSigns() {
    this.signs = this.rawSigns;
  }

  searchList(event) {
    this.initSigns();
    const val = event.target.value;
    if (val && val.trim != '') {
      this.signs = this.signs.filter(e => {
        return (e.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.signs = [];
    }
  }

  select(val) {
    this.selectedSigns.add(val);
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
