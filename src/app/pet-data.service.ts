import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { Pet } from './pets';
import { CatalogJson } from './json-structure';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {
  private petsUrl = 'http://localhost:8080/api/pets'; // URL to web api

  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<CatalogJson>(this.petsUrl).pipe(
      map((data: CatalogJson) => data._embedded.pets) // Define the type for 'data'
    );
  }

  getPet(id: number): Observable<Pet> {
    const url = ${this.petsUrl}/${id};
    return this.http.get<Pet>(url); // Ensure that the correct URL is constructed
  }
}
