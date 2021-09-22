import React, { Component } from 'react';
// import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions';

// // ACTION
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };

// // REDUCER
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//     }
// };

// let store = createStore(counter)
// store.subscribe(() => console.log(store.getState()))

// // DISPATCH
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement ())

const CounterRedux = () => {

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    // render() {


    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {
                isLogged ?
                    <p>True</p> : 
                    <p>False</p>
            }
            <div>
                <button >INCREMENT BY 1</button>
            </div>
            <div>
                <button >DECREMENT BY 1</button>
            </div>
            <button >RESET</button>
        </div>
    );
    // }
}
export default CounterRedux;

// REDUX
/*
* 1. Configure index.js as bellow
        import { createStore } from 'redux';
        import allReducer from './reducer'
        import { Provider } from 'react-redux'

        const store = createStore(
            allReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );

* 2. Create action 
        export const increment = (nr) => {
            return {
                type: 'INCREMENT',
                payload: nr
            }
        }
        export const decrement = () => {
            return {
                type: 'DECREMENT'
            }
        }


* 3. Create reducer
        index -->
        import counterReducer from "./counter";
        import loggedReducer from "./isLogged";

        import {combineReducers} from 'redux'

        const allReducer = combineReducers({
            counter: counterReducer,
            isLogged: loggedReducer,
        });
        export default allReducer;

        reducer/counter -->
        const counterReducer = (state = 0, action) => {
            switch (action.type) {
                case 'INCREMENT':
                    // return state + 1
                    return state + action.payload
                case 'DECREMENT':
                    return state - 1
                default:
                    return state
            }
        };
        export default counterReducer;

        reducer/isLogged -->
        const loggedReducer = (state = false, action) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return !state
                default:
                    return state
            }
        }
        export default loggedReducer


* 4. dispatch action from Component

        import { useSelector, useDispatch } from 'react-redux'
        import { increment, decrement } from '../../actions';

        const CounterRedux = () => {

            const counter = useSelector(state => state.counter)
            const isLogged = useSelector(state => state.isLogged)
            const dispatch = useDispatch()

            return (
                <div className="App">
                    <h1>Counter {counter}</h1>
                    <button onClick={() => dispatch(increment(5))}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    {
                        isLogged ?
                            <p>True</p> : 
                            <p>False</p>
                    }
                </div>
            );
        }
        export default CounterRedux;

*/