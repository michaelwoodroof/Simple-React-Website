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
        var img;
        if (this.props.icon === "call") {
            img = <Phone />
        } else {
            img = <Email />
        }
        return (
            <div className="ContactContainer">
                {img}
                <p>{this.props.info}</p>
            </div>
        )
    }
}

function Phone() {
    return (
        <img src={call} alt="phone" />
    )
}

function Email() {
    return (
        <img src={email} alt="email" />
    )
}

export default Contact;
