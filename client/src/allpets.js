import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AllPets extends Component{
    constructor(props){
        super(props);
        this.state= {
            pets:[] 
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:8000/api/pets")
            .then(res =>
                this.setState({pets:res.data}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h4>These pets are looking for a home!</h4>
                <Link to={`/new`}>Add a pet to the shelter</Link>
                <br/><br/>
                <table className="table table-striped">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        this.state.pets.map(pet =>
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link className="btn btn-outline-primary mb-2" to={`/pets/${pet._id}`}>Details</Link>
                                    &nbsp;
                                    <Link className="btn btn-outline-primary mb-2" to={`/pets/${pet._id}/edit`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    }
                </table>
            </>
        );
    }
}

export default AllPets;