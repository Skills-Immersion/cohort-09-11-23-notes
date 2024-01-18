import reducer from "./reducer.js"

function createStore(reducer) {
    let state;
    let listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        //change store
        state = reducer(state, action)
        //notify the listeners
        for (let index = 0; index < listeners.length; index++) {
            listeners[index]()
        }
    }

    function subscribe(listener) {
        //put new listener in listeners array
        listeners.push(listener)

        //return an unsubscribe
        return function unsubscribe() {
            let index = listeners.indexOf(listener);
            if (index > - 1 ) {
                listeners.splice(index, 1)
            }
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer)