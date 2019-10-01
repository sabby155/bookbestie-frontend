import React from 'react'


class Profile extends React.Component {
    
    render () {
        
        return (
        <div>
            <h1>Hello {this.props.userObj.username}!</h1>
                <div>{this.props.userObj.cards}</div>
                <div>{this.props.userObj.status}</div>
        </div>
        )
    }
}

export default Profile


// user should be able to view all of their status lists and make changes (future)