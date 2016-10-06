import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTask } from '../actions/index';

class Filter extends Component {

    constructor(props) {
        super(props);

    }

    screening(id){
        this.props.filterTask(id);
    }

    render(){
        return (
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" onClick={this.screening.bind(this, -1)}>All</button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" onClick={this.screening.bind(this, 0)}>Pending</button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" onClick={this.screening.bind(this, 1)}>Done</button>
                </div>
            </div>
        );
    }
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterTask : filterTask }, dispatch);
}

export default connect (null, mapDispatchToProps)(Filter);