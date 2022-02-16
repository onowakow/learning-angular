import { Injectable } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

@Injectable()

export class HeroDetailService {
  private hero!: Hero;

  constructor(private heroService: HeroService) { }

  getHero(id: number): Hero {
    const heroes: Hero[] = this.heroService.getHeroes()
    if (!this.hero) {
      const hero = heroes.find(hero => hero.id === id)
      if (hero !== undefined) {
        this.hero = hero
      }
    }
    return this.hero;
  }

}
