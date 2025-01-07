'use client'
import React, { useEffect, useState } from 'react'
import { PiQuotesFill } from "react-icons/pi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Wrapper from './Wrapper';

const testimonial = [
  {
    name : "-Nelson Mandela" ,
    desc : "Do not judge me by my success, judge me by how many times I fell down and got back up again."
  },
  {
    name : "-Rabindranath Tagore" ,
    desc : "We come nearest to the great when we are great in humility"
  },
  {
    name : "-Pt Birju Maharaj" ,
    desc : "Dance is nature. Listen to your Heart, it dances with its own Rhythm. The biggest thing that classical dance and music does to you is help attain balance between your mind and soul"
  },
  {
    name : "-Henry Wadsworth Longfellow" ,
    desc : "Let us, then, be up and doing, With a heart for any fate; Still achieving, still pursuing, Learn to labor and to wait"
  },
  {
    name : "-Rabbi Hillel" ,
    desc : "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when? "
  },
]
export default function Testimonial() {
  const [currentIndex , setCurrentIndex] = useState(0);
  const [transition,setTransition] = useState(false)
  const currentTestimonial = testimonial[currentIndex]

  const prevSlide = () =>{
    setTransition(true);
    setCurrentIndex((slide)=> (slide -1 + testimonial.length) % testimonial.length )
  }
  const nextSlide = () =>{
    setTransition(true);
    setCurrentIndex((slide)=> (slide + 1) % testimonial.length )
  }
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setTransition(false);
    }, 500);

    return () => clearTimeout(transitionTimer);
  }, [currentIndex]);
  return (
    <>
   
    
      <Wrapper className='relative '>
         <div className={`w-2/3 shadow-md border-b-2 border-[var(--maincolor)] rounded-lg mx-auto  transition-all duration-300 ${transition ? 'opacity-0 translate-y-10 ' : 'opacity-100 translate-y-0'}`}>
         <div
            className="flex flex-col gap-6 py-4 justify-center items-center"   >
            <span>
              <PiQuotesFill
                size={50}
              /> 
            </span>
            <p className='text-center'>
            {currentTestimonial.desc}
            </p>
            <h2 className='text-xl'>
             {currentTestimonial.name}
            </h2>
          </div>
        
         </div>
         <button onClick={prevSlide} className='absolute left-2 top-1/2 transform -translate-y-1/2 p-4 rounded-full'><MdOutlineArrowBackIosNew color='white' size={22}/></button>
         <button onClick={nextSlide} className='absolute right-2 top-1/2 transform -translate-y-1/2 p-4 rounded-full'><MdOutlineArrowForwardIos color='white' size={22}/></button>
      </Wrapper>
    </>
  )
}