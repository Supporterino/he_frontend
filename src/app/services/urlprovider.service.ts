import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLProviderService {

  constructor() { }

  private url = 'http://webhost:9119';
  signs = `${this.url}/api/signs`;
  search = `${this.url}/api/possible_disease`;
  diseases = `${this.url}/api/get_disease`;
  createDisease = `${this.url}/api/new_disease`;
  updateDisease = `${this.url}/api/update`;
}
