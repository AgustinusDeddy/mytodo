import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTask, removeTask } from '../actions/index';

const options = ['Pending', 'Done'];

class TodoList extends Component {

    constructor(props) {
        super(props);

    }

    _onSelect (id) 
    {
        this.props.toggleTask(id);
    }

    onRemove(id){
        this.props.removeTask(id);
    }

    renderTask(task) {
        if(task.visible) {
            const name = task.name;
            const status = task.status == 0 ? "Pending" : "Done";
            const defaultOption = status;
            const statusSymbol = task.status == 0 ? "glyphicon glyphicon-exclamation-sign" : "glyphicon glyphicon-ok-sign";
            
            return (
                <tr id={'task-'+task.id} className={task.status == 0 ? 'Pending' : 'Done'} onClick={this._onSelect.bind(this, task.id)} key={name}>
                    <td>{name} <i className={statusSymbol}></i> <i onClick={this.onRemove.bind(this, task.id)} className="glyphicon glyphicon-remove pull-right"></i></td>
                </tr>
            );
        }        
    }

    render(){

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map(this.renderTask, this)}
                    </tbody>
                </table>
                <p>Showing {this.props.tasks.filter(t => {return t.visible == true;}).length} task(s) out of {this.props.tasks.length}</p>
            </div>
        );
    }
}

function mapStateToProps({ tasks }){
    return { tasks };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleTask: toggleTask, removeTask : removeTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);