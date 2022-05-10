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
import Protected from './components/Protected';
import ScannerTrial from './components/ScannerTrial';



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
    <Route exact path='/account' component={Account}>
      <Protected Cmp={Account} />
    </Route>
    <Route exact path='/records' component={Records}>
        <Protected Cmp={Records} />
    </Route>
    <Route exact path='/generate' component={Generate}>
      <Protected Cmp={Generate} />
    </Route>
    <Route exact path='/scan' component={Scan}>
      <Protected Cmp={Scan} />
    </Route>
    <Route exact path='/edit-student/:id' component={EditStudent}></Route>
    <Route exact path='/edit-qr/:id' component={editQr}></Route>
    <Route exact path='/edit-admin/:id' component={EditAdmin}></Route>
    <Route exact path='/scanner-trial' component={ScannerTrial}></Route>
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
