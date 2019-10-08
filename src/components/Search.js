import React from 'react';
import '../assets/Search.css'
import { Image, Button, Icon } from 'semantic-ui-react'


import Lamp from '../assets/lamp.png'

class Search extends React.Component {

    render() {
        return (
            <div id="search-container">
                <h2>Search Google Books</h2>
                <h3>Try looking one up from Google’s massive database of book information instead. </h3>
                <div id="search-bar">
                <form 
                    className="search-form"
                    onSubmit={this.props.handleSearchSubmit}
                    >
                    <p>Search Books</p>
                    <Image 
                        className="lamp" 
                        src={Lamp} 
                        width="150" 
                        height="250"
                        />

                    <input 
                        className="search-bar"
                        name="search" 
                        value={this.props.search}
                        onChange={this.props.handleSearchChange}/>
                    {/* <Button type="submit">SEARCH</Button> */}
                    <Button circular
                            type="submit"
                            size="small"
                            icon color='teal'
                            id="search-button"
                            >
                            <Icon name="search"/>
                        </Button>
                 </form>  
                 </div>    
            </div>
        )
    }
}


export default Search