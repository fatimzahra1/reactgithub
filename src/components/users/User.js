import React from 'react';
import { useParams } from "react-router-dom";

function User(props) {
    const { login } = useParams();
    console.log({login})
    return (
        <div>
         { login} 
        </div>
    );
}

export default User;