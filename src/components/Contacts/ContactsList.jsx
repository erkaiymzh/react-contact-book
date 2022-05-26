import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactsList = ({getContacts, contacts, deleteContact}) => {

    const [selectedProduct, setSelectedProduct] = useState("")
    const [hover, setHover] = useState("")
    useEffect(()=> {
        getContacts()
       }, [])
// console.log(deleteContact);
    return (
        
        <div className='container d-flex justify-content-around flex-wrap'>
        {contacts.map((item) => (
        <Card 
        key={item.id}
        onClick={() => setSelectedProduct(item.id)}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover("")}
            style={{ width: '18rem', border: selectedProduct === item.id? "1px solid black" : "", backgroundColor: hover === item.id? "grey" : "white" }}>
        <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/contact-us-butterscotch-series/256/Contacts-512.png" />
     <Card.Body>
       <Card.Title>Contact</Card.Title>
    <Card.Text>
    <div className='container d-flex flex-column align-items-center'>
    {item.name}, {item.surname}, {item.phone}
    </div>
    </Card.Text>
    <Link to={`/edit/${item.id}`}>
    <Button variant="primary">Edit</Button>
    </Link>
    <Button onClick={() => deleteContact(item.id)} variant="danger">Delete</Button>
    <Link to={`/details/${item.id}`}>
    <Button variant="success">Details</Button>
    </Link>

  </Card.Body>
</Card>
))}
        </div>
    );
};

export default ContactsList;