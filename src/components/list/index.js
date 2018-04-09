import React, { Component } from "react";

import './index.css';
import Button from '../button';
import {connect} from 'react-redux';
import { getAllTasks, putChangeStatus, deleteTask } from '../../actions/listActions';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {
                data:[]
            },
            editValue:false
        };
      }
    
    componentDidMount(){
        this.getItems()
        console.log("this.props.getAllTasks()",getAllTasks())
      }

      getItems = () => {
        fetch('http://localhost:8000/getItems')   
        .then( result => result.json()) 
        .then( items => this.setState({items}));
      }
      update = (id) =>{
          console.log("update id",id)
          this.setState({editValue:true})
          this.props.putChangeStatus(this.props.Obj, this.props.isComplete)
      }

      delete = (id) =>{
        console.log("delete id",id)
        this.props.deleteTask(this.props.Obj.slug)
    }
      
    render() {
         let getList = this.state.items.data.map((value,index) => {
                        return(
                        
                                <tr key={index}>
                                <td>{value.item_name}</td>
                                <td>
                                <Button type='edit' onClick={() => this.update(value._id)}>
                                    Edit
                                </Button>
                                <Button type='delete' onClick={() => this.delete(value._id)}>
                                    Delete
                                </Button> 
                            </td>
                            </tr> 

                        )     

                    })

  
        return (
            <table>
                <thead>
                    <tr>
                        <th width='66%'>Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getList}
                
                </tbody>
            </table>
        );
    }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks,putChangeStatus, deleteTask};

export default connect(mapState, mapDispatch)(List);
