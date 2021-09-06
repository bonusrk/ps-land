import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import { useRouter } from 'next/router'

SwiperCore.use([Pagination, Navigation])

export const Home = (): JSX.Element => {
  const router = useRouter()
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <img
            className="slider-image"
            src="/assets/Banner_Jam.jpeg"
            alt="slide"
          />
          <button
            className="slider-button"
            type="button"
            onClick={() => router.push('/jam')}
          >
            VIEW GAME
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-image"
            src="/assets/Banner_DTC.jpeg"
            alt="slide"
          />
          <button
            className="slider-button"
            type="button"
            onClick={() => router.push('/dtc')}
          >
            VIEW GAME
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-image"
            src="/assets/Banner_Solitaire.jpeg"
            alt="slide"
          />
          <button
            className="slider-button"
            type="button"
            onClick={() => router.push('/solitaire')}
          >
            VIEW GAME
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-image"
            src="/assets/Banner_Trip.jpeg"
            alt="slide"
          />
          <button
            className="slider-button"
            type="button"
            onClick={() => router.push('/trip')}
          >
            VIEW GAME
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-image"
            src="/assets/Banner_Wars.jpeg"
            alt="slide"
          />
          <button
            className="slider-button"
            type="button"
            onClick={() => router.push('/wars')}
          >
            VIEW GAME
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home
