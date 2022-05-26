import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = ({getOneContact, oneContact}) => {
    const [loading, setLoading] = useState(true)
    const params = useParams() //возвращает объект, в котором хранится айди
    // console.log(params);
    useEffect(() => {
        getOneContact(params.id)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div className='container'> 
        {oneContact ? <div>
        <div>{oneContact.name}</div>
        <div>{oneContact.surname}</div>
        <div>{oneContact.phone}</div>
 </div> : <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>} 
        </div>
    );
};
export default Details;