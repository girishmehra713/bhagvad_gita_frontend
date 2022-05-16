import React from 'react'
import './ChapterCss/ChapterSummary.css';
export default function VersesSection(props) {
  const { number, verseContent } = props;
  return (

    <div className='verseNumberandDetails'>
      <div className='verseNumber'>
        <span>VERSE</span>
        <span className='verseId'>{number}</span>
      </div>
      <div className='VerseDetails'>
        <p className='Verse'>{verseContent}</p>
      </div>
    </div>

  )
}
