import React from 'react'
import Navabar from '../components/Navbar.js';

const index = ({children}) => {
  return (
    <>
        <Navabar />
        {children}
    </>
  )
}

export default index