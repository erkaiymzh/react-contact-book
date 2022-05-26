import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactsCreate = ({createContact}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    function handleValues(){
        let newContact = {
            name,
            surname, 
            phone,
        }
        createContact(newContact);
    }
    return (
        <div className='container d-flex flex-column align-items-center'>
            <img style={{height: "200px"}} src="https://courses.snoopgame.com/wp-content/uploads/2019/02/Checked.gif" alt="" />
            <h1>Create a new contact!</h1>
            <br />
            <input onChange={(e) => setName(e.target.value)} className='col-3' type="text" placeholder='Name'/>
            <br />
            <input onChange={(e) => setSurname(e.target.value)} className='col-3' type="text" placeholder='Surname'/>
            <br />
            <input onChange={(e) => setPhone(e.target.value)} className='col-3' type="number" placeholder='Phone'/>
            <br />
            <Link to={"/contacts"}>
            <button onClick={handleValues()} className='btn btn-warning btn-lg'>SAVE</button>
            </Link>
        </div>
    );
};

export default ContactsCreate;