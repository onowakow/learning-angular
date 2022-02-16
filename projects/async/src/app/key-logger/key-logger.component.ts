import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {
  keys: string = '';

  @ViewChild('keyContainer', {static: true}) input!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, 'keyup');
    logger.pipe(
      tap((evt: any) => {
      this.keys += evt.key;
    })).subscribe()
  }

}
