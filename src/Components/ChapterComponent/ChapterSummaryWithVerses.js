import React, { useState } from 'react'
import VersesSection from './VersesSection';
import './ChapterCss/ChapterSummary.css';
import { useEffect } from 'react';
import VerseHeader from './VerseHeader';

const ChapterSummaryWithVerses = (props) => {
  const id = props;


  const Chapnumber = id.id;
  const [data, setdata] = useState([]);
  const [allverses, setallverses] = useState([])

  const getChapDetails = async () => {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';
    const myData = await fetch(url, { headers: { 'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com', 'X-RapidAPI-Key': '613c51d5efmsh00531d699ecc328p1811eejsn0890148d4afc' } });
    const allData = await myData.json();
    setdata(allData);
  }
  const getAllVerses = async () => {
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${Chapnumber}/verses/`;
    const verses = await fetch(url, { headers: { 'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com', 'X-RapidAPI-Key': '613c51d5efmsh00531d699ecc328p1811eejsn0890148d4afc' } });
    const allVerses = await verses.json();
    setallverses(allVerses);

  }

  useEffect(() => {
    getChapDetails();
    getAllVerses();
  }, [])



  const myChapter = data.filter((element) => {
    return element.id == Chapnumber;
  })








  return (
    <>
      <div className='mainChapSection'>
        <h1 className='mainChapHeader'>
          Chapter {Chapnumber}
        </h1>
        <h1 className='mainChapTitle'>{myChapter[0]?.name_translated}</h1>
        <p className='mainChapSummary'>{myChapter[0]?.chapter_summary}</p>
      </div>
      <div className='VerseSection'>
        <VerseHeader numberofVerses={myChapter[0]?.verses_count} />
        {allverses.map((element) =>
          <VersesSection key={element.id} number={element.verse_number} verseContent={element.transliteration} />
        )}
      </div>
    </>
  )
}
export default ChapterSummaryWithVerses