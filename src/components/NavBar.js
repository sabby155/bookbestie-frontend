import React from 'react'
import Profile from './Profile'
// import { Menu, Segment } from 'semantic-ui-react'



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
        <div className="ui menu secondary fluid">
            <div className="item right">
                <Link 
                    to="/SignUp" 
                    className=""
                    > Signup </Link>
            </div>
            <div className="item">
                <Link 
                    to="/Login" 
                    className=""
                    >Login</Link>
            </div>
           

        </div>
        
            <div className="item">
                <Link 
                    to="/Search"
                    className=""
                    >Search</Link> 
            </div>
            <div className="item">
                <Link 
                    to="/Shelf"
                    className="
                    ">Shelf</Link> 
            </div>
        
        </div>
          
    
        )
    }
}

export default NavBar