import React from 'react'
import Profile from './Profile'
import Login from './Login'
import SignUp from './SignUp'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class NavBar extends React.Component {
    renderProfile = () => {
        console.log("going to profile")
        return <Profile />
    }




    render () {
        return (
        <Router>
        <div class="ui menu">
            <div class="item">
                <Link to="/SignUp"class="ui primary button"> Sigup </Link>
                {/* <Link to="/SignUp">  */}
            </div>
            <div class="item">
                <Link to="/Login"class="ui primary button">Login</Link>
            </div>
            <div class="item">
                <Link to="/Profile"class="ui primary button">Profile</Link> 
            </div>
        </div>

            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/Login" component={Login} />
            <Route path="/Profile" component={Profile} />
        </Router>
        )
    }
}

export default NavBar