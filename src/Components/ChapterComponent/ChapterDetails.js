import React from 'react'
import ChapterSummaryWithVerses from './ChapterSummaryWithVerses'
import { useLocation } from 'react-router-dom';

export default function ChapterDetails(props) {

  const location = useLocation();
  let path = location.pathname;
  path = path.split(/\//)[2];

  return (
    <>
      <ChapterSummaryWithVerses id={path} />
    </>
  )
}

