import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './VerseComponent.css'
export default function VerseMainSection() {
  return (
    <>

      <section className='VerseMain'>
        <h1 className='verseHead'>BG 1.1</h1>
        <div className='VerseMainText'>
          <p className='verseText'>
            धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
            मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।</p>
        </div>
        <div className='verseMainTransl'>
          <p className='verseTransl'>dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya</p>
        </div>
        <div className='verseMainWord'>
          <p className='verseWord'>dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay</p>
        </div>

        <div className='VerseMainTranslation'>
          <h1 className='verseTransHead'>Translation</h1>
          <div className='verseTrans'>
            <p className='verseTransPara'>
              1.1 Dhritarashtra said What did my people and the sons of Pandu do when they had assembled together eager for battle on the holy plain of Kurukshetra, O Sanjaya.
            </p>
          </div>
        </div>

        <div className='VerseMainCommentary'>
          <h1 className='verseCommHead'>Commentary</h1>
          <div className='verseComm'>
            <p className='verseCommPara'>
              1.1 धर्मक्षेत्रे on the holy plain? कुरुक्षेत्रे in Kurukshetra? समवेताः assembled together? युयुत्सवः desirous to fight? मामकाः my people? पाण्डवाः the sons of Pandu? च and? एव also? किम् what? अकुर्वत did do? सञ्जय O Sanjaya.Commentary Dharmakshetra -- that place which protects Dharma is Dharmakshetra. Because it was in the land of the Kurus? it was called Kurukshetra.Sanjaya is one who has conered likes and dislikes and who is impartial.
            </p>
          </div>
        </div>


      </section>

    </>
  )
}
