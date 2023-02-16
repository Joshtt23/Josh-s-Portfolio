import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='flex flex-row justify-between my-3'>
      <div className='ml-3'>
      Developed and Designed by me 🙂 &copy; 2023
      </div>
      <div className='flex flex-row mr-1'>
      <a href="https://twitter.com/_Joshua_Traver_"><FaTwitterSquare size={40} className='mx-2'/></a>
      <a href="https://github.com/Joshtt23"><FaGithubSquare size={40} className='mx-2'/></a>
      <a href="https://www.linkedin.com/in/joshua-traver-05196812a/"><FaLinkedin size={40} className='mx-2'/></a>
      </div>
    </div>
  )
}

export default Footer