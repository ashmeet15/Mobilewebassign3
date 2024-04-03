import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetDataService } from '../pet-data.service';
import { Pet } from '../pets';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet?: Pet;

  constructor(
    private petDataService: PetDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.petDataService.getPet(id).subscribe(
          (pet) => {
            this.pet = pet;
          },
          error => console.error('Error fetching pet:', error)
        );
      }
    });
  }
}
