import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
// const { createSlice } = pkg

let initialState = {
    listOfPokemon: [],
    status: "idle",
    error: null
}

// {
//     type: "pokemonAdded",
//     try {
//         async stuff
//     } catch (error) {
        
//     }
//     payload: {
//         outcome of the asyncfuntion
//     }
// }

export const pokemonAdded = createAsyncThunk(
    "pokemon/pokemonAdded",
    async ( pokemonName, { rejectWithValue } ) => {
        try {
            const response = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            return { id: response.data.id, name: response.data.name }
        } catch (error) {
           return rejectWithValue(error.response.data) 
        }
    }
)

//create a slice
const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        // reducer func to create pokemon
        pokemonRemoved: (state, action) => {
            return state.filter(pokemonObj => pokemonObj.id != action.payload.id )
        }
    },
    extraReducers: builder => {
        builder.addCase(
            pokemonAdded.pending, state => {
                state.status = "loading"
            }
        )
        .addCase(
            pokemonAdded.fulfilled, (state, action) => {
                state.status = "success"
                state.listOfPokemon.push(action.payload)
            }
        )
        .addCase(
            pokemonAdded.rejected, state => {
                state.status = "rejected"
            }
        )
    }
})


export const { pokemonRemoved } = pokemonSlice.actions
export default pokemonSlice.reducer