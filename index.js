const redux = require('redux');
const reduxLogger = require('redux-logger');
//import { logger } from 'redux-logger';

const createStore = redux.createStore;
const combinedReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();



const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';



//action creator that returns an action

function buyCake() {
    return (
        {
            type: BUY_CAKE,
            info: 'First Redux Action'
        }
    )
}

function buyIcecream() {
    return (
        {
            type: BUY_ICECREAM,
            info: 'First Redux Action'
        }
    )
}


//Reducer (previousState, action) => newState

//current state
const  initialCakeState = {
    numOfCakes: 10
}

const  initialIcecreamState = {
    numOfIcecreams: 30
}

//reducer

const cakeReducer = (state = initialCakeState, action) => {

        switch(action.type){
            case BUY_CAKE: return {
                ...state, //make a copy of the state object
                numOfCakes: state.numOfCakes -1
            }
            default: return state
        }
}

const icecreamReducer = (state = initialIcecreamState, action) => {

    switch(action.type){
        case BUY_ICECREAM: return {
            ...state, //make a copy of the state object
            numOfIcecreams: state.numOfIcecreams -1
        }
        default: return state
    }
}

//store implementation
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState());
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())) //listening
const unsubscribe = store.subscribe(() => {}) //listening
store.dispatch(buyCake()) // buy 1 cake
store.dispatch(buyCake())// buy 1 cake
store.dispatch(buyCake())// buy 1 cake
store.dispatch(buyIcecream())// buy 1 icecream
store.dispatch(buyIcecream())// buy 1 icecream
unsubscribe()





