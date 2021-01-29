import React, { useState } from 'react'

import { makeStyles } from '@material-ui/styles'

import Modal from '@/components/blocks/Modal'

import { IconButton, DeleteIcon, Popup, CloseIcon, PopupButton } from './styles'

const useSstyles = makeStyles((theme) => {
  return {
    img: {
      width: '80px',
      height: '80px',
    },
    screenImg: {
      width: '100%',
      height: '100%',
    },
  }
})

export default function SwiperListItem(props) {
  const { img, handleDeleteImage } = props
  const [showModal, setShowModal] = useState(false)
  const classes = useSstyles()

  const handleClickDeleteButton = () => {
    handleDeleteImage(img)
  }

  const handleClickImage = () => {
    setShowModal(true)
  }

  const HandleClickClosePopup = () => {
    setShowModal(false)
  }

  return (
    <div>
      <img
        src={img.imgUrl}
        className={classes.img}
        alt="img"
        onClick={handleClickImage}
      />
      <IconButton onClick={handleClickDeleteButton}>
        <DeleteIcon />
      </IconButton>
      <Modal open={showModal}>
        <Popup>
          <img src={img.imgUrl} alt="img" className={classes.screenImg} />
          <PopupButton onClick={HandleClickClosePopup}>
            <CloseIcon />
          </PopupButton>
        </Popup>
      </Modal>
    </div>
  )
}
