import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { AuthReducer } from './reducers/auth.reducer';
import { FormReducer } from './reducers/form.reducer';
import { BuilderReducer } from './reducers/builder.reducer';

const reducers = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  editing: BuilderReducer,
})

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware( thunk )
  )
)
export type AppDispatch = typeof store.dispatch;
export type DefaultRootState = ReturnType<typeof store.getState>