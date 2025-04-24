"use client"
import React, { useState } from 'react'
import exportblack from "@/assets/exportblack.png"
import setico from "@/assets/setico.png"
import ethico from "@/assets/ethico.png"
import darrow from "@/assets/darrow.png"
import arrowdown from "@/assets/arrowdown.png"
import undo from "@/assets/undo.png"
import exportd from "@/assets/exportblack.png"
import infoico from "@/assets/info.png"
import infoicoblack from "@/assets/infoblack.png"

import ethwhite from "@/assets/ethwhite.png"
import ethblack from "@/assets/ethblack.png"

import poly from "@/assets/poly.png"
import Image from 'next/image'

import { motion } from "framer-motion";


const MotionTop = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='h-full flex flex-col overflow-hidden'>
      
      
      <motion.div 
      key={1}
      layout
      initial={{ opacity: 1, height: '100%' }}
      animate={active ? { opacity: 0, height: 0 } : {opacity: 1, height: "100%"}}
      exit={{ opacity: 1, height: '100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
            
      className='overflow-hidden '>
        <div className='flex gap-10 w-full'>
          <div className='bg-[#1B1C1E] w-full rounded-[1.6rem] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] p-8 relative'>
            <div className='absolute right-3 top-3 rounded-full bg-primary p-1.5 w-7 h-7'>
              <Image src={setico} alt=''/>
            </div>
              <div className='bg-[#111111] mt-2.5 py-4 px-6 rounded-[1.2rem]'>
                <p className='text-primary font-mont text-sm font-extrabold'>Sell</p>
                <div className='flex gap-2 justify-between items-center mt-3'>
                  <input type='number' placeholder='0' className='font-bebas text-4xl text-white w-full'/>
                  <div className='flex gap-1 bg-white rounded-full items-center px-2 py-1'>
                    <div className='w-6 h-6'>
                      <Image src={ethico} alt=''/>
                    </div>
                      <p className='font-mont font-extrabold text-sm text-[#111111]'>ETH</p>
                    <div className='w-4'>
                      <Image src={darrow} alt=''/>
                    </div>
                  </div>
                </div>
                <div className='flex gap-2 justify-end mt-3'>
                  <p className='font-bebas text-[#4E4F54] text-sm'>0 eth</p>
                  <div className='bg-[#3F3F3F] px-2 py-0.5 rounded-full'>
                    <p className='text-[#FFFFFF47] font-mont font-extrabold text-[0.65rem]'>MAX</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#111111] mt-3 py-4 px-6 rounded-[1.2rem] relative'>
                <div className='absolute w-full -top-9 left-0 flex justify-center'>
                <div className='bg-[#1B1C1E] rounded-full w-[4.2rem] h-[4.2rem] p-2.5'>
                  <div className='bg-primary rounded-full p-3.5 w-full h-full'>
                    <Image src={arrowdown} alt=''/>
                  </div>
                </div>
                </div>
                <p className='text-primary font-mont text-sm font-extrabold'>Buy</p>
                <div className='flex gap-2 justify-between items-center mt-3'>
                  <input type='number' placeholder='0' className='font-bebas text-4xl text-white w-full'/>
                  <div className='flex gap-1 bg-white rounded-full items-center px-2 py-1'>
                    <div className='w-6 h-6'>
                      <Image src={ethico} alt=''/>
                    </div>
                      <p className='font-mont font-extrabold text-sm text-[#111111]'>ETH</p>
                    <div className='w-4'>
                      <Image src={darrow} alt=''/>
                    </div>
                  </div>
                </div>
                <div className='flex gap-2 mt-3'>
                  <p className='font-bebas text-[#4E4F54] text-sm'>$0</p>
                  
                </div>
              </div>

              <div className='w-full flex justify-center mt-2'>
                <div className='bg-primary py-z px-10 rounded-2xl'>
                  <p className='text-4xl text-[#262626] font-bad'>SWAP</p>
                </div>
              </div>
          </div>
          <div className='space-y-5 flex-1/2'> 
              <div className='bg-white rounded-[1.3rem] w-full flex flex-col gap-3 items-start p-4 '>
                  <div className='bg-[#1B1C1E] w-24 text-center py-1 rounded-full'>
                      <p className='font-bebas text-sm text-primary'>market cap</p>
                  </div>
                  <p className='font-mont text-3xl text-[#1B1C1E] font-extrabold'>10,000</p>
              </div>
              <div className='bg-white rounded-[1.3rem] w-full flex flex-col gap-3 items-start p-4'>
                  <div className='bg-[#1B1C1E] w-24 text-center py-1 rounded-full'>
                      <p className='font-bebas text-sm text-primary'>Price</p>
                  </div>
                  <p className='font-mont text-3xl text-[#1B1C1E] font-extrabold'>0x12...5678</p>
              </div>
              <div className='bg-white rounded-[1.3rem] w-full flex flex-col gap-3 items-start p-4 relative'>
                  <div className='w-7 h-7 p-1 rounded-full bg-primary absolute right-2 top-2'>
                      <Image src = {exportblack} alt=""/>
                  </div>
                  <div className='bg-[#1B1C1E] w-24 text-center py-1 rounded-full'>
                      <p className='font-bebas text-sm text-primary'>contract add.</p>
                  </div>
                  <p className='font-mont text-3xl text-[#1B1C1E] font-extrabold'>0x12...5678</p>
              </div>
          </div>
        </div>
        <div className='flex w-full  gap-10 mt-10'>
          <div className='border-primary flex-1/3  border-2 bg-[#1B1C1E] rounded-[1.5rem] relative pt-8 pb-4 px-5'>
            <div className='bg-primary w-7 h-7 p-1 rounded-full absolute top-2 right-2'>
              <Image src={exportd} alt=""/>
            </div>
            <div className='bg-primary px-3 py-0.5 rounded-full absolute -top-3 left-8'>
              <p className='font-bebas text-[#262626] pt-0.5 text-xs'>top buyer</p>
            </div>
            <div className='flex gap-2 items-center'>
              <p className='font-bebas text-2xl pt-0.5'>0x12...5g47</p>
              <div className='w-4 h-4'>
                <Image src={undo} alt='' />
              </div>
            </div>
            <div className='bg-white rounded-full py-2 px-4 flex items-center justify-between  mt-4'>
              <div className='bg-[#1B1C1E] rounded-full px-3 py-0.5'>
                <p className='font-bebas text-primary text-[0.63rem] pt-0.5'>eth spent</p>
              </div>
              <p className='text-xl font-extrabold font-mont text-[#1B1C1E]'>00.0000</p>
            </div>
          </div>

          <div className='bg-[#1B1C1E] flex-1/4 rounded-[1.5rem]  relative pt-8 px-5 '>
            <div className='w-3 h-3 absolute right-3 top-3'>
              <Image src={infoico} alt=''/>
            </div>
          <div className='bg-white px-4 py-1.5 rounded-full'>
              <p className='text-[#1B1C1E] font-bebas text-[0.63rem] pt-0.5'>accumulated tax</p>
          </div>
          <div className='flex gap-0 mt-7 items-center'>
            <div className='w-16'>
              <Image src={ethwhite} alt=''/>
            </div>
              <p className='text-2xl text-white font-extrabold'>00.00</p>
          </div>
          </div>

          <div className='bg-[#1B1C1E] flex-1/2 rounded-[1.5rem] flex flex-col justify-end  relative pt-8 px-5 '>
            <div className='w-3 h-3 absolute right-3 top-3'>
              <Image src={infoico} alt=''/>
            </div>
            <div className='flex justify-around '>
              <div>
                <div>
                  <p className='font-mont font-extrabold text-4xl'>4%</p>
                </div>
                <div className='bg-primary px-4 py-1 rounded-lg mt-6'>
                  <p className='text-sm font-bebas text-[#262626]'>buy tax</p>
                </div>
              </div>
              <div>
                <div>
                  <p className='font-mont font-extrabold text-4xl'>4%</p>
                </div>
                <div className='bg-primary px-4 py-1 rounded-lg mt-6'>
                  <p className='text-sm font-bebas text-[#262626]'>buy tax</p>
                </div>
              </div>
            </div>

          </div>
        </div>   
      </motion.div>
      
        <div className='flex items-center gap-4 w-full mt-10 '>
          

          <div className='bg-white  w-full rounded-s-[1.2rem] py-5 px-6 flex items-center justify-between  mt-4'>
            <div className='bg-[#1B1C1E] rounded-full px-3 py-0.5'>
              <p className='font-bebas text-primary text-[0.63rem] pt-0.5'>buy volume</p>
            </div>
            <p className='text-xl font-extrabold font-mont text-[#1B1C1E]'>$1,337,474</p>
          </div>
          
          <div className='bg-primary w-full rounded-[1.2rem] py-4 px-6 flex flex-col gap-4 items-center justify-between relative'>
            <div className='w-3 h-3 absolute right-3 top-3'>
              <Image src={infoicoblack} alt=''/>
            </div>
            
            <div className='bg-[#1B1C1E] rounded-full px-3 mx-auto py-0.5'>
              <p className='font-bebas text-primary text-[0.63rem] pt-0.5'>buy volume</p>
            </div>
            
            <p className='text-[#1B1C1E] text-3xl font-mont font-extrabold'>120 min</p>

          </div>

          <div className='bg-white  w-full rounded-e-[1.2rem] py-5 px-6 flex items-center justify-between  mt-4'>
            
            <p className='text-xl font-extrabold font-mont text-[#1B1C1E]'>$1,337,474</p>
            <div className='bg-[#1B1C1E] rounded-full px-3 py-0.5'>
              <p className='font-bebas text-primary text-[0.63rem] pt-0.5'>buy volume</p>
            </div>
          </div>
        </div>
      
        <div className='mt-10 bg-primary px-6 py-3 rounded-t-[1.3rem] relative '>
            <div className='absolute -top-6 left-0 w-full justify-center flex ' onClick={()=>setActive(!active)}>
              <div className='bg-[#111111] rounded-full p-1.5'>
                <div className='bg-white rounded-full p-3.5 w-12 h-12'>
                  <Image src={arrowdown} className={`${active? "rotate-0" : "rotate-180"} `} alt=''/>
                </div>
              </div>
            </div>
            <p className='text-[#1B1C1E] font-extrabold font-mont text-2xl'>Event Log</p>

          </div>
       
        <motion.div 
        key={2}
        layout
        initial={{height: 0}}
        animate={active ? { height: "100%" } : {height: 0}}
        exit={{ height: 0}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='bg-[#1B1C1E] h-0 justify-center gap-10 flex flex-col rounded-[1.3rem]  overflow-hidden'>
          
          
          
          
          <div className='flex gap-8 items-center px-7 justify-between'>
            
            <div className='bg-white flex flex-1/2 items-start flex-col p-4 rounded-[1.2rem]'>
              <div className='bg-[#1B1C1E] py-0.5 px-4 rounded-full'>
                <p className='text-primary font-bebas text-xs pt-0.5'> total rewards distributed</p>
              </div>
              <div className='flex mt-4 justify-between items-center w-full'>
                <div className='flex items-center'>
                  <div className='w-9'>
                    <Image src={ethblack} alt='' />
                  </div>
                  <p className='font-mont font-extrabold text-[1rem] text-[#000000]'>
                    00.00
                  </p>
                </div>

                <p className='font-bebas text-sm text-[#000000A6]'>
                ~ 12,345,678 USD
                </p>
              </div>
            </div>

            <div className='flex gap-2.5 items-center'>
              <div className='space-y-2'>
                <div className='bg-primary py-1.5 w-[4.5rem] text-center rounded-tl-xl'>
                  <p className=' text-[#262626] pt-0.5 font-bebas text-sm'>date</p>
                </div>
                <div className='bg-primary py-1.5 w-[4.5rem] text-center rounded-bl-xl'>
                  <p className=' text-[#262626] pt-0.5 font-bebas text-sm'>time (utc)</p>
                </div>
              </div>

              <div className='flex gap-2 relative'>
                
                <div className='bg-[#1B1C1E] rounded-full p-[0.2rem] w-7 h-7  absolute -left-4 top-6'>
                  <div className='bg-white p-1 rounded-full'>
                    <Image src={poly} alt='' />
                  </div>
                </div>

                <div className='bg-[#1B1C1E] rounded-full p-[0.2rem] w-7 h-7  absolute -right-4 top-6'>
                  <div className='bg-white p-1 rounded-full rotate-180'>
                    <Image src={poly} alt='' />
                  </div>
                </div>

                <div className='bg-[#111111] shadow-[4px_4px_16px_0px_#00000059] w-[4.5rem] rounded-xl space-y-5 text-center py-3'>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14th feb</p>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14 : 32</p>
                </div>
                <div className='bg-[#111111] shadow-[4px_4px_16px_0px_#00000059] w-[4.5rem] rounded-xl space-y-5 text-center py-3'>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14th feb</p>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14 : 32</p>
                </div>
                <div className='bg-[#111111] shadow-[4px_4px_16px_0px_#00000059] w-[4.5rem] rounded-xl space-y-5 text-center py-3'>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14th feb</p>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14 : 32</p>
                </div>
                <div className='bg-[#111111] shadow-[4px_4px_16px_0px_#00000059] w-[4.5rem] rounded-xl space-y-5 text-center py-3'>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14th feb</p>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14 : 32</p>
                </div>
                <div className='bg-[#111111] shadow-[4px_4px_16px_0px_#00000059] w-[4.5rem] rounded-xl space-y-5 text-center py-3'>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14th feb</p>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14 : 32</p>
                </div>
                <div className='bg-[#111111] shadow-[4px_4px_16px_0px_#00000059] w-[4.5rem] rounded-xl space-y-5 text-center py-3'>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14th feb</p>
                  <p className='text-white font-bebas text-[0.63rem] pt-0.5'>14 : 32</p>
                </div>

              </div>

            </div>

          </div>

          <div className='px-7 flex gap-6 w-full '>
            
            <div className='bg-[#111111] w-full rounded-[1.13rem] px-6 pb-6 pt-10 relative'>

              <div className='bg-primary px-5 py-0.5 rounded-full absolute -top-4'>
                <p className='text-[#17181A] pt-0.5 font-bebas text-[0.95rem]'>top buyers</p>
              </div>

              <div className='grid grid-cols-2 gap-6'>
                  {
                    Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className='bg-[#25262A] shadow-[6px_6px_15px_0px_#00000059] rounded-[0.6rem] p-2 flex items-center relative'>
                        
                        <p className='font-mont text-sm font-extrabold border-4 border-[#111111] bg-white w-9 h-9 flex items-center justify-center rounded-full text-[#111111] absolute -top-4 -left-4'>
                          {i}
                        </p>
                        
                        <p className='font-mont text-[0.8rem] text-white font-extrabold text-center w-full'>0x12...f35h</p>
                        
                        <div className='space-y-2 shrink-0'>
                          <div className='bg-white rounded-full py-0.5 px-3'>   
                            <p className='text-[#111111] font-bebas pt-0.5 text-[0.65rem]'>eth spent : 00.0000</p>
                          </div>
                          <div className='bg-primary rounded-full py-0.5 px-3'>   
                            <p className='text-[#111111] font-bebas pt-0.5 text-[0.65rem]'>rewards : $ 12,345</p>
                          </div>
                        </div>
                        
                      </div>
                    ))
                  }

              </div>
            
            </div>

            <div className='h-full bg-[#111111] rounded-[1.3rem] relative flex-2/3'>
              <div className='bg-primary px-5 py-0.5 rounded-full absolute -top-4 left-5'>
                <p className='text-[#17181A] pt-0.5 font-bebas text-[0.95rem]'>reward breakdown</p>
              </div>
              <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='bg-white w-32 h-32 rounded-full flex justify-center items-center'>
                  <p className='text-[#1B1C1E] text-sm font-mont font-extrabold'>$ 1,234,567</p>
                </div>
                <div className='mt-10 gap-2.5 flex items-center'>
                  <div className='bg-[#1B1C1E] px-5 pt-3 pb-2 gap-3 rounded-full flex justify-between items-center relative'>
                    <div className='bg-[#C8F051] rounded-full text-xs px-3 py-0.5 font-bebas text-[#111111] absolute -top-3'>
                      <p>buyer’s pool</p>
                    </div>
                    <p className='font-mont font-[700] text-xs'>$ 1,234,567</p>
                    <div className='bg-[#C8F051] rounded-full w-6 h-6'></div>
                  </div>
                  <div className='bg-[#1B1C1E] px-5 pt-3 pb-2 gap-3 rounded-full flex justify-between items-center relative'>
                    <div className='bg-[#08FF15] rounded-full text-xs px-3 py-0.5 font-bebas text-[#111111] absolute -top-3'>
                      <p>buyer’s pool</p>
                    </div>
                    <p className='font-mont font-[700] text-xs'>$ 1,234,567</p>
                    <div className='bg-[#08FF15] rounded-full w-6 h-6'></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </motion.div>


                            
    </div>
  )
}

export default MotionTop
