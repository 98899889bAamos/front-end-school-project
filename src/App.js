import React from 'react';
import './App.css';
import Home from './components/Home';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Account from './components/Account';
import Records from './components/Records';
import Scan from './components/Scan';
import EditStudent from './components/EditStudent';
import EditAdmin from './components/EditAdmin';
import Generate from './components/Generate';
import editQr from './components/EditQr';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar className='home-nav'/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contacts' component={Contact} />
    <Route exact path='/signIn' component={SignIn} />
    <Route exact path='/account' component={Account} />
    <Route exact path='/records' component={Records} />
    <Route exact path='/generate' component={Generate} />
    <Route exact path='/scan' component={Scan} />
    <Route exact path='/edit-student/:id' component={EditStudent} />
    <Route exact path='/edit-qr/:id' component={editQr} />
    <Route exact path='/edit-admin/:id' component={EditAdmin} />
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
