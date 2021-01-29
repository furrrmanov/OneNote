import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/styles'

import SwiperListItem from '@/components/blocks/SwiperListItem'

import 'swiper/swiper.scss'
import { Text } from './styles'

const useSstyles = makeStyles((theme) => {
  return {
    img: {
      width: '80px',
      height: '100%',
    },
    slide: {
      width: '80px !important',
      marginRight: '20px',
    },
    swiper: {
      height: '80px',
    },
    plug: {
      margin: '0 auto',
    },
  }
})

export default function SwiperImages(props) {
  const { image, handleDeleteImage } = props
  const classes = useSstyles()

  return (
    <Swiper className={classes.swiper} slidesPerView={5}>
      {image.length ? (
        image.map((item, index) => {
          return (
            <SwiperSlide className={classes.slide} key={index}>
              <SwiperListItem
                img={item}
                handleDeleteImage={handleDeleteImage}
              />
            </SwiperSlide>
          )
        })
      ) : (
        <SwiperSlide className={classes.plug}>
          <Text>Upload pictures here</Text>
        </SwiperSlide>
      )}
    </Swiper>
  )
}
