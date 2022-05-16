import React from 'react'
import { useNavigate } from "react-router-dom";

const Chapter = (props) => {
  const { number, title, summary, Verses, id } = props;
  const history = useNavigate();
  const goToChapterPage = () => {
    history(`/Chapters/${id}`);
  }

  return (
    <div onClick={goToChapterPage} className='Chapter'>
      <div>
        <h4 className='chapterNumber'>Chapter {number}</h4>
      </div>
      <div>
        <h3 className='chapterTitle'>
          {title}
        </h3>
      </div>
      <div>
        <p className='chapterContent'>
          {summary}
        </p>
      </div>
      <div className='chapterCardFooter'>
        <i className="fas fa-bars"></i>
        <span className='verseNumber'>{Verses} Verses</span>
      </div>
    </div>
  )
}

export default Chapter