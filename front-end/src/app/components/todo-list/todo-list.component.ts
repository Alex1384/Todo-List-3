import { Component, OnInit } from '@angular/core';
import { TodoState,State} from '../../shared/store/todos.reducers';
import { Observable } from 'rxjs';
import { Todo } from '../../shared/models/todo.model';
import { Store, select } from '@ngrx/store';
import * as todosAction from '../../shared/store/todos.actions'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.pipe(
    select('todos'),
    map((todoState: TodoState) => todoState.data)
  )
  public message: string;
 
  constructor(private store: Store<State>) {}
 
 
  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }
 
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
