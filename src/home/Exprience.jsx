import React from 'react'
import { FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex items-center'>
            <div className='border-l border-white pl-4'>
                <h1 className='uppercase text-4xl text-white'>
                    Experience
                </h1>
            </div>
        </div>
        <div className='flex items-center mt-4 text-white border-l-4 '>
            <p className='mr-4 text-white'>2023</p>
       <div>
       <FaCircle className='text-white' />
       </div>
            <p className='ml-4 text-white'>Fronted Developer (Intern)</p>
            <div className="border-pl-4 border-white">

            </div>
        </div>
    </div>
  )
}

export default Experience
