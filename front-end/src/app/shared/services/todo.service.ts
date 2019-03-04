import { Todo } from './../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {

 constructor() { }

 public getTodos(): Observable<Todo[]> {
   return timer(2000).pipe(
     map( () => [
       {
         message: 'Travailler',
         done: false
       }
     ])
   )
 }
}