import React from 'react'
import Chapter from './Chapter';
import { useState } from 'react';

import { useEffect } from 'react';


const Chaptersection = () => {
  const [chapters, setchapters] = useState([]);
  const updateChapters = async () => {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/'
    let data = await fetch(url, { headers: { 'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com', 'X-RapidAPI-Key': '613c51d5efmsh00531d699ecc328p1811eejsn0890148d4afc' } });
    let parsedData = await data.json();
    setchapters(parsedData);
  }

  useEffect(() => {
    updateChapters();
  }, [])



  return (
    <div className='chapterSection'>
      <div>
        <h1 className='headerChapter'>
          CHAPTERS
        </h1>
      </div>
      <div className='cardChapterSection'>
        {chapters.map((element) => { return <Chapter key={element.id} number={element.chapter_number} title={element.name_translated} summary={element.chapter_summary} Verses={element.verses_count} id={element.id} /> })}

      </div>
    </div>
  )
}
export default Chaptersection
