import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import reducerRegistry from './reducerRegistry';
import registerDefaultReducers from './reducers';
import sagaRegistry from './sagaRegistry';
import { registerDefaultSagas } from './sagas';

const { NODE_ENV, REACT_APP_STATE_DRIVER } = process.env;

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    let store;
    let persistedState;

    if(REACT_APP_STATE_DRIVER === "localStorage") {
        persistedState = loadState();
    }

    registerDefaultReducers();
    registerDefaultSagas();

    if(persistedState) {
        // We register additional reducers
        // in case they are needed from preloaded state
        Object.entries(persistedState).forEach(([name, reducer]) => {
            reducerRegistry.register(name, reducer);
        });
    }

    const reducers = reducerRegistry.getReducers();
    const rootReducers = combineReducers(reducers);

    if(persistedState) {
        store = createStore(
            rootReducers,
            persistedState,
            composeWithDevTools(
                applyMiddleware(sagaMiddleware)
            )
        );
    } else {
        store = createStore(
            rootReducers,
            composeWithDevTools(
                applyMiddleware(sagaMiddleware)
            )
        );
    }

    if(REACT_APP_STATE_DRIVER === "localStorage") {
        store.subscribe(throttle(() => {
            saveState(store.getState());
        }, 1000));
    }

    // We set an event listener for the reducer registry
    // So that whenever a new reducer gets added
    // We replace the reducers with the new ones
    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(combineReducers(reducers));
    });

    // We set an event listener for the saga registry
    // So that whenever a new saga gets added
    // We replace the sagas with the new ones
    sagaRegistry.setChangeListener((sagas) => {
        function* allSagas(getState) {
            yield all(sagas);
        }

        sagaMiddleware.run(allSagas);
    });

    if(NODE_ENV !== 'production') {
    console.log('initial state: ', store.getState());
    }

    function* allSagas(getState) {
        yield all(sagaRegistry.getSagas());
    }

    sagaMiddleware.run(allSagas);

    return store;
}

const store = configureStore();

export default store;
