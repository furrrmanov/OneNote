import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'

import CircularProgress from '@/components/controls/Spinner'
import { ROUT_FOR_SIGNIN_PAGE } from '@/constants'

export default function PrivateRout(props) {
  const [isLoading, setIsLoading] = useState(true)
  const isAuth = useSelector((state) => state.user.isLogged)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div style={{ margin: '15rem auto' }}>
        <CircularProgress />
      </div>
    )
  }

  return isAuth ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to={ROUT_FOR_SIGNIN_PAGE} />
  )
}
