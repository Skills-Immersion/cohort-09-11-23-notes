import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon.js"

const store = configureStore({
    reducer: {
        pokemonReducer
    }
})

export default store