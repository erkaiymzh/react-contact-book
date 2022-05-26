import React from 'react';

const UserInfo = () => {
    return (
        <div className='container d-flex flex-column align-items-center m-3' style={{}}>
            <h1> MY CONTACT BOOK</h1>
            <h2 style={{fontSize: "35px"}}>Hello! Want to create a new contact?</h2>
            <img style={{width: "480px"}} src="https://cdn.dribbble.com/users/3970391/screenshots/10681936/hellodribbble_face_aylinmirza.gif" alt="" />
            <br />
            <h1 style={{fontSize: "35px" }}>Then you should press the "Create form" button!</h1>
        </div>
    );
};

export default UserInfo;