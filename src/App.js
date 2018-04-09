import React, { Component } from 'react';

import './App.css';

import List from './components/list';
import Input from './components/input';
import Button from './components/button';
import { connect } from 'react-redux';
import { postNewTask } from './actions/listActions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemValue:'',
            editValue:false
        };
     
    }
  

      handleChange(event) {
          console.log("name",event.target.value)
        this.setState({itemValue: event.target.value});
        
      }
    
      handleSubmit(event) {
        // alert('An essay was submitted: ' + this.state.itemValue);
        postNewTask(this.state.itemValue);
        this.setState({itemValue: ""});

        event.preventDefault();
        // dispatch(addTodo(input.value))


      }
    render() {
        // this.addTodo = () =>{
        //     this.setState({itemValue:event.target.value})
        // }
        return (
            <div className="container">

                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                <div className='add-item-to-list'>
                <input type="text"  name="todoitem"   placeholder="enter item name" onChange={(e) => this.handleChange(e)} />

                   <input type="submit" value="Submit" />
                   </div>
                   </form>
                {/* <div className='add-item-to-list'>
                    <Input
                        name='item'
                        placeholder='New Item...'
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.addTodo} type='add'>
                      Add
                    </Button>
                </div> */}

                <List />
            </div>
        );
    }
}

const mapDispatch = {postNewTask};
export default connect(null, mapDispatch)(App);