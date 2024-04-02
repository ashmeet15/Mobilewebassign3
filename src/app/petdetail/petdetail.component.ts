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
  pet: Pet | undefined;

  constructor(private route: ActivatedRoute, private petDataService: PetDataService) { }

  ngOnInit(): void {
    const petId = +this.route.snapshot.paramMap.get('id')!;
    this.petDataService.getPetById(petId).subscribe(data => {
      this.pet = data;
    });
  }
}
