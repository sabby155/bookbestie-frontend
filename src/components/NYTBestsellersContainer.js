import React from 'react'
import Book from './Book'
import BookDetail from './BookDetail'
import { connect } from 'react-redux'
import '../assets/NYTBestsellersContainer.css'
class NYTBestsellersContainer extends React.Component {

    state = {
        bookDetailObj: {},
        bookCover: "",
    }

    // book and bookDetail are siblings - difficulty passing props btn them so muct go back up through container 
    renderBookDetail = (props, cover) => {
        this.setState({
            bookDetailObj: props,
            bookCover: cover
        })
    }

    renderBooks = (props) => {
        // console.log(this.props)
        if (this.props.bestSellerCards) {
            return this.props.bestSellerCards.map(card => {
                return (<Book 
                    key={card.id} {...card} 
                    handleClick={this.renderBookDetail} 
                />)
            })
        }  
    }

    render() {
       
        return (
            <div className="nyt-bestsellers-container">
                <h2>Best Seller List</h2>
                <h3>Explore this month’s New York Times Best Seller list rankings for Combined Print and E-Book Fiction.</h3>

                <div className="ui grid container">
                    {this.renderBooks()}
                    
                    {Object.keys(this.state.bookDetailObj).length < 1 ?  null : 
                    <BookDetail {...this.state.bookDetailObj} bookCover={this.state.bookCover}  setUserStatus={this.props.setUserStatus} userObj={this.props.userObj} /> }
                    
                </div>


            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        bestSellerCards: state.bestSellerCards
    }
}

export default connect(mapStateToProps)(NYTBestsellersContainer)

