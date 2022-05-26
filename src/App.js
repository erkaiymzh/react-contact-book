import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfo from './components/HomePage/UserInfo';
import ContactsCreate from './components/Contacts/ContactsCreate';
import axios from 'axios';
import ContactsList from './components/Contacts/ContactsList';
import EditForm from './components/EditForm/EditForm';
import Details from './components/Details/Details';

const App = () => {
  const API = "http://localhost:8001/contacts"

  const [contacts, setContacts] = useState([])
  const [oneContact, setOneContact] = useState(null)


//  ! create(post request)
  function createContact (newContact){
  axios.post(API, newContact)
}
// ! read(get request)
async function getContacts(){
  let result = await axios.get(API)
  // console.log(result)
  setContacts(result.data)
}
//! delete(delete request)
 async function deleteContact(id){
  await axios.delete(`${API}/${id}`)
  getContacts()
}
// //! details && got for edit
async function getOneContact (id){
  let result = await axios.get(`${API}/${id}`)
  // console.log(result)
  setOneContact(result.data)
}
//! update(patch request)
async function updateContact (id, editedContact){
  await axios.patch(`${API}/${id}`, editedContact)
  getContacts()
}

  return (
    <>
    <BrowserRouter>
   <Navbar1 />
    <Routes>
      <Route path='/' element={<UserInfo />} />
      <Route path='/create' element={<ContactsCreate createContact={createContact}/>} />
      <Route path='/edit/:id' element={<EditForm oneContact={oneContact} getOneContact={getOneContact} updateContact={updateContact} />} />
      <Route path='/contacts' element={<ContactsList getContacts={getContacts} contacts={contacts} deleteContact={deleteContact} />} />
      <Route path='/details/:id' element={<Details getOneContact={getOneContact} oneContact={oneContact} /> }/>
    </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;