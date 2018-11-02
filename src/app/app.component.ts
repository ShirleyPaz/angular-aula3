import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { map, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-aula2';
  valorAtual = 0;

  constructor(public counterService: CounterService) {
    const observable = counterService.valorDoContador
    // counterService.valorDoContador
      .pipe(
        // debounceTime(1000),
        map(v => v * 2)
      )
      .subscribe(value => {
        this.valorAtual = value;
        console.log(value + ' app')
        if (value > 10) {
          observable.unsubscribe();
        }
      });
  }
}

