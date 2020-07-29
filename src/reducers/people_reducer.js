// fucntions with states and actions
// basically actions and handlers
// returns a new state
const people = {}

export default function people_reducer(state=people, action) {
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