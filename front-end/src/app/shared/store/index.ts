import * as routerReducer  from '@ngrx/router-store';
import { RouterStateUrl } from './router.helper';
import * as todosReducer from './todos.reducers';
import { ActionReducerMap } from '@ngrx/store';

 


export interface State {
  todos: todosReducer.TodoState;
  router: routerReducer.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  todos: todosReducer.todosReducer,
  router: routerReducer.routerReducer
};