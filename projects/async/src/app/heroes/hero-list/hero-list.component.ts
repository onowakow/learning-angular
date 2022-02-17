import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, map, takeUntil, Observable } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  constructor(private heroService: HeroService) {}

  private heroSub = new Subject();

  private getHeroes() {
    this.heroes$ = this.heroService.getHeroes();
  }

  add(name: string) {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));
  }

  rename(hero: Hero) {
    const newHero = { id: hero.id, name: 'Pricezog' };

    this.heroService.editHero(hero.id, newHero).subscribe(() => {
      const existingHero = (this.heroes.find((hero) => hero.id)!.name =
        'Pricezog');
    });
  }

  remove(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((selected) => selected !== hero);
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy() {
    this.heroSub.next(null);
    this.heroSub.complete();
  }
}
