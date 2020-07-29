const details = {}

export default function details_reducer(state=details, action) {
    switch(action.type) {
        case "PERSON_DETAILS":
            return {
                ...state,
                personDetailPayload:action.payload
            }
        default:
            return state;
    }
}