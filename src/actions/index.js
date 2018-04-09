// export all of the actions from here...
import {GET_ALL_LIST,POST_TASK,UPDATE_TASK,DELETE_TASK} from "../const";

    export const getTasks = (tasks) => ({type: GET_ALL_LIST, tasks});
    export const addTask = (task) => ({type: POST_TASK, task});
    export const changeStatus = (task) => ({type: UPDATE_TASK, task});
    export const taskDelete = (task) => ({type: DELETE_TASK, task});


