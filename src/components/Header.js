import React from 'react'
import '../assets/Header.css'
import { Image } from 'semantic-ui-react'
import Typewriter from '../assets/typewriter.png'

class Header extends React.Component {
    render() {
        return (
            <div> 
                <header className="hero">
                    <div className="center-content">
                        <Image className="typewriter-pic" src={Typewriter} width="500" height="575"/>
                      
                      <h1><span className="book">book</span><span className="worm">worm</span></h1>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header