// a reducer is a pure function that takes state and an action obj
// it will return us a new state based on the action obj type
let lastId = 0;

function reducer(state = [], action) {
    switch (action.type) {
        case "pokemonAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                }
            ]
        case "pokemonRemoved":
            return state.filter(pokemonObj => pokemonObj.id != action.payload.id )
        default:
            return state;
    }
}

export default reducer



