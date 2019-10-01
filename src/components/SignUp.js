import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'

class SignUp extends Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    createUser = (event) => {
        event.preventDefault()
        fetch("http://localhost:3001/api/v1/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(data => {
            this.props.saveUserObj(data)
            
        })   
    }




    render() {

        return (

        // <Route path = "/Profile" exact render = {() => 
        //   <Profile userInfo = {this.state.userObj} />
        // }/>
            <div>
            <h2>Sign Up</h2>

                <Form onSubmit={this.createUser}>
                    <Form.Field>
                    <label>Username</label>
                    <Input fluid 
                        placeholder='Username'
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                    <label>Password</label>
                    <Input fluid 
                        placeholder='Password'
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange}/>
                    </Form.Field>
                    
                    {/* <Form.Field>
                    <label>Cofirm Password</label>
                    <Input fluid 
                        placeholder='Password Confirmation'
                        type="password"/>
                    </Form.Field> */}
                    <Input type="submit"/>
                </Form>    
                
            </div>
        );
    }
}

export default SignUp;
