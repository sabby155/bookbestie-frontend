import React from 'react';


class Search extends React.Component {

    render() {
        return (
            <div>
                <h2>Search Google Books</h2>
                <h3>Try looking one up from Google’s massive database of book information instead. </h3>
                
                <form onSubmit={this.props.handleSearchSubmit}>
                    <p>Search Books</p>
                    <input 
                        name="search" 
                        value={this.props.search}
                        onChange={this.props.handleSearchChange}/>
                    <input type="submit"/>
                 </form>      
            </div>
        )
    }
}


export default Search