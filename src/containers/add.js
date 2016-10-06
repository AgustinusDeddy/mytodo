import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        //bind 'this' ke function supaya this di function refer to searchBar
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }
    
    onFormSubmit(event) {
        event.preventDefault(); //dont submit the form

        this.props.addTask(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" autoComplete="off">
                <input 
                    value={this.state.term}
                    placeholder="Add a new task."
                    className="form-control"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-success">Add <i className="glyphicon glyphicon-plus"></i></button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addTask }, dispatch);
}

export default connect (null, mapDispatchToProps)(Add);