// actions for the todo list can go here...
import axios from "axios";
import {addTask,getTasks,changeStatus,taskDelete} from './index'
const url = 'http://localhost:8000/'
export const getAllTasks = () => dispatch => {
    axios.get(`${url}getItems`)
      .then((response) => {
        return response.data;
      })
      .then((tasks) => {
        dispatch(getTasks(tasks))
      })
      .catch((err) => {
        console.error.bind(err);
      })
  };
  
  export const postNewTask = (task) => dispatch => {
    // dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
    axios.post(`${url}addItems`, {"item_name":task})
      .then((response) => {
        return response.data;
      })
      .then((task) => {
        dispatch(addTask(task.object));
      })
      .catch((err) => {
        console.error.bind(err);
      })
  };
  
  export const putChangeStatus = (task, bool) => (dispatch) => {
    // dispatch(changeStatus(task));
    axios.put(`${url}putItems`, {slug: task.slug,
      metafields: [
        {
          title: "Is Complete",
          key: "is_complete",
          value: !bool,
          type: "text"
        }
      ]})
      .then((response) => {
        return response.data;
      })
      .then((task) => {
        dispatch(changeStatus(task.object));
      })
      .catch((err) => {
        console.error.bind(err);
      })
  };
  
  export const deleteTask = (slug) => (dispatch) => {
    dispatch(taskDelete(slug));
    axios.delete(`${url}deleteItems/${slug._id}`)
      .then((response) => {
      })
      .catch((err) => {
        console.error.bind(err);
      })
  };