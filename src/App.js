
import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert  from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import AlertContext from './context/alert/alertContext';
import GithubContext from './context/github/githubContext'

import './App.css';
import { Fragment } from 'react/cjs/react.production.min';

const App = () => {

  const alertContext = useContext(AlertContext)
  const githubContext = useContext(GithubContext)


    return (

  <GithubState>
  <AlertState>


    <Router>
    <div className="App">

<NavBar title="Github Finder" icon="fab fa-github"/>
<div className="container">

<Routes>
  <Route exact path='/' element={
    
    <Fragment>
   
      <Search  />
       <Users />
      
       

    </Fragment>
  }/>
   <Route exact path='/reactgithub' element={
    <Fragment>
      <Search   />
       <Users />
     
       
    </Fragment>
  }/>
  <Route  exact path='/about' element={<About />}/>
  <Route  exact path='/user/:login' element={<User />}/>

  
</Routes>
  
</div>

    </div>
    </Router>

</AlertState>
    </GithubState>

    )
    ;
  
}

export default App;
