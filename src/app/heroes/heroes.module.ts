import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FavoriteHeroesComponent } from './favorite-heroes/favorite-heroes.component';

@NgModule({
  declarations: [HeroListComponent, FavoriteHeroesComponent],
  imports: [CommonModule],
  exports: [HeroListComponent],
})
export class HeroesModule {}
