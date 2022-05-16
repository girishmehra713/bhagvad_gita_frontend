import React from 'react'
import { Link } from 'react-router-dom'
const Contentimage = (props) => {
  return (
    <div className='contentSection'>
      <h1 className='contentShlok'>"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:।</h1>
      <h1 className='contentShlok'>अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"</h1>
      <Link to='/Chapters' className='readMore'>Read More</Link>
    </div>
  )
}
export default Contentimage