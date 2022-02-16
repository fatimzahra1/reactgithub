
import React, {Component} from 'react';
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

class App extends Component {
  state= {
    users:[],
    user:{},
    loading:false,
    alert:null
  }
 async  componentDidMount(){
   this.setState({ loading: true})
   const res =await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data ,loading: false})
  }
  searchUsers =async text =>{
    this.setState({ loading: true})
    const res =await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data.items ,loading: false})
  }
  getUser = async (username) => {
    
    this.setState({ loading: true})
    const res =await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({user:res.data ,loading: false})
   
  }
  clearUsers = () => this.setState({users:[], loading:false})
  setAlert = (msg, type) => {
    this.setState({alert: { msg, type}})
    setTimeout(()=> this.setState({ alert: null}), 5000)
  }
  render () {
    const {users,user, loading} = this.state
    return (
      <Router>
      <div className="App">
 
  <NavBar title="Github Finder" icon="fab fa-github"/>
  <div className="container">
  <Alert alert={this.state.alert} />
  <Routes>
    <Route exact path='/' element={
      <Fragment>
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}  setAlert={this.setAlert} showClear={users.length > 0? true:false}/>
  <Users loading={loading} users={users}/>
      </Fragment>
    }/>
    <Route  exact path='/about' element={<About />}/>
    <Route  exact path='/user/:login' element={<User  getUser={this.getUser} user={user} loading={loading}/>}/>

    
  </Routes>
    
  </div>
  
      </div>
      </Router>
    )
    ;
  }
}

export default App;
