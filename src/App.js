import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/nav/nav'
import Home from './components/home/home'
import Story from './components/story/story'
import Schedule from './components/schedule/schedule'
import Travel from './components/travel/travel'
import Registry from './components/registry/registry'
import WeddingParty from './components/weddingParty/weddingParty'
import Photos from './components/photos/photos'
import Footer from './components/footer/footer'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/lodging">
            <Travel />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/wedding-party">
            <WeddingParty />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
