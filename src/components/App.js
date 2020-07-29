import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../actions/index';
import PeopleList from './PeopleList';

class App extends Component {

    componentDidMount() {
        this.props.getPeople();
        // dispatches the action, which is
        // handled by the reducer.
    }

    render() {
        return (
            <div>
                <PeopleList/>
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

export default connect(mapStateToProps, {getPeople})(App);
// these enhancers are just wrappers that add
// functionality to the classes or objects they
// wrap. So in this case, it's adding something to
// catch after dispatching the action.

// It is caught and allPeople is set to the getPeople
// in ther reducer, which is just the payload from
// the action.

// This registers the action getPeople to the
// reducer using the store we created in index
// and the store is available to the App class.
// And it does so by making it a property of
// App.