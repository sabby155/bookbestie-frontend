import React from 'react'
import { Card, Image  } from 'semantic-ui-react'
import BookDetail from './BookDetail'

export default class Book extends React.Component {

    renderBookAuthors = (authors) => {
        console.log(authors)
        let newArr = authors.split("")
        newArr.shift()
        newArr.pop()
        newArr.shift()
        newArr.pop()
        console.log('look at me', newArr.join(""))

        return newArr.join("")
    }

    render() {
        
       return (
        <div>
            {/* card component */}
            <Card onClick={(event) => this.props.handleClick(this.props)}>
                <Image src={this.props.image_url} size='small'wrapped ui={false} />
                <Card.Content>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Meta>
                    <span>{this.props.authors}</span>
                </Card.Meta>
                {/* <Card.Description>
                    {this.props.description}
                </Card.Description> */}
                </Card.Content>
            </Card>
            {/* book detail component ternary */}
            {/* {this.state.isClicked ? <BookDetail {...this.state.bookDetailObj} /> : null} */}

        </div>

       ) 
    }
}