import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>Testing</p>
            </div>
        )
    }

}

export default Profile;
