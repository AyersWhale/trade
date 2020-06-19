import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Demo1 from './pages/demo1'
import Demo2 from './pages/demo2'

export default class ConfigRouter extends Component {
    render() {
        return (
            // <Router>
            //     <Route name='index1' path='/' Component={demo1}></Route>
            //     <Route name='index2' path='/demo2' Component={demo2}></Route>
            // </Router>
            <Router>
                <div>
                    <Route exact path="/">
                        <Demo1 />
                    </Route>
                    <Route path="/news">
                        <Demo2 />
                    </Route>
                </div>
            </Router>
        )
    }
}
