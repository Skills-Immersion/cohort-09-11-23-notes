import store  from "./store.js";
import { pokemonAdded, pokemonRemoved } from "./pokemon.js";

function logState() {
    console.log("current State", store.getState());
}

store.subscribe(logState)

async function catchThemAll() {
    console.log("adding eevee");
    await store.dispatch(pokemonAdded("eevee"));
    await store.dispatch(pokemonAdded("gengar"));
}


catchThemAll()



// // import { createStore } from "redux";
// import reducer from "./reducer.js"
// import createStore from "./customStore.js";


// createStore.state = "pie"

// let unsub = createStore.subscribe(() => {
//     console.log("store updated");
// })

// createStore.dispatch({
//     type: "pokemonAdded",
//     payload: {
//         name: "eevee"
//     }
// })

// unsub()

// createStore.dispatch({
//     type: "pokemonAdded",
//     payload: {
//         name: "Gengar"
//     }
// })

// console.log(createStore.getState());

// // const store = createStore(reducer)

// // let unsubscribe = store.subscribe( () => {
// //     console.log("store updated");
// // })

// // store.dispatch({
// //     type: "pokemonAdded",
// //     payload: {
// //         name: "eevee"
// //     }
// // })

// // unsubscribe()

// // store.dispatch({
// //     type: "pokemonAdded",
// //     payload: {
// //         name: "gengar"
// //     }
// // })

// // store.dispatch({
// //     type: "pokemonRemoved",
// //     payload: {
// //         id: 1
// //     }
// // })

// // console.log(store.getState());