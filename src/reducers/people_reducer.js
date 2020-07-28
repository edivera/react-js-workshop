// fucntions with states and actions
// basically states and handlers
// returns a new state
const people = {}

function people_reducer(state=people, action) {
    switch(action.type) {
        case "GET_PEOPLE":
            return {
                ...state,
                getPeople:action.payload
            }
        default:
            return state;
    }
}