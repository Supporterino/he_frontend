import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLProviderService } from './urlprovider.service';
import { Disease } from '../disease-item/disease.model';
import { ResponseMessage } from './response.model';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private provider: URLProviderService) { }

  getPossibleDiseases(keys: string[]) {
    return this.http.post<Disease[]>(this.provider.search, { signs: keys });
  }

  getAllDiseases() {
    return this.http.get<Disease[]>(this.provider.diseases);
  }

  sendNewDisease(newElement: Disease) {
    return this.http.post<ResponseMessage>(this.provider.createDisease, newElement);
  }

  updateDisease(updatedElement: Disease) {
    return this.http.post<ResponseMessage>(this.provider.updateDisease, updatedElement);
  }
}
