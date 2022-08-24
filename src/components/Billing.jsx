import React from 'react'
import { bill, google, apple } from '../assets'
import styles, { layout } from '../style'


const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bills" className={`w-[100%] h-[100%] relative z-[5]`} />
        <div className={`absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient`} />
        <div className={`absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient`} />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="image" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' /> 
          <img src={google} alt="image" className='w-[128px] h-[42px] object-contain cursor-pointer' /> 
        </div>
      </div>

      
    </section>
  )
}

export default Billing