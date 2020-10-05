import React from 'react';
import './css/Contact.css'
import call from './assets/images/call.svg'
import email from './assets/images/email.svg'

function Contact() {
    return (
        <div className="Content">
            <h1>Contact Us</h1>
            <IndividualContact icon="call" info="01234 567890"/>
            <IndividualContact icon="email" info="madeupemail@madeup.com"/>
        </div>
    )
}

class IndividualContact extends React.Component {
    render() {
        return (
            <div className="ContactContainer">
                {this.props.icon === "call" ?
                    <img src={call} alt="phone"/>:
                    <img src={email} alt="email" />
                }
                <p>{this.props.info}</p>
            </div>
        )
    }
}

export default Contact;
