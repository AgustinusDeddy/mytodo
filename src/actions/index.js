export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FILTER_TASK = 'FILTER_TASK';

let todoId = 1;

export function addTask(task) {

    let todo = {
        id: todoId++,
        name: task,
        status: 0,
        visible: true
    };

    return {
        type: ADD_TASK,
        payload: todo
    };
}

export function toggleTask(id) {
    return {
        type: TOGGLE_TASK,
        payload: id
    };
}

export function removeTask(id) {
    return {
        type: REMOVE_TASK,
        payload: id
    };
}

export function filterTask(id) {
    return {
        type: FILTER_TASK,
        payload: id
    };
}