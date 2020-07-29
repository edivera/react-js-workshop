import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

export class PeopleList extends Component {
    
    renderPeople = () => {
        if(this.props.people !== undefined) {
            return this.props.people.map(person => {
                return(
                    <Link to={`/${person.name}`} key={person.id} className="singleProfilePicContainer" >
                        <img className="profilePic" src={`Albums/${person.name}/${person.profile_pic}.jpeg`} />
                        <div>
                            <h1 className="info">{person.name}</h1>
                            {
                                person.online_status === "on" &&
                                    <img className="live" src="Albums/live.svg" />
                            }
                        </div>
                    </Link>
                )
            });
        }
    }
    
    render() {
        console.log(this.props.people);
        return (
            <div>
                {this.renderPeople()}
            </div>
        )
    }
}

export default PeopleList
