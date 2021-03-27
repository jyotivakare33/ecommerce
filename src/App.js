import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShopMen from './pages/ShopMen';
import Detail from './pages/Detail';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/men" exact component={ShopMen} />
                <Route path="/detail" exact component={Detail} />
            </Switch>
        </Router>
    );
}

export default App;
