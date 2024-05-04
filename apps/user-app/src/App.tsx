import { Appbar } from '@repo/ui/appbar'
import { Homepage } from '@repo/ui/homepage'
import { Sidebar } from '@repo/ui/sidebar'
import React from 'react'


export default function App() {
  return (
    <div className='w-full h-screen'>
        <Appbar></Appbar>
        <div className='grid grid-cols-10 h-full'>
            <div className='grid col-span-2 border-r-2 '>
              <Sidebar></Sidebar>
            </div>
            <div className='grid col-span-8 h-full'>
                <Homepage>
                  <h1 className='ml-4 mt-8 mb-4 text-5xl text-blue-500 font-semibold'>Good afternoon, Sathvik Kandadi</h1>
                </Homepage>
            </div>
        </div>
    </div>
  )
}
