import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from "./components/pages/NotFound";

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

    const [alert, setAlert] = useState(null);

    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className='App'>
                        <Navbar/>
                        <div className='container'>
                            <Alert/>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/user/:login' component={User}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;

// class App extends Component {
//   q = () => 'Bars';
//   render() {
//     // const foo = () => 'Bar';
//     // const name = 'sujin';
//     // const showName = true;
//     // const loading = false;
//     // if (loading) {
//     //   return <h4>Loading...</h4>;
//     // }
//     return (
//       <div className='App'>
//         {/* 삼항연산자 if else */}
//         {loading ? ( <h4>Loading...</h4> ) : ( <h1>Hello {showName ? name : null}</h1> )}
//         {/* true 출력, false null */}
//         {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
//         <h1>Hello {foo()}</h1>
//         <h1>Hello {this.q()}</h1>
//       </div>
//     );
//   }
// }
