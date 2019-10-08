import React from 'react';
import '../assets/Search.css'

class Search extends React.Component {

    render() {
        return (
            <div id="search-container">
                <h2>Search Google Books</h2>
                <h3>Try looking one up from Google’s massive database of book information instead. </h3>
                <div id="search-bar">
                <form onSubmit={this.props.handleSearchSubmit}>
                    <p>Search Books</p>
                    <input 
                        name="search" 
                        value={this.props.search}
                        onChange={this.props.handleSearchChange}/>
                    <input type="submit"/>
                 </form>  
                 </div>    
            </div>
        )
    }
}


export default Search