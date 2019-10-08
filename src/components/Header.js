import React from 'react'
import '../assets/Header.css'
import { Image } from 'semantic-ui-react'
import Typewriter from '../assets/typewriter.png'
import Coffee from '../assets/coffee-cup.png'

class Header extends React.Component {
    render() {
        return (
            <div> 
                <header className="hero">
                    <div className="center-content">
                        <Image className="typewriter-pic" src={Typewriter} width="450" height="535"/>
                        <Image className="coffee" src={Coffee} width="200" height="120"/>
                      <h1><span className="book">book</span><span className="worm">worm</span></h1>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header