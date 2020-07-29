// actions are lamda functions
// or handlers for the reducers
export const getPeople = () => {

    const peopleData = fetch('http://localhost:3004/people')
        .then(res => res.json());

    return {
        type:"GET_PEOPLE",
        payload: peopleData
    }
}