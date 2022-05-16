import React from 'react'

export default function VerseHeader(props) {
  const { numberofVerses } = props;
  return (

    <div className='VerseHeader'>
      <span className='VerseSpan'>{numberofVerses} Verses</span>
      <div className='sortSearchVerses'>
        <input type='text' placeholder='Go to Verse' className='VerseInput' />
        <button className='sortVerse'><i className="fas fa-sort"></i>Sort</button>
      </div>
    </div>
  )
}
