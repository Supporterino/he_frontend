import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLProviderService } from './urlprovider.service';
import {AutoCompleteService} from 'ionic4-auto-complete';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignsService implements AutoCompleteService {

  constructor(private http: HttpClient, private provider: URLProviderService) { }

  getAllSigns() {
    return this.http.get<string[]>(this.provider.signs);
  }

  getResults(keyword:string) {
    if (!keyword) { return false; }

    return this.http.get<string[]>(this.provider.signs).pipe(map(
       (result: string[]) => {
          return result.filter(
             (item) => {
                return item.toLowerCase().startsWith(
                   keyword.toLowerCase()
                );
             }
          );
       }
    ));
 }
}
