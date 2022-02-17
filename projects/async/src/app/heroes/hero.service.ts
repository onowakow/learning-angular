import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private http: HttpClient) { }

  private heroesUrl = 'api/heroes';

  createHero(name: string): Observable<Hero> {
    const hero = { name };
    return this.http.post<Hero> (this.heroesUrl, hero);
  }

  editHero(id: number, hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + "/" + id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + "/" + id)
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]> (this.heroesUrl)
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      )
  }


}
