import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  ROUT_FOR_NOTEBOOK_PAGE,
  ROUT_FOR_SIGNIN_PAGE,
  ROUT_FOR_ROOT_PAGE,
  ROUT_FOR_CATALOG_PAGE,
} from '@/constants'
import Landing from '@/components/pages/LandingPage'
import Catalog from '@/components/pages/CatalogPage'
import SignIn from '@/components/pages/SignIn'
import PrivateRout from '@/components/wrappers/PrivateRoute'
import MessagesBar from '@/components/blocks/MessagesBar'

export default function RouteWrapper() {
  return (
    <Router>
      <MessagesBar />
      <Switch>
        <Redirect path={ROUT_FOR_ROOT_PAGE} to={ROUT_FOR_NOTEBOOK_PAGE} exact />
        <Route path={ROUT_FOR_SIGNIN_PAGE} component={SignIn} />
        <PrivateRout path={ROUT_FOR_NOTEBOOK_PAGE} component={Landing} />
        <PrivateRout path={ROUT_FOR_CATALOG_PAGE} component={Catalog} />
      </Switch>
    </Router>
  )
}
