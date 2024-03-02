import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-black text-white p-4'>
    <div class="flex space-x-8">
    <Link to="#" class="relative group">Home
      <svg class="absolute left-0 h-1 w-full bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L10 1" stroke="#FF4500" stroke-width="2"/>
      </svg>
    </Link>
    <Link to="#" class="relative group">Blogs
      <svg class="absolute left-0 h-1 w-full bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L10 1" stroke="#FF4500" stroke-width="2"/>
      </svg>
    </Link>
    <Link to="#" class="relative group">Services
      <svg class="absolute left-0 h-1 w-full bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L10 1" stroke="#FF4500" stroke-width="2"/>
      </svg>
    </Link>
    <Link to="#" class="relative group">Contact
      <svg class="absolute left-0 h-1 w-full bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L10 1" stroke="#FF4500" stroke-width="2"/>
      </svg>
    </Link>
    <Link to="#" class="relative group">About
      <svg class="absolute left-0 h-1 w-full bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1L10 1" stroke="#FF4500" stroke-width="2"/>
      </svg>
    </Link>
  </div>
</div>

  )
}

export default Nav