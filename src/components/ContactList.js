import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return(
            <div className="item">
                <div className="content" id="abcp">
                    <div className="header">{contact.name} </div>
                    <div>{contact.email}</div>
                </div>
            </div>
        )
    })
    return <div className="ui celled list"> {renderContactList} </div>

}

export default ContactList;