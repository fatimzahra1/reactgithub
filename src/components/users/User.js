import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

  const User = ({user, loading, getUser})=> {
    const { login } = useParams();
          useEffect(async () => {
             await getUser(login)
            
          }, []);

          const {
              name,
              avatar_url,
              location,
              bio,
              blog,
              html_url,
              followers,
              following,
              public_repos,
              public_gists,
              hireable
          }=user
    
    return (
        <div>
        {name}
        </div>
    );
}

export default User;