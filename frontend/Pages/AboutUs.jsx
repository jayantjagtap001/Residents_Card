import React from 'react'
import Card from '../Components/Card'

function AboutUs() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <h2 style={{fontSize:"3rem"}}>about us</h2>
      <p style={{width:"60vw",fontSize:"3rem"}}>we believe in the potential of young people to build a more abundant, innovative, and peaceful future.</p>
        <Card/>
      <p style={{width:"60vw",fontSize:"3rem"}}>our community architects want to meet and support the most ambitious people alive</p>
    </div>
  )
}

export default AboutUs
