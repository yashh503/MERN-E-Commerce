import React from 'react'
import logo from '../assest/logo.jpeg'

const Logo = ({w,h}) => {
  return (
    <>
<img src={logo} style={{height:'50px', width:'50px', borderRadius:'30px'}} />
</>
  )
}

export default Logo