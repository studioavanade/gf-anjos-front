import { Store } from 'redux'
import rootReducer from './rootReducer'
import configureStore from './configure-store/configure-store'

const store: Store = configureStore({
  reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
