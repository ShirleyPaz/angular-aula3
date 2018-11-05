import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BoolPipe } from './bool.pipe';
import { CounterStateComponent } from './counter-state/counter-state.component';

//reducers
import { counterReducer } from './store/reducers/counter'
//importar ngrx para usar a store
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TodoListComponent,
    TodoItemComponent,
    HomeComponent,
    CepDetailsComponent,
    CepExibicaoComponent,
    CepBuscaComponent,
    TodoFormComponent,
    BoolPipe,
    CounterStateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot( { counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
