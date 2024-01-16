import { createStore } from "redux";
import reducer from "./reducer.js"

const store = createStore(reducer)

let unsubscribe = store.subscribe( () => {
    console.log("store updated");
})

store.dispatch({
    type: "pokemonAdded",
    payload: {
        name: "eevee"
    }
})

unsubscribe()

store.dispatch({
    type: "pokemonAdded",
    payload: {
        name: "gengar"
    }
})

store.dispatch({
    type: "pokemonRemoved",
    payload: {
        id: 1
    }
})

console.log(store.getState());