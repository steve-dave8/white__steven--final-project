import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listings from './components/pages/Listings'
import CreateUser from './components/pages/CreateUser'
import PrivateRoute from './components/shared/PrivateRoute'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />     
          <PrivateRoute path="/submissions">
            <Listings />
          </PrivateRoute>
          <PrivateRoute path="/create-user">
            <CreateUser />
          </PrivateRoute>
          <Route exact path="/login" component={Login} />  
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
