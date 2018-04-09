// use this reducer for your todo list reducer...
import {GET_ALL_LIST,POST_TASK,UPDATE_TASK,DELETE_TASK} from "../const"
const initialState = {}
   
const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LIST:
          return Object.assign({}, state, {tasks: action.tasks.objects});
        case POST_TASK:
          let updatedTasks = [action.task].concat(state.tasks);
          return Object.assign({}, state, {tasks: updatedTasks});
        case UPDATE_TASK:
          let newArr = state.tasks.map((task) => {
            if(task.slug === action.task.slug) task.metafields[0].value = !task.metafields[0].value;
            return task;
          });
          return Object.assign({}, state, {tasks: newArr});
        case DELETE_TASK:
          let arr = state.tasks.filter((task) => {
            return !(task.slug === action.slug);
          });
          return Object.assign({}, state, {tasks: arr});
        default:
          return state;
      }
}

  
  export default ListReducer;