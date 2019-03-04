import { ActionReducerMap} from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as todosAction from './todos.actions'


const initialState = {
    data: null,
    loading: false,
    loaded: false,
    error: null
};


export interface TodoState {
    data: Todo[];
    loading: boolean,
    loaded: boolean,
    error: any
}


export interface State {
 todos: TodoState;
}

export function todosReducer( state: TodoState = initialState, action: todosAction.TodosActionType ): TodoState {
    switch (action.type)  {
        case todosAction.FETCH_TODO :
        return {
          ...state,
          loading: true
        };
        case todosAction.FETCH_TODO_SUCCESS :
        return {
          ...state,
          data: action.payload,
          loading: false,
          loaded: true,
          error: null
        };
        case todosAction.FETCH_TODO_ERROR :
        return {
          ...state,
          loading: false,
          loaded: true,
          error: action.payload
        };
      

        case todosAction.TODO_CREATE:
        return {
            ...state,
            data: [...state.data, action.payload]
        };
        case todosAction.TODO_DELETE :
        return {
            ...state,
            data: state.data.filter ((t,i) => i !== action.payload)
        };

        case todosAction.TODO_TOGGLE :
                const selectedTodo = state.data[action.payload]
                selectedTodo.done = !selectedTodo.done;
                const newTodos = [...state.data];
                newTodos[action.payload] = selectedTodo;
                return {
                    ...state,
                    data: newTodos
                }
                default:
            return state   
    };
         
}








export const reducers: ActionReducerMap<State> = {
 todos: todosReducer
};

