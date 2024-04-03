import { Component, OnInit } from '@angular/core';
import { PetDataService } from '../pet-data.service';
import { Pet } from '../pets';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petDataService: PetDataService) {}

  ngOnInit() {
    this.petDataService.getPetList().subscribe(pets => {
      this.pets = pets;
    });
  }
}
