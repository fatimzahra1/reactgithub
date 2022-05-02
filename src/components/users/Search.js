


import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert'


const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
     
    const [text, setText] = useState('')



    const onSubmit = (e)=>{
               e.preventDefault();
              if(text === ''){
                    
                alertContext.setAlert()
              } else {
                console.log(text)
                  githubContext.searchUsers(text)
                  console.log('after calling')
                  alertContext.removeAlert()
                  
                  setText('')
                
               }
               
            }
            const onChange = (e)=> {
                setText(e.target.value)}
  
   return (<div>
       <form onSubmit={onSubmit} className='form'>
           <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
           <input type='submit' value='Search' className='btn btn-dark btn-block'/>

        </form>
         {alertContext.alert===true&& (<Alert />)}
        { githubContext.users.length > 0 && (<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>)}
        
        </div>
        )
  
}

export default Search;