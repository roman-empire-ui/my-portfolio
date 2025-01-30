'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { BsArrowUpRight } from "react-icons/bs"
import { FaGithub  } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react' 
import 'swiper/css' 
import Image from 'next/image'
import WorkSlider from '@/components/WorkSlider'



const projects = [
  {
    no: '01',
    category: 'Fullstack',
    title: 'E-commerce',
    description: 'Developed an E-commerce website using React, Next.js, Node.js, Express, MongoDB. Used tailwind css for styling. Stripe for payment processing',
    stack : [{name : 'react'} , {name : 'next.js'} , {name : 'javascript'} , {name : 'tailwind.css'}],
    image : '/images/demo.png',
    live : '',
    gitHub : 'https://github.com/roman-empire-ui/ecommerce.git'
  },

  {
    no: '02',
    category: 'Fullstack',
    title: 'Kaiser Chat',
    description: `Developed a Sample chat app with real-time messaging, real-time user online/offline status, and chat
                    notifications.– Created a custom backend MongoDB database for handling APIs and data storage`,
    stack : [{name : 'react'} , {name : 'zustand'} , {name : 'javascript'} , {name : 'tailwind.css'}],
    image : '/images/kaiser.png',
    live : 'https://kaiser-chat.onrender.com',
    gitHub : 'https://github.com/roman-empire-ui/kaiser.git'
  },

  {
    no: '03',
    category: 'Fullstack',
    title: 'Social Networking App',
    description: ` Built a platform for users to share content and join communities.  Added notifications using NodeMailer and secure authentication via middleware. Optimized MongoDB queries and integrated AWS S3 for better performance.`,
    stack : [{name : 'react'} , {name : 'redux'} , {name : 'javascript'} , {name : 'material ui'}],
    image : '/images/snap.png',
    live : 'https://frolicking-sunshine-94655a.netlify.app/',
    gitHub : 'https://github.com/roman-empire-ui'
  },

  {
    no: '04',
    category: 'Frontend',
    title: 'Gaming Platform',
    description: `Designed a frontend gaming platform using html5 and css 3`,
    stack : [{name : 'html5'} , {name : 'css3'} , {name : 'javascript'}],
    image : '/images/gaming.png',
    live : 'http://gaming-website-trial.netlify.app',
    gitHub : ''
  },


  

]
const WorkPage = () => {
  const [project , setProject] = useState(projects[0])

  const hanSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex

    setProject(projects[currentIndex])
  }
  return (
    <motion.div 
    initial ={{opacity : 0}}
    animate={{opacity : 1 , transition : {delay : 2 , duration : 0.4 , ease : 'easeIn'}}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'> {project.no} </div>
            </div>

            <h2 className='text-[42px] leading-none text-white font-bold group-hover:text-accent transition-all duration-500 capitalize'> 
              {project.category} 
              </h2>

              <p className='text-white/60'> {project.description} </p>

              <ul className='flex gap-4'>
                {project.stack.map((stacks , i )=> {
                  return (
                    <li key={i} className='text-xl text-accent capitalize'> {stacks.name} </li>
                  )
                })}
              </ul>

              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.gitHub}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group'>
                        <FaGithub className='text-white text-3xl group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>

                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className='xl:h-[520px] mb-12'
            onSlideChange={hanSlideChange}
            >
              {projects.map((items , i) => {
                return <SwiperSlide key={i} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                  <div className='absolute w-full h-full top-0 bottom-0 bg-black/10 z-10'></div> 

                  <div className='w-full h-full relative'>
                    <Image src={items.image} alt=''fill className='object-contain'/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSlider containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max 
              xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22x] w-[44px] h-[44px] flex justify-center items-center transition-all'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkPage
