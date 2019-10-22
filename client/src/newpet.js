import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class NewPet extends Component{
    constructor(props){
        super(props);
        this.state= {
            pet:{},
            errors:{},
            err:""
        }
    }

    addpet = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", this.state.pet)
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors});
                }
                else if(res.data.errmsg){
                    this.setState({err: res.data.errmsg});
                }
                else{
                    this.props.history.push("/");
                }
            })
            .catch(err => console.log(err));
    }

    changeName = e =>{
        this.setState({pet: {...this.state.pet, name:e.target.value}});
    }

    changeType = e =>{
        this.setState({pet: {...this.state.pet, type:e.target.value}});
    }

    changeDescription = e =>{
        this.setState({pet: {...this.state.pet, description:e.target.value}});
    }

    changeSkill1 = e =>{
        this.setState({pet: {...this.state.pet, skill1:e.target.value}});
    }

    changeSkill2 = e =>{
        this.setState({pet: {...this.state.pet, skill2:e.target.value}});
    }

    changeSkill3 = e =>{
        this.setState({pet: {...this.state.pet, skill3:e.target.value}});
    }

    render(){
        return(
        <>
            <h4>Know of a pet needing a home?</h4>
            <form onSubmit={this.addpet}>
                Pet name:
                <br/>
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={this.changeName}
                />
                {
                    this.state.errors.name ?
                    <span>{this.state.errors.name.message}</span> :
                    ""
                }
                {
                    this.state.err !== "" ?
                    <span>{this.state.err}</span> :
                    ""
                }
                <br/>
                Pet type:
                <br/>
                <input 
                    type="text" 
                    placeholder="Type"
                    onChange={this.changeType}
                />
                {
                    this.state.errors.type ?
                    <span>{this.state.errors.type.message}</span>:
                    ""
                }
                <br/>
                Description:
                <br/>
                <textarea 
                    rows= '4' cols='40' 
                    placeholder="Description"
                    onChange={this.changeDescription}
                />
                <br/>
                {
                    this.state.errors.description ?
                    <span>{this.state.errors.description.message}</span>:
                    ""
                }
                <br/>
                Skills:
                <ul>
                    <li>Skill 1:
                        <input 
                            type="text" 
                            onChange={this.changeSkill1}
                        />
                    </li>
                    <br/>
                    <li>Skill 2:
                        <input 
                            type="text" 
                            onChange={this.changeSkill2}
                        />
                    </li>
                    <br/>
                    <li>Skill 3:
                        <input 
                            type="text" 
                            onChange={this.changeSkill3}
                        />
                    </li>
                </ul> 
                <input className="btn btn-outline-primary mb-2" id="addpet" type="submit"value="Add Pet"/>
                &nbsp;
                <button><Link to="/">Cancel</Link></button>
            </form>
        </>    
        );
    }
}

export default NewPet;