import { TodosEffects } from './shared/store/todos.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todosReducer } from './shared/store/todos.reducers';
import { TodoComponent } from './todo.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',  component: TodoComponent, children: [
          {
            path: ':id', component: TodoListComponent
          },
          {
            path: '', component: TodoListComponent
          },
        ]
      }
    ]),
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [],
  declarations: [
    TodoComponent,
    TodoListComponent
  ]
})
export class TodoModule { }