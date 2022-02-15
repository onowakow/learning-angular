import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public hero: string = 'Boothstomper';

  onClick(): void {
    this.hero = 'Beezlebub';
    window.alert(`You liked ${this.hero}`)
  }
}
