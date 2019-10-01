import React from 'react'
import Book from './Book'
import BookDetail from './BookDetail'
import { connect } from 'react-redux'
import '../assets/BookContainer.css'


 class GoogleBooksContainer extends React.Component {
    
    state = {
        bookDetailObj: {},
    }


    renderBookDetail = (props) => {
        this.setState({
            bookDetailObj: props
        })
    }
 
    renderBooks = (props) => {
        console.log(this.props)
        if (this.props.googleBooksCards) {
            return this.props.googleBooksCards.map(card => {
                return (<Book 
                    key={card.id} {...card} 
                    handleClick={this.renderBookDetail} 
                />)
            })
        }  
    }

    
    render() {
        // console.log('hey from book container!!', this.state.bookDetailObj)
 
       return (
          
                <div className="ui grid container">
                    {this.renderBooks()}
                    
                    {Object.keys(this.state.bookDetailObj).length < 1 ?  null : 
                    <BookDetail {...this.state.bookDetailObj} setUserStatus={this.props.setUserStatus} userObj={this.props.userObj} /> }
                    
                </div>
       
       ) 
    }
}

const mapStateToProps = (state) => {
    console.log('reducer working test:', state)
    return {
        cards: state.cards,
        googleBooksCards: state.googleBooksCards
    }
}

export default connect(mapStateToProps)(GoogleBooksContainer)