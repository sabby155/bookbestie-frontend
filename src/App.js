import React from 'react';
import './App.css';
import Search from './components/Search'
import BookContainer from './components/BookContainer'
import NavBar from './components/NavBar'
// import BookDetail from './components/BookDetail'

class App extends React.Component {

  state = {
    search: "",
    cards: [],
 
  }


  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/search", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'Accepts': "application/json"
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cards: data
        })
      })
  }

  // renderBookDetail = (props) => {

  //   const bookInfo = props.title
  //   console.log(bookInfo)

  //   return (<BookDetail  />)
   
  // }

  render() {
    return (

  
      <div className="App">
   
            <NavBar />

            <h1>Welcome to BookBestie</h1>

            <Search 
              className="Search"
              handleSearchSubmit={this.handleSearchSubmit} 
              handleSearchChange={this.handleSearchChange}
              cards={this.state.cards}
              search={this.state.search}
              
              />  

            <BookContainer 
              className = "ui grid container"
              cards={this.state.cards}
            />

      </div>
  
    )
  }
}

export default App;
