import { Outlet } from "react-router-dom"
import Navbar from "./Header/Navbar"
import Footer from "./Footer/Footer"
import Hero from "./Header/Hero"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
