import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  constructor(private route: ActivatedRoute,
    private heroeService:HeroesService) { }

  ngOnInit(): void {
    this.route.params.pipe( switchMap( ({id}) => this.heroeService.getHeroePorId(id)) ).subscribe(h =>this.heroe);
  }

}
