import React from 'react'
import Wrapper from './Wrapper'

export default function Banner() {
    return (
        <div className='w-full py-16 text-white bg-gray-900'>
            <Wrapper className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <section>
                    Image
                </section>
                <section>
                    <h1 className='text-lg text-justify'>Graduate Student pursuing B Tech in Computer Science from prestigious Delhi Technological University, with keen interest in Data Structures and Algorithms (DSA), Data Science/Analytics and Object Oriented Programming (OOPS), passionate about career in Tech, Finance & dance. </h1>
                </section>
            </Wrapper>
        </div>
    )
}
