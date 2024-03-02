import React, { useEffect, useState } from 'react'
import { HiDocumentText } from 'react-icons/hi';
import { Sidebar } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom'


const DashbordProfile = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl);
        }
      }, [location.search]);
  return (
    <div className='mt-10'>
           <Link to={'/create-post'}>
            <Button
              type='button'
              gradientDuoTone='purpleToPink'
              className='w-full mt-10'
            >
              Create a post
            </Button>
          </Link>
          <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          </Sidebar>
    </div>
  )
}

export default DashbordProfile