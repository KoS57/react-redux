import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {  Route, BrowserRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import Pagination from './components/Pagination/Pagination'
import Login from './components/Login/Login'


const App = () => {

  return  (
 <BrowserRouter>
      <div className='grid'>
        <HeaderContainer />
        <Navbar />
        <div className='content'>

          <Route path='/profile/:userId?' render={()=> <ProfileContainer  />} />
          <Route path='/dialogs' render={()=> <DialogsContainer />}  />
          <Route path='/users' render={()=> <UsersContainer/>} />
          <Route path='/pagin' render={()=> <Pagination/>} />
          <Route path='/login' render={()=> <Login/>} />
        </div>
      </div>
      </BrowserRouter>
  )
}

export default App;
