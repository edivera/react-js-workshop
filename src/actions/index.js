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

export const personDetail = (name) => {
    const personData = fetch(`http://localhost:3004/people?name=${name}`,
        {method:"GET"})
        .then(res => res.json());

    return {
        type: "PERSON_DETAILS",
        payload: personData
    }
}