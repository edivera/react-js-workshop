import React, { Component } from 'react';
import {personDetail} from '../actions/index';
import {connect} from 'react-redux';

export class PersonDetail extends Component {

    componentDidMount() {
        //this.props.name
        console.log(this.props.match.params.name);
        this.props.personDetail(this.props.match.params.name);
    }
    
    render() {
        return (
            <div>
                {console.log(this.props.personProfile)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        personProfile:state.details.personDetailPayload
    }
}

export default connect(mapStateToProps, {personDetail})(PersonDetail)
