import { Component, OnInit } from '@angular/core';
import { PetDataService } from '../pet-data.service';
import { Pet } from '../pets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petDataService: PetDataService, private router: Router) {}

  ngOnInit(): void {
    this.petDataService.getPets().subscribe((data: Pet[]) => {
      this.pets = data;
    });
  }

  selectPet(pet: Pet): void {
    this.router.navigate(['/petdetail', pet.id]);
  }
}
