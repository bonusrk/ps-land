import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DefaultLayout: React.FC = (props): JSX.Element => {
  const { children } = props
  return (
    <>
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
