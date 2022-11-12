import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </ScrollToTop>
  )
}