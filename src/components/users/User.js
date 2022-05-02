import React, {Fragment} from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Repos } from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

  const User = ()=> {
      const githubContext = useContext(GithubContext)

    const {getUser, loading, user, getUserRepos, repos} = githubContext

    const { login } = useParams();
          useEffect(async () => {
             await getUser(login)
             await getUserRepos(login)
            
          }, []);

          const {
              name,
              avatar_url,
              location,
              bio,
              company,
              blog,
              html_url,
              followers,
              following,
              public_repos,
              public_gists,
              hireable
          }=user
    if (loading) return <Spinner />
    const st={blog}
        return (
        <Fragment>
        <Link to='/' className='btn btn-light'> Back to search
        </Link>
        hireable: {' '}
        {hireable ? (<i className='fas fa-check text-success'/>): (<i className='fas fa-times-circle text-danger'/>)}
        <div className='card grid-2'>
            <div className='all-center'>
             <img src={avatar_url} className='round-img' alt='' style={{ width: '150px'}}/>
             <h1>{name}</h1>
             <p>Location: {location}</p>
        </div>
        <div>
            {bio && (<Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
            </Fragment>)}
            <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
            <ul>
                <li>
                    {company && <Fragment>
                       <strong>Company: </strong> {company}
                    </Fragment>}
                </li>

                <li>
                    {blog && <Fragment>
                       <strong>Website: </strong> <a href={blog}>{blog}</a>
                    </Fragment>}
                </li>
            </ul>
        </div>
        </div>
        <div className='card text-center'>
         <div className='badge badge-primary'>Followers: {followers} </div>
         <div className='badge badge-success'>Following: {following} </div>
         <div className='badge badge-light'>Public Repos: {public_repos} </div>
         <div className='badge badge-dark'>Public Gists: {public_gists} </div>

        </div>
        <Repos repos={repos} />
        </Fragment>
    );
}

export default User;