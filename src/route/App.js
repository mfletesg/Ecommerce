import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Ecommerce from '../pages/Ecommerce'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Ecommerce}/>
        </Switch>
    </BrowserRouter>
)

export default App
