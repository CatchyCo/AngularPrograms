import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iconcept } from '../assets/Data/Iconcept'

@Injectable({
  providedIn: 'root'
})
export class ConceptListService {

  url = '../assets/Data/conceptList.json';
  Iconcept: Iconcept;
  constructor(public http: HttpClient) { }

  getConceptList(): Observable<Iconcept[]> {
    return this.http.get<Iconcept[]>(this.url)
  }
}
