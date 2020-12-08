import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLProviderService {

  constructor() { }

  private url = 'https://wehe.roth-kl.de';
  signs = `${this.url}/api/signs`;
  search = `${this.url}/api/possible_disease`;
  diseases = `${this.url}/api/get_disease`;
  createDisease = `${this.url}/api/new_disease`;
  updateDisease = `${this.url}/api/update`;
}
