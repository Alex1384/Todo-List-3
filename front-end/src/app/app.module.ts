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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'to do'
    }),
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}