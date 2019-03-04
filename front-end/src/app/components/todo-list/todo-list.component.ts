import { Component, OnInit } from '@angular/core';
import { TodoState,State} from '../../shared/store/todos.reducers';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { Todo } from '../../shared/models/todo.model';
import { Store, select } from '@ngrx/store';
import * as todosAction from '../../shared/store/todos.actions'
import { v4 as uuid } from 'uuid';
import { todoListSelector, selectedTodoSelector } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.pipe(
    select(todoListSelector));
   
  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector))
  
  public message: string;
  public selectedTodo: Todo;
 
  constructor(private store: Store<State>) {}
 
 
  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }
 
  public addTodo() {
    this.store.dispatch(new todosAction.CreateTodo(
      { message: this.message, done: false, id: uuid() })
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
