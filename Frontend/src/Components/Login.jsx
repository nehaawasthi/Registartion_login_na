import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../Style/Login.css'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';

import { Tab, AppBar } from '@material-ui/core/';
import { TabPanel, a11yProps } from '../Components/common/TabPanel'
import { Signup } from './Signup'
const serverUrl = 'http://localhost:8000';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            loginDetails: {}
        }
    }

    handleChange = (newValue) => {
        console.log(newValue);
        this.setState({ value: newValue })
    };

    handleChangeLogin = (event) => {
        this.setState({
            loginDetails: {
                ...this.state.loginDetails,
                [event.target.name]: event.target.value
            }

        });
    }

    handleLogin = () => {
        if (this.state.loginDetails.email && this.state.loginDetails.password) {
            fetch(`${serverUrl}/login`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': true,
                },
                body: JSON.stringify(this.state.loginDetails),
            })
                .then(response => console.log('response', response.json()))
                .then(data => {
                    console.log('Success:', data);
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
                    <TextField name="email" label="E-mail/UserName" onChange={this.handleChangeLogin}></TextField>
                </div>
                <div>
                    <TextField name="password" label="Password" onChange={this.handleChangeLogin}></TextField>
                </div>
                <div>
                    <Button className='loginButton' variant="contained" color="primary" onClick={this.handleLogin}>Login</Button>
                </div>
                <Link>Forgot Password</Link>
               
               
            </div>
        )
    }

}
// export default Login;