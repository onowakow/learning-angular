import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Hero } from '../heroes/hero.model'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() name: string = '';

  @Output() liked = new EventEmitter();

  heroes: Hero[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const hero = changes['name'];
    if (!hero.isFirstChange()) {
      const oldValue = hero.previousValue;
      const newValue = hero.currentValue;
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }
}
