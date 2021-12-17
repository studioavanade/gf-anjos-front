import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../rootReducer";

import monitorReducersEnhancer from "../enhancers/monitorReducer";
import loggerMiddleware from "../middleware/logger";

export default function configureStore(preloadedState: any) {
  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    composeWithDevTools;

  const middlewares = [loggerMiddleware, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeEnhancers(...enhancers);

  const store: Store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../rootReducer", () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
