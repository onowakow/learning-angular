import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  private getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add (name: string) {
    this.heroService
      .createHero(name)
      .subscribe(hero => this.heroes.push(hero));
  }

  rename (hero: Hero) {
    const newHero = { id: hero.id, name: 'Pricezog' };

    this.heroService
      .editHero(hero.id, newHero)
      .subscribe(
        () => {
          const existingHero = this.heroes
            .find(hero => hero.id)!
            .name = 'Pricezog';
        }
      )
  }

  remove(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(
      () => {
        this.heroes = this.heroes.filter(selected => selected !== hero)
      }
    );
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
