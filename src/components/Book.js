import React from 'react'
import {  Image, Button, Icon  } from 'semantic-ui-react'
import { connect } from 'react-redux'
import '../assets/Book.css'

// import BookDetail from './BookDetail'

 class Book extends React.Component {

    state = {
        bookCover: "https://i.imgur.com/fNK4GjV.png",
    }

    componentDidMount(props) {
        if(this.props.isbn !== null) {
            let isbn = this.props.isbn
            // console.log('yes', isbn)
            fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyDplb5x6lnzYoXOu1o3Lb0Tq0Hnj5AGJPo`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(data => {
                // console.log('worked',typeof data)
                    let imageThumbnail = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
                    this.setState({
                        bookCover: imageThumbnail,
                    })  
                // this might be unneccesary, keep for now  => this.props.saveBookCover(this.state.bookCover, data.id)
            })
            .catch(error => {
                console.log('this error hapened in componentdidmount here!',error.message)
            })
        }
    }

    render() {
        console.log('wcewfewf loook at th eprops here:',this.props)
       return (
        <div>


            <div className="book-card" onClick={(event) => {
                // sending props and book cover back up to container to render the book detail card with cover. 
                this.props.handleClick(this.props, this.state.bookCover)
                }}>
                {this.props.isbn === null ? <Image className="book-cover" src={this.props.image_url} size='small' centered/> : <Image className="book-cover" src={this.state.bookCover} width='128' height='200' size='small' centered/>}
                
                {/* testing logic for ranking system */}
                {this.props.isbn === null ? null : 
                <div>
                    <Button circular 
                        size="medium"
                        color="white"
                        id="book-rankings"
                        >
                        <span id="ranks">{this.props.rating}</span>
                    </Button>
                </div>}
                
                <Button circular
                    // type="submit"
                    size="medium"
                    icon color='teal'
                    id="add-to-shelf"
                    >
                    <Icon name="plus"/>
                </Button>
                {/* <span>{this.props.authors}</span> */}
            </div>
            <div className="book-title">{this.props.title}</div>

            

            
            

  
        </div>

       ) 
    }
}
function mapStateToProps(state) {
    // console.log('look here to see if status for bookcover worked!!!!', state)
    return {
        savedBookCover: state.savedBookCover,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveBookCover: (memory) => {
            return dispatch({
                type: "SAVE_BOOKCOVER",
                payload: memory
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
