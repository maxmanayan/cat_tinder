import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import { Container } from 'semantic-ui-react';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import Footer from './components/Footer';
import Register from './pages/Register';
import NavBar from "./components/NavBar";
import Login from './pages/Login';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/componentDemo' component={ComponentDemo} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
