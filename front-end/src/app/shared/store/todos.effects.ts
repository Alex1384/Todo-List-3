import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FETCH_TODO, FetchTodo, FetchTodoSuccess, FetchTodoError } from './todos.actions';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosEffects {
  @Effect()
  fetchTodo$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_TODO),
    switchMap((fetchTodo: FetchTodo) => this.todoService.getTodos()),
    map((todos: Todo[]) => new FetchTodoSuccess(todos)),
    catchError((err: any) => of(new FetchTodoError(err)))
  );

  constructor(private todoService: TodoService, private actions$: Actions) {}
}