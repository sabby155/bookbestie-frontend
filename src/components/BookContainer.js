import React from 'react'
import Book from './Book'
import BookDetail from './BookDetail'

 class BookContainer extends React.Component {
    
    state = {
        bookDetailObj: {}
    }


    renderBookDetail = (props) => {
        this.setState(prevState => {
            return {
                bookDetailObj: props
            }
        }, () => {
           console.log("I was clicked", this.state.bookDetailObj)
        })
    }
 
    renderBooks = (props) => {
        return this.props.cards.map(card => {
            return <Book 
                key={card.id} {...card} 

                handleClick={this.renderBookDetail} 
            />
        })
    }

    
    render() {
        console.log('hey from book container!!', this.state.bookDetailObj)
 
       return (
          
                <div className="ui grid container">
                    {this.renderBooks()}
                    {Object.keys(this.state.bookDetailObj).length < 1 ?  null : <BookDetail {...this.state.bookDetailObj}/> }
                </div>
       
       ) 
    }
}

export default BookContainer