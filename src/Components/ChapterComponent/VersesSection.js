import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ChapterCss/ChapterSummary.css';
export default function VersesSection(props) {
  const { chapNum, number, verseContent } = props;
  const history = useNavigate();
  const goToVersePage = () => {
    history(`/Chapters/${chapNum}/verse/${number}`);
  }
  return (

    <div onClick={goToVersePage} className='verseNumberandDetails'>
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
