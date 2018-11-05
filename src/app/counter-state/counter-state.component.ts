import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-state',
  templateUrl: './counter-state.component.html',
  styleUrls: ['./counter-state.component.css']
})
export class CounterStateComponent implements OnInit {
  counter$: Observable<number>

  constructor(
    private store: Store <number>) { 
    this.counter$ = this.store.select<number>('counter')

  }

  ngOnInit() {
  }

  storeIncrement() {
    this.store.dispatch({ type: 'INCREMENT'});
  }

  storeDecrement() {
    this.store.dispatch({ type: 'DECREMENT'});
  }

}
