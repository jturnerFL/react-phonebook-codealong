import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Contact, Phonebook } from './components'
import './style.css';
 import { firebaseConfig } from './firebaseConfig'
 import 'firebase/auth';
 import { Provider } from 'react-redux';
 import { store } from './redux/store'


let myTitle = "Jim's Phonebook"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
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
    {/* </Provider>
    </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);




