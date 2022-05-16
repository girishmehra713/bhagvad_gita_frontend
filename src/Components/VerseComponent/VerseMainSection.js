import React from 'react'
import { useLocation } from 'react-router-dom'
import './VerseComponent.css'
import { useState } from 'react';
import { useEffect } from 'react';
export default function VerseMainSection() {

  const location = useLocation();

  let path = location.pathname;
  const verseId = path.split(/\//)[4];
  const chapterId = path.split(/\//)[2];
  const [data, setdata] = useState({});


  const getVerseDetails = async () => {
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/${verseId}/`;
    const verseData = await fetch(url, { headers: { 'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com', 'X-RapidAPI-Key': '613c51d5efmsh00531d699ecc328p1811eejsn0890148d4afc' } });
    const particularVerseData = await verseData.json();
    setdata(particularVerseData);
  }
  useEffect(() => {
    getVerseDetails();
  }, [])



  return (
    <>

      <section className='VerseMain'>
        <h1 className='verseHead'>BG {chapterId}.{verseId}</h1>
        <div className='VerseMainText'>
          <p className='verseText'>
            {data.text}</p>
        </div>
        <div className='verseMainTransl'>
          <p className='verseTransl'>{data.transliteration}</p>
        </div>
        <div className='verseMainWord'>
          <p className='verseWord'>{data.word_meanings}</p>
        </div>

        {/* <div className='VerseMainTranslation'>
          <h1 className='verseTransHead'>Translation</h1>
          <div className='verseTrans'>
            <p className='verseTransPara'>
              {data.translations.length >= 1 ? data.translations[0] : "Not Avaialable"}
            </p>
          </div>
        </div> */}

        {/* <div className='VerseMainCommentary'>
          <h1 className='verseCommHead'>Commentary</h1>
          <div className='verseComm'>
            <p className='verseCommPara'>
              {data.commentaries[0]?.description}
            </p>
          </div>
        </div> */}


      </section>

    </>
  )
}
