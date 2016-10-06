import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, FILTER_TASK } from '../actions/index';

let filterStatus = -1;

//initial state is array because we want list of city weather data
export default function(state = [], action) {
    // console.log('Action received', action);

    const toggling = function (t, action) {
        if(t.id !== action)
            return t;

        return Object.assign({}, t, {
            status: !t.status
        })
    };

    const visibility = function(t, action) {
        return Object.assign({}, t, {
            visible: action === -1 ? true : t.status == action
        })
    };

    switch(action.type) {
        case ADD_TASK : 
            //return state.concat([ action.payload.data ]); //in redux reducer dont modify the state, instead create a new one baesd on old one. Here concat is create a new of old one and add a new data
            return [ action.payload, ...state];
        case TOGGLE_TASK :
            return state.map(s => toggling(s, action.payload)).map(t => visibility(t, filterStatus));
        case REMOVE_TASK :
            return state.filter(s => { return (s.id != action.payload) } );
        case FILTER_TASK :
            filterStatus = action.payload;

            return state.map(t => visibility(t, action.payload));
    }
    return state;
}
