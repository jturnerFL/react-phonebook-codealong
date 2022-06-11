import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Contact, Phonebook } from './components'
import './style.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const myTitle = "Jim's Phonebook"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle}/>
        </Route>
        <Route path='/phonebook'>
          <Phonebook></Phonebook>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        {/*<Route path='/signin'>
          <Signin></Signin>
          </Route>*/}

      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




