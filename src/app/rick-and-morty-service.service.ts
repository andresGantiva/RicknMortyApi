import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {

  private apiUrl= 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

}
