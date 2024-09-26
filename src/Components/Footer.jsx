import React from 'react'
import { FaFacebook ,FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
  <>
  <hr />
  <footer>
    <div className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <FaFacebook size={24}/>
                <FaTwitter size={24}/>
                <FaLinkedin size={24}/>
                <FaInstagram size={24}/>
            </div>
        <div className='mt-8 border-t  border-gray-700 pt-8 flex flex-col items-center '>
            <p className='text-sm'>
                © 2023 Bipul Pratap Singh. All rights reserved.
            </p>
        </div>
        </div>

        </div>
    </div>

  </footer>
   
  </>
  )
}

export default Footer