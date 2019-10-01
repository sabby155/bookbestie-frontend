import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Image  } from 'semantic-ui-react'
import '../assets/BookDetail.css'

 class BookDetail extends React.Component {

    // renderBookAuthors = (authors) => {
    //     console.log(authors)
    //     let newArr = authors.split("")
    //     newArr.shift()
    //     newArr.pop()
    //     newArr.shift()
    //     newArr.pop()
    //     return newArr
    // }

    state ={
        value: "Wishlist",
        status: {},
     
    }


    handleChange = (event) =>{
        this.setState({
         value: event.target.value
         })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let bookId = this.props.id
        let userId = this.props.userObj.id

        if (this.state.value === "Wishlist") {
            // console.log('hit if statement')
            // post to status backend with updated status (book id user id and wishlist true )
            fetch('http://localhost:3001/api/v1/status', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                }, 
                body: JSON.stringify({
                    userId,
                    bookId, 
                    wishlist: true, 
                    favorite: false, 
                    read: false, 
                })
            }).then(res => res.json())
                .then(data => {
                    this.setState({
                        status: data,
                    }, () => {
                        console.log('blah!')
                        // this.props.setUserStatus(data)-- replacing with redux below
                        // this.props.addToStatuses(data)
                    })
                })
            
        }
        else if (this.state.value === "Favorite") {
            // post to status backend with updated status (book id user id and favorite true )
            fetch('http://localhost:3001/api/v1/status', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                }, 
                body: JSON.stringify({
                    userId,
                    bookId, 
                    favorite: true, 
                    wishlist: false,
                    read: false, 
                })
            }).then(res => res.json())
                .then(data => {
                    this.setState({
                        status: data
                    }, () => {
                        // this.props.setUserStatus(data)
                        // this.props.addToStatuses(data)
                    })
                })
        }
        else if (this.state.value === "Read") {
            // post to status backend with updated status (book id user id and favorite true )
            fetch('http://localhost:3001/api/v1/status', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accepts': 'application/json'
                    },
                    body: JSON.stringify({
                        userId,
                        bookId,
                        favorite: false,
                        wishlist: false,
                        read: true,
                    })
                }).then(res => res.json())
                .then(data => {
                    this.setState({
                        status: data
                    }, () => {
                        // this.props.setUserStatus(data) -- replacing with redux below
                        // this.props.addToStatuses(data)
                    })
                })
        }
    }

    // also... we passed userObj all the way down from app > book contaimer > book detail so that we 
    // can use the user ID for a post 

    render() {
        // console.log('hello from book detail!!!!:', this.props)
        // console.log('this.state.value', this.state.value)
        // console.log('this.state.status:', this.state.statuses)
       return (

        <Container fluid>
        <div id="book-detail-container">
        <Image 
            id="book-details-pic"
            src={this.props.image_url} 
            wrapped ui={true}
        /> 
        
        <div id="card-content">
        <strong>{this.props.title}</strong><br></br>
        <span className="author-text">By {this.props.authors}</span>
        <span className="published-text">Published {this.props.published_date}</span>
        {/* <span>Page Count: {this.props.page_count}</span> */}
        <p className="description-text">{this.props.description}</p>

        <form onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="Wishlist">Want to read</option>
                <option value="Read">Already read</option>
                <option value="Favorite">A favorite</option>
            </select>
            <input type="submit" value="Submit"/>
        </form>
        </div>
        </div>
        </Container>
    
       ) 
    }
}

function mapStateToProps(state) {
    // console.log('look here to see if status worked!!!!', state.statuses)
    return {
        statuses: state.statuses,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToStatuses: (memory) => {
            return dispatch({
                type: "ADD_TO_STATUSES",
                payload: memory
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)