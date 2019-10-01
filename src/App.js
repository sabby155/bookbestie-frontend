import React from 'react';
import './App.css';
import Search from './components/Search'
import GoogleBooksContainer from './components/GoogleBooksContainer'
import NYTBestsellersContainer from './components/NYTBestsellersContainer'
import NavBar from './components/NavBar'
import Header from './components/Header'
// import BookDetail from './components/BookDetail'
import Profile from './components/Profile'
import Login from './components/Login'
import SignUp from './components/SignUp'
// import Search from './Search'  
import { Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'

class App extends React.Component {

  state = {
    search: "",
    error: false,
    bestsellers: [],
    // cards: [],
    userObj: {
      cards: [],
      statuses: []
    }

  }

  componentDidMount() {
    // fetch("https://api.nytimes.com/svc/books/v3/lists.json?list=Combined%20Print%20and%20E-Book%20Fiction&api-key=LCJKr95EkrIk7PbzTeMCNjE7BmPaNGS6", {
    //   method: 'GET',
    //   })
    //   .then(res => res.json())
    //   .then(data => { this.updateBestsellers(data)})
    fetch("http://localhost:3001/api/v1/bestsellers", {
      method: 'GET',
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        // Below, I am first saving books to all cards then dividing into seperate section
        this.props.saveBestSellerCards(data)
        this.props.divideBestSellerCards()
      })
      .catch(error => {
        console.log(error);
        console.log('NYT Books API Error');
      });
  }

  // updateBestsellers = (data) => {
  //   data.results.map((book) => {
  //     console.log('isbn test',book.isbns[1].isbn10)
  //   })
  // }

  // We are retrieving userObj from the post made from SignUp and saving it 
  saveUserObj = (obj) => {
    this.setState({
      userObj: obj
    })
  }


  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3001/api/v1/search", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'Accepts': "application/json"
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(data => {
        if (data.length > 0){
          // Below, I am first saving books to all cards then dividing into seperate section
          this.props.saveGoogleBookCards(data)
          this.props.divideGoogleBooksCards(data)
          this.setState({
            error: false,
          })
        } else this.setState({
          error: true,
        })
      })
      .catch(error => {
        console.log(error);
        console.log('Google API Error');
      });
  }

 

  setUserStatus = (status) => {
    // console.log('status was set', status)
    this.setState({
      userObj: {
        ...this.state.userObj,
        statuses: [...this.state.userObj.statuses, status]
      } 
    })
  }
  

 

  render() {
    // console.log('test for bestsellers list!',this.state.bestsellers)

    return (

      <div className="App">
      <Header/>
      <NavBar/>

      <Switch>

        <Route path = "/Search" exact render = {() => 
        <div>
          {/* This is where I want to add NYT bestsellers containerized request results */}
          <div id="nyt-books-container">
            <React.Fragment>
              <NYTBestsellersContainer
                  className="ui grid container"
                  userObj={this.state.userObj}
                  setUserStatus={this.setUserStatus}
              />
            </React.Fragment>
          </div>
          
          <div id="google-books-container">
            <React.Fragment>
              <Search 
                  className="ui grid container"
                  handleSearchSubmit={this.handleSearchSubmit}
                  handleSearchChange={this.handleSearchChange}
                  search={this.state.search}
              />
            </React.Fragment>

            {this.state.error === true ? <p>Oops! Let's try that again.</p>: null}
            {this.props.cards.length > 0 ? 
            
            <GoogleBooksContainer 
                className="ui grid container"
                userObj={this.state.userObj}
                setUserStatus={this.setUserStatus}
            />: <p>Try searching for a new book by it's title. The more specific, the better!</p>
            }
          </div>
        </div>
        }/>

        <Route path="/Shelf" render={() => (
            <Profile userObj={this.state.userObj}/>
          )} />
            
          <Route path="/SignUp" exact render={() => (
            <SignUp saveUserObj={this.saveUserObj}/>
          )} />
          <Route path="/Login" render={() => (
            <Login saveUserObj={this.saveUserObj}/>
          )}  />
          

      </Switch>
      </div>
  
    )
  }
}
function mapStateToProps(state) {
  // console.log('look here!!!!', state)
  return {
    cards: state.cards,
    // currentUser: state.currentUser
    wishlist: state.wishlist,
    readlist: state.readlist,
    favoritelist: state.favoritelist,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBestSellerCards: (memory) => {
      return dispatch({
        type: "SAVE_BESTSELLERS_TO_CARDS",
        payload: memory
      })
    },
    saveGoogleBookCards: (memory) => {
      return dispatch({
        type: "SAVE_GOOGLEBOOKS_TO_CARDS",
        payload: memory
      })
    },
    divideBestSellerCards: (memory) => {
      return dispatch({
        type: "DIVIDE_BESTSELLER_CARDS",
        payload: memory
      })
    },
    divideGoogleBooksCards: (memory) => {
      return dispatch({
        type: "DIVIDE_GOOGLE_BOOKS_CARDS",
        payload: memory
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
