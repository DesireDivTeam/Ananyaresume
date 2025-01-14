import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='w-full py-10 md:py-16'>
            <Wrapper className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <section className='order-2 md:order-1'>
                    <div className='relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group'>
                        <Image 
                            src="/images/profile.jpg"
                            alt="Ananya Bhargava"
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-105'
                            priority
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent' />
                    </div>
                </section>
                <section className='order-1 md:order-2 space-y-8'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent'>
                        Ananya Bhargava
                    </h1>
                    <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                        Graduate Student pursuing B Tech in Computer Science from prestigious Delhi Technological University, with keen interest in Data Structures and Algorithms (DSA), Data Science/Analytics and Object Oriented Programming (OOPS), passionate about career in Tech, Finance & dance.
                    </p>
                </section>
            </Wrapper>
        </div>
    )
}