import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content,index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index === features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt='icons' className={`w-[50%] h-[50%] object-contain`} />
      </div>
      <div className={`flex-1 flex flex-col ml-3`}>
        <h4 className='font-poppin font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppin font-normal text-white text-[16px] leading-[23px] mb-1'>{content}</p>
      </div>
    </div>
  );
}

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className={`sm:block hidden`} /> we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>

    </section>
  )
}

export default Business