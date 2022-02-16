import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'async';

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000)
  })

  private setTitle = () => {
    const timestamp = new Date().getSeconds();
    this.title = `Hello Angular (${timestamp})`;
  }

  private onComplete() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(null);
      }, 2000);
    })
  }

  constructor(){
    this.title$.subscribe(this.setTitle)
  }
}
