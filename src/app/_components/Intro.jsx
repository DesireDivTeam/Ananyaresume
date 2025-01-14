import React from 'react'
import Wrapper from './Wrapper'

export default function Intro() {
    return (
        <div className='py-16 md:py-20'>
            <Wrapper className='max-w-4xl mx-auto space-y-8'>
                <div className='bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-12 space-y-8'>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent'>
                        Introduction
                    </h2>
                    <div className='space-y-6'>
                        <p className='text-gray-300 text-lg md:text-xl leading-relaxed'>
                            I was born in Mumbai and was fortunate to be raised in different cities across India (North and Western India). With its rich and diverse culture, every new place in India offers something new to learn and grow.
                        </p>
                        <p className='text-gray-300 text-lg md:text-xl leading-relaxed'>
                            I am raised in a close-knitted loving family with my grandparents and my mother being passionate educators in Sciences and Language. These traits of my family members have led to my all-round development and life experiences.
                        </p>
                        <p className='text-gray-300 text-lg md:text-xl leading-relaxed'>
                            I excelled in Senior Secondary examination with top percentile performance along with keen interest in Dance. I continued this passion during B Tech in Computer Science from Delhi Technological University (DTU) – with good mix of performance in academics, research papers, documentary & leading extra curricular activities.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}