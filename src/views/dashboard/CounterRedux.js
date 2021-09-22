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