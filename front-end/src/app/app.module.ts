import { MyRouterStateSerializer } from './shared/store/router.helper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { TodoService } from './shared/services/todo.service';
import { StoreModule } from '@ngrx/store'
import { reducers } from './shared/store/todos.reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { TodosEffects } from './shared/store/todos.effects';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'to do'
    }),
    EffectsModule.forRoot([TodosEffects]),
    RouterModule.forRoot([
      {
        path: 'todo', component: TodoListComponent
      },
      {
        path: 'todo/:id', component: TodoListComponent
      },
      {
        path: '', redirectTo: 'todo', pathMatch: 'full'
      }
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],

  providers: [TodoService,
  {provide: RouterStateSerializer, useClass: MyRouterStateSerializer}
],
  bootstrap: [AppComponent]
})
export class AppModule { 

}