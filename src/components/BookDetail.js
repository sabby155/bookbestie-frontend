import React from 'react'
import { Container, Header, Image  } from 'semantic-ui-react'

 class BookDetail extends React.Component {

    renderBookAuthors = (authors) => {
        console.log(authors)
        let newArr = authors.split("")
        newArr.shift()
        newArr.pop()
        newArr.shift()
        newArr.pop()
        return newArr
    }

    state ={
        value: ''
    }

    handleChange = (event) =>{
        this.setState({
         value: event.target.value
         })
    }

    handleSubmit = (event) => {
        alert(`You have chose ${event.target.value} for ${this.props.title}`)
        event.preventDefault()
        
    }

    render() {
        console.log('hello from book details', this.props)

       return (

        <Container fluid>
        <Image src={this.props.image_url} wrapped ui={false} /> 
        <Header as='h2'>{this.props.title}</Header>
        <span>Authors: {this.renderBookAuthors(this.props.authors)}</span>
        <span>Published Date: {this.props.published_date}</span>
        <span>Page Count: {this.props.page_count}</span>
        <p>Book Description: {this.props.description}</p>

        <form>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value = "Wishlist">Wishlist</option>
                <option value = "Favorite">Favorite</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
        
        </Container>
     
        /* <Card>
             <Image src={this.props.image_url} wrapped ui={false} />
             <Card.Content>
             <Card.Header>{this.props.title}</Card.Header>
             <Card.Meta>
                 <span>Authors: {this.props.authors}
                       Published Date: {this.props.published_date} 
                       Page Count: {this.props.page_count} 
                 </span>
             </Card.Meta>
             <Card.Description>
                 {this.props.description}
             </Card.Description>
             </Card.Content>
             <form>
                 <select value={this.state.value} onChange={this.handleChange}>
                     <option value = "Wishlist">Wishlist</option>
                     <option value = "Favorite">Favorite</option>
                 </select>
                 <input type="submit" value="Submit" />
             </form>

         </Card> */


       ) 
    }
}

export default BookDetail