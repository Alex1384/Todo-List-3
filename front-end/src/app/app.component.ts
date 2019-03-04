import { TodoState,State} from './shared/store/todos.reducers';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './shared/models/todo.model';
import { TodoService } from './shared/services/todo.service';
import { Store, select } from '@ngrx/store';
import * as todosAction from './shared/store/todos.actions'
import { map } from 'rxjs/operators'

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public todos$: Observable<Todo[]> = this.store.pipe(
   select('todos'),
   map((todoState: TodoState) => todoState.datas)
 )
 public message: string;

 constructor(private store: Store<State>) {}

 public addTodo() {
   this.store.dispatch(new todosAction.CreateTodo(
     { message: this.message, done: false })
    );
    this.message = '';
 }

 public toggleTodo(index: number) {
   this.store.dispatch(new todosAction.ToggleTodo(index))
 }

 public deleteTodo(index: number) {
   this.store.dispatch(new todosAction.DeleteTodo(index));
 }

}