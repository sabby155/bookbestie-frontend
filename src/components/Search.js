import React from 'react'
import '../Search.css';

class Search extends React.Component {

    render() {
        return (
            <div>
                <h1>Search Books</h1>
                <form onSubmit={this.props.handleSearchSubmit}>
                    <input 
                        name="search" 
                        value={this.props.search}
                        onChange={this.props.handleSearchChange}/>
                    <input type="submit"/>
                 </form>      

                <div className="cards">
    
                </div>
            </div>
        )
    }
}
export default Search