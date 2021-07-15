import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core'

SwiperCore.use([Pagination, Navigation])

export const Home = (): JSX.Element => (
  <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      navigation
      onSlideChange={() => console.warn('slide change')}
      onSwiper={(swiper) => console.warn(swiper)}
    >
      <SwiperSlide>
        <img
          className={'slider-image'}
          src={'/assets/Banner_DTC.jpeg'}
          alt={'slide'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={'slider-image'}
          src={'/assets/Banner_Jam.jpeg'}
          alt={'slide'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={'slider-image'}
          src={'/assets/Banner_Solitaire.jpeg'}
          alt={'slide'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={'slider-image'}
          src={'/assets/Banner_Trip.jpeg'}
          alt={'slide'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={'slider-image'}
          src={'/assets/Banner_Wars.jpeg'}
          alt={'slide'}
        />
      </SwiperSlide>
    </Swiper>
  </div>
)

export default Home
