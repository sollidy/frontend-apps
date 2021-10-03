import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Home } from './pages';
import { DetailedPage } from './pages/detailed';

function App() {
  return (
    <Router basename='/portfolio-app-react'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/detailed' component={DetailedPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
