//Redux store - One store for the whole app
/* uses of store 

-Hold application state
- access to state via getState()
-update state via dispatch
-Listening using subscribe(listener)
-Handles unregistering of listeners via the function returned by subscribers(listener)
/*
/*

/*
A store that holds the state of your application
An action that describe the changes in the application.
A reducer that actually carries out the state transition depending on the action
A reducer ties the store and actions together

Principles
Maintain our application state in a single object which would be managed by the Redux store

e.g. { numberOfCakes: 10}

To update the state of your app, you need to let Redux know about that with an action
Not allowed to directly update the state object
e.g. action is BUY_CAKE

{type:BUY_CAKE}

You have to write pure reducers to specify how the state tree is transformed

Reducer - (previousState, action) => newState

const reducer = (state,action) =>{
    switch (action.type) {
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes -1
        }
    }
}

Actions
The only way to intercact with a store
they have a type property


*/

//action
/*
{
    type: BUY_CAKE;
    info: 'First Redux Action'
}
*/



//Middle ware
/*
- Is the suggested way to extend Redux with custom functionality
- It's an extension point between displatching an action, and the moment t reaches the reducer.
- Use middleware for logging, crash reporting, performing async tasks 


//Async actions in redux

state = {
    loading:true,
    data:[],
    error:''
}

//Loading - displays a loading spinner
//data- e.g. a list of users
//display error to the user

//Actions 
FETCH_USERS_REQUEST - Fetch list of users
FETCH_USERS_SUCCESS - Fetched successfully
FETCH_USERS_FAILURE - Error fetching the data

//Reducers 
case: FETCH_USERS_REQUEST
      loading:true
case: FETCH_USERS_SUCCESS
      Loading:false
      users:data(from API)
case: loading:false
      error: error (from API)


Async action creators
axios - request to an api endpoint

Redux Thunk - middleware
For defining action creators


Async actions with Redux *********
- Fetches a list of users from an API end point and stores it in the redux store

State ----
state = {
    loading:true,
    data:[],
    error:''
}

loading: Display a loading spinner in your component
data: List of users
error: Display error to the user

Actions----

FETCH_USERS_REQUEST - Fetch lists of users
FETCH_USERS_SUCCESS - Fetch successfully
FETCH_USERS_FAILURE - Error fetching the data

Reducer ----
case: FETCH_USERS_REQUEST
     loading: true
case: FETCH_USERS_SUCCESS
    loading: false
    users: data (from API)
case: FETCH_USERS_FAILURE
    loading: false
    error:error (from API)

Steps to follow when displaying users using react redux *******
1. Add Thunk middleware in store.js - so that an action creator can return a function instead of an action
2. Create your action creators - userAction.js
3. These actions are then handled by the reducer, which handles the Redux state
4.  User Container - When the state is updated, the subscribed component 
    will receive the updated state

    - to learn more -- Redux,axios middleware
    -Redux persisst npm package

