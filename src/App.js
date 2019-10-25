import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import BasicExample from './BasicExample'

function App() {
    return (
        <Router>
            <nav>
                <Link to="/BasicExample">BasicExample</Link>
            </nav>
            <Switch>
                <Route path='/BasicExample' component={BasicExample}></Route>
            </Switch>
        </Router>)
}



export default App