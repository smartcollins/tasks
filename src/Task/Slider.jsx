import React, { useEffect, useState } from 'react';
import { CaretCircleLeft,CaretCircleRight } from 'phosphor-react';
import images from './images';


const Slider = ()=>{
    const [slide,setSlide] = useState(0);

    const forward = ()=>{
        slide === images.length - 1 ? setSlide(0) : setSlide(slide + 1)
    }
    
    const backward = ()=>{
        slide === 0 ? setSlide(images.length - 1) : setSlide(slide - 1)
    }

    useEffect(() => {
        setTimeout(() => {
        forward()
        }, 2000);
      });


    // console.log(images.length)

    const items = images.map((item,idx)=>(
        <div key={idx} className={slide === idx ? 'w-full ease-in-out transition-all animate-pulse' : 'hidden'}>
            <img src={item.img} className='w-full h-full object-cover' alt={`slide-${idx}`} />
        </div>
    ))


    return(
        <div className=' relative'>
            <div className='bg-red-500 h-[50vh] w-11/12 md:w-3/4 mx-auto flex relative'>
                {items}
            </div>
            <CaretCircleLeft onClick={backward} className='absolute top-1/2 left-0' size={30}/>
            <CaretCircleRight onClick={forward} className='absolute top-1/2 right-0' size={30} weight='light'/>
        </div>
    )
}


export default  Slider;