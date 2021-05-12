import React from 'react';
import { Button } from '@material-ui/core';
import '../Style/Login.css'
import TextField from '@material-ui/core/TextField';
const serverUrl = 'http://localhost:8000';


export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpDetails: {},
            errPassword: false
        }
    }


    handleChange = (event) => {
        this.setState({
            signUpDetails: {
                ...this.state.signUpDetails,
                [event.target.name]: event.target.value
            }
        });
    };

    handleSubmit = () => {
        if (this.state.signUpDetails.password !== this.state.signUpDetails.re_password) {
            this.setState({ errPassword: true })
        }
        if (!this.state.errPassword) {
            fetch(`${serverUrl}/users`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': true,
                },
                body: JSON.stringify(this.state.signUpDetails),
            })
                .then(response => console.log('response',response.json()))
                .then(data => {
                    alert('User added success');
                    console.log('Success:',data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    }
    render() {
        return (
            <div>
                <div>
                    <TextField name="name"
                        onChange={this.handleChange} label="Name"></TextField>
                </div>
                <div>
                    <TextField name="lName"
                        onChange={this.handleChange} label="Last Name"></TextField>
                </div>
                <div>
                    <TextField type="email" id="standard-basic" name="email"
                        onChange={this.handleChange} label="Email"></TextField>
                </div>
                
                <div>
                    <TextField type="number" name="number"
                        onChange={this.handleChange} label="Mobile Number"></TextField>
                </div>
                <div>
                    <TextField type="password" name="password"
                        onChange={this.handleChange} label="Password"></TextField>
                </div>
                <div>
                    <TextField type="password" name="re-password"
                        onChange={this.handleChange} label="Re-Enter Password"></TextField>
                </div>
                {this.state.errPassword ? <label style={{ color: 'red' }}>Password does not match</label> : ''}
                <div>
                    <TextField name ="country"
                        onChange={this.handleChange} label="Country"></TextField>
                </div>


                <div>
                    <Button className='loginButton' variant="contained" color="primary" onClick={this.handleSubmit}>Signup</Button>
                </div>
            </div>
        )
    }
}
