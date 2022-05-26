import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({getOneContact, oneContact, updateContact}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    
    const params = useParams()

    useEffect(() => {
        getOneContact(params.id)
    }, [])
    // console.log(oneContact);
    
    useEffect(()=> {
        if(oneContact){
            setName(oneContact.name)
            setSurname(oneContact.surname)
            setPhone(oneContact.phone)
        }
    }, [oneContact])

    function handleValues(){
        let editedContact  = {
            name, 
            surname, 
            phone, 
        }
        updateContact(params.id, editedContact)

    }
    return (
        <div className='container d-flex flex-column align-items-center'>
        <br />
    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Name'/>
    <br />
    <input value={surname} onChange={(e)=> setSurname(e.target.value)} type="text" placeholder='Surname'/>
    <br />
    <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder='Phone Number'/>
    <br />
    <input type="url" placeholder='Image'/>
    <br />
    <Link to={"/contacts"}>
    <button className='btn btn-warning' onClick={() => handleValues()}>Save</button>
    </Link>   
        </div>
    );
};

export default EditForm;