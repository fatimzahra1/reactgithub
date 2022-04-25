
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert  from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import './App.css';
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min';

const App = () => {

   const [users, setUsers] = useState([])
   const [user, setUser] = useState({})
   const [repos, setRepos] = useState([])
   const [loading, setLoading] = useState(false)
   const [alert, setAlert] = useState(null)

 
//  useEffect(async () =>{
//   setLoading(true)
//   const res =await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//   setUsers(res.data)
//   setLoading(false)
//  }, []

//  )
  
  
  const searchUsers =async text =>{
    console.log('done')
    setLoading(true)
    const res =await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUsers(res.data.items)
    setLoading(false)
  }
  const getUser = async (username) => {
    
    setLoading(true)
    const res =await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data)
    setLoading(false)
   
  }
  //Get users repos
  const getUserRepos = async (username) => {
    
    setLoading(true)
    const res =await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data)
    setLoading(false)
  }

  const clearUsers = () => {setUsers([])
    setLoading(false)}

  const setalert = (msg, type) => {
    setUsers({msg, type})
    setTimeout(()=> setAlert(null), 5000)
  }

    return (




      
  //     <Router>
  //     <div className="App">
 
  // <NavBar title="Github Finder" icon="fab fa-github"/>
  // <div className="container">
  // <Alert alert={this.state.alert} />
  // <Routes>
  //   <Route exact path='/' element={
  //     <Fragment>
  //       <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}  setAlert={this.setalert} showClear={users.length > 0? true:false}/>
  // <Users loading={loading} users={users}/>
  //     </Fragment>
  //   }/>
  //   <Route  exact path='/about' element={<About />}/>
  //   <Route  exact path='/user/:login' element={<User  getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} loading={loading}/>}/>

    
  // </Routes>
    
  // </div>
  
  //     </div>
  //     </Router>






 
  
    // <div className="App">
    // <NavBar title="Github Finder" icon="fab fa-github"/>
   
    // <Fragment>
    //     <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}  setAlert={this.setAlert} showClear={users.length > 0? true:false}/>
   
    //   </Fragment>
   
    // </div>







    <Router>
    <div className="App">

<NavBar title="Github Finder" icon="fab fa-github"/>
<div className="container">
<Alert alert={alert} />
<Routes>
  <Route exact path='/' element={
    <Fragment>
      <Search searchUsers={searchUsers} clearUsers={clearUsers}  setAlert={setalert} showClear={users.length > 0? true:false}/>
      <Users loading={loading} users={users}/>

    </Fragment>
  }/>
   <Route exact path='/reactgithub' element={
    <Fragment>
      <Search searchUsers={searchUsers} clearUsers={clearUsers}  setAlert={setalert} showClear={users.length > 0? true:false}/>
      <Users loading={loading} users={users}/>

    </Fragment>
  }/>
  <Route  exact path='/about' element={<About />}/>
  <Route  exact path='/user/:login' element={<User  getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading}/>}/>

  
</Routes>
  
</div>

    </div>
    </Router>







   

    )
    ;
  
}

export default App;
