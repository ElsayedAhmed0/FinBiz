import React from 'react'
import SharedButton from "../sharedComponent/SharedButton"
const Introducing = () => {
  return (
    <div className='introducing_sec'>
      <div className='btn_introducing'>
        <button>
            <span>New</span>
            <h6>Introducing AI Automation</h6>
            <img src="img/arrow-left.svg" alt="" />
        </button>
        <h3>The Finance Solutions For Your Business</h3>
        <p>Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.</p>
       
      </div>
      <div className='mail_text'>
            <input type="text" placeholder='Enter your email adress'/>
            {/* <button></button> */}
            <SharedButton variant="mail_btn" label="Book a Demo" size="fnt_16"/>
        </div>
        <div className='reviews_sec'>
            <div className='img_reviewer'>
                <img src="img/photo.svg" alt="" />
                <img src="img/photo_1.svg" alt="" />
                <img src="img/photo_2.svg" alt="" />
                <img src="img/photo_1.svg" alt="" />
            </div>
            <span>1,200+ reviews (4.9 of 5)</span>
        </div>
    </div>
  )
}

export default Introducing
