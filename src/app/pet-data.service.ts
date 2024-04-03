import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pets';
import { catalog } from './catalog-data';
@Injectable({
  providedIn: 'root'
})
export class PetDataService {
  private pets: Pet[] = [];
  private static readonly IMAGE_FOLDER = 'assets/Images/pets/';

  constructor() {
    this.pets = catalog._embedded.pets.map(petData => this.jsonToPet(petData));
  }

  private jsonToPet(petJson: any): Pet {
    return {
      id: petJson.id,
      name: petJson.name,
      petKind: petJson.petKind,
      age: petJson.age,
      image: `${PetDataService.IMAGE_FOLDER}${petJson.image}`,
      ownerId: petJson.ownerId
    };
  }

  public getPetList(): Observable<Pet[]> {
    return of(this.pets);
  }

  public getPet(id: number): Observable<Pet | undefined> {
    const pet = this.pets.find(p => p.id === id);
    return of(pet);
  }
}
