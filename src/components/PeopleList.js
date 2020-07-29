import React, { Component } from 'react'

export class PeopleList extends Component {
    render() {
        console.log(this.props.people);
        return (
            <div>
                <h3>I am from people list</h3>
            </div>
        )
    }
}

export default PeopleList
