import React from 'react'

import Backdrop from '@material-ui/core/Backdrop'

import { MaterialModal } from './styles'

export default function Modal(props) {
  return (
    <MaterialModal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        invisible: false,
      }}
      open={props.open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      {props.children}
    </MaterialModal>
  )
}
