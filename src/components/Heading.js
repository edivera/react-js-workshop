import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPeople} from '../actions/index';

export class Heading extends Component {
    render() {
        return (
            <div className="home">
                <div className="homeLogo">
                    <h3>Scree</h3>
                </div>

                <form>
                    <input type="text" placeholder="search..." defaultValue="search" onChange={() => {console.log("+++++"); this.props.getPeople(); console.log(this.props.allPeople)}} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        allPeople:state.people.getPeople
    }
}

export default connect(mapStateToProps, {getPeople})(Heading)
