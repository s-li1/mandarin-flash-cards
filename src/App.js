import React from 'react'
import FlashCard from './pages/FlashCard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import HSKLevel1 from './pages/HSKLevel1';
import HSKLevel2 from './pages/HSKLevel2';
export default function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/flashcard" exact component={FlashCard}/>
          <Route path="/hsk-level/1" exact component={HSKLevel1}/>
          <Route path="/hsk-level/2" exact component={HSKLevel2}/>
        </Switch>
      </BrowserRouter>
  
    </React.Fragment>
  )
}
