import React from 'react'
import Profile from './Profile'

// import { Button, Menu } from 'semantic-ui-react'

import { Link} from "react-router-dom"

class NavBar extends React.Component {
    renderProfile = () => {
        console.log("going to profile")
        return <Profile />
    }


    render () {
        return (
        <div>    
        <div className="ui menu">
            <div className="item">
                <Link to="/SignUp"className="ui primary button"> Signup </Link>
                {/* <Link to="/SignUp">  */}
            </div>
            <div className="item">
                <Link to="/Login"className="ui primary button">Login</Link>
            </div>
            {/* <div className="item">
                <Link to="/Profile"className="ui primary button">Profile</Link> 
            </div> */}
            
        </div>

            <div className="item">
                <Link to="/Search"className="">Search</Link> 
            </div>
            <div className="item">
                <Link to="/Shelf"className="">Shelf</Link> 
            </div>
        
        </div>
          
    
        )
    }
}

export default NavBar