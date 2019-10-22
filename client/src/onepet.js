import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class OnePet extends Component{
    constructor(props){
        super(props);
        this.state= {
            pet:{},
            count: 0
        }
    }
    
    componentDidMount(){
        let id=this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({pet:res.data})
            })
            .catch(err => console.log(err));
            console.log(this.state)
    }

    incrementMe = () => {
        let newCount = this.state.count +1
        this.setState({
            count: newCount
        })
    }

    Delete = e=> {
        let _id= this.props.match.params._id;
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res =>{
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
        <>
            <Link to={`/`}>Home</Link>
            <div>
            <h3>Details about {this.state.pet.name}</h3>
            <p><strong>Type:&nbsp;</strong>{this.state.pet.type}</p>
            <p><strong>Description:&nbsp;</strong>{this.state.pet.description}</p>
            <p><strong>Skills:&nbsp;</strong></p>
            <ul>
                <li>{this.state.pet.skill1}</li>
                <li>{this.state.pet.skill2}</li>
                <li>{this.state.pet.skill3}</li>
            </ul>
            <button onClick={this.incrementMe}>Likes: {this.state.count}</button>
            <button onClick={() => this.Delete(this.state.pet._id)}>Adopt this pet!</button>
            </div>
        </>    
        );
    }
}

export default OnePet;