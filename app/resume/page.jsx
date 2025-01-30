'use client'
import { FaReact , FaJs, FaHtml5, FaCss3 ,FaNodeJs , FaAws } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress , SiRedux } from "react-icons/si";
import { RiTailwindCssFill ,RiNextjsLine  } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeSvg } from "react-icons/bs";
import {motion} from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";



const about = {
  title : 'About Me',
  description : `Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Gained
 hands-on experience working on a real-time chat application during my tenure at Edze Soft Pvt. Ltd for
 6 months.`,

 info : [
  {
    name : 'Name',
    value : 'Srinivas Yeleswarapu'
  },

  {
    name : 'Phone',
    value : '(+91) 9390275975'
  },

  {
    name : 'Experience',
    value : '6 Months'
  },

  {
    name : 'Email',
    value : 'ysrinivas4901@gmail.com'
  },

  {
    name : 'Languages',
    value : 'English , Telugu'
  },

  {
    name : 'Certification',
    value : 'DCT Academy'
  },
 ]
}

const experience = {
  icon : <BsFiletypeSvg/>,
  title : 'My Experience',
  description : 'Developed features for a real-time chat application using EJS and MongoDB.',
  items : [
    {
      company : 'Edze Soft Pvt. Ltd',
      position : 'Fullstack Developer',
      duration : 'Jul 2024 - Dec 2024'
    }
  ]
} 

const education = {
  icon : <BsFiletypeSvg/>,
  title : 'Academic Qualification',
  items : [
    {
      institution : `St. Ann’s College of Engineering and Technology, Chirala`,
      course : 'B.Tech in Electronics and Communication Engineering',
      duration : '2019 – 2023',
      gpa: '6.48'
    },

    {
      course : 'MERN stack Development',
      institution : 'DCT Academy',
      duration : '2023'
    }
  ]
}

const skills = {
  title : 'Skills',
  skillList : [
    {
      icon : <FaHtml5/>,
      name : 'html5'
    },

    {
      icon : <FaCss3/>,
      name : 'css3'
    },

    {
      icon : <FaReact/>,
      name : 'react'
    },

    {
      icon : <FaJs/>,
      name : 'javascript'
    },

    {
      icon : <FaNodeJs/>,
      name : 'node.js'
    },

    {
      icon : <SiExpress/>,
      name : 'express.js'
    },

    {
      icon : <SiRedux/>,
      name : 'redux'
    },

    {
      icon : <RiNextjsLine/>,
      name : 'next.js'
    },

    {
      icon : <RiTailwindCssFill/>,
      name : 'tailwind.css'
    },

    {
      icon : <DiMongodb/>,
      name : 'mongodb'
    },

    {
      icon : <FaAws/>,
      name : 'aws s3'
    },

    {
      icon : <IoLogoFirebase/>,
      name : 'firebase'
    },
  ] 
}
const NamePage = () => {
  return (
   <motion.div 
   initial = {{opacity : 0}}
   animate = {{opacity : 1 , transition : {delay : 2  , duration : 0.4 , ease : 'easeIn'}}}
   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
   >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
          <TabsTrigger value='experience'>Experience</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='skills'>Skills</TabsTrigger>
          <TabsTrigger value='about'>About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70px] w-full">
          <TabsContent value='experience' className='w-full'>
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold"> {experience.title} </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description} </p>
              <ScrollArea className='h-[400px]'>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item , i) => {
                    return (
                      <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "> 
                      <span className="text-accent">{item.duration}  </span> 
                      <h2 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.position} </h2>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60"> {item.company} </p>
                      </div>
                        </li>
                      
                    )
                  })}
                </ul>

              </ScrollArea>

            </div>
          </TabsContent>

          <TabsContent value='education' className='w-full'>
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold"> {education.title} </h3>
              <ScrollArea className='h-[400px]'>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item , i) => {
                    return (
                      <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "> 
                      <span className="text-accent">{item.duration}  </span> 
                      <h2 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.course} </h2>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60 leading-snug"> {item.institution} </p>
                        
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        
                        <p className="text-white/60 leading-snug">GPA : {`${item.gpa ? item.gpa : 'none'}`} </p>
                        
                      </div>
                        </li>
                      
                    )
                  })}
                </ul>

              </ScrollArea>

            </div>
          </TabsContent>

          <TabsContent value='skills' className='w-full h-full'>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {skills.title} </h3>

              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill , i) => {
                  return (
                    <li key={i}> 
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-full flex justify-center items-center group">
                          <div className="text-4xl group-hover:text-accent transition-all duration-300"> {skill.icon} </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize"> {skill.name} </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                     </li>
                  )
                })}
              </ul>

            </div>
          </TabsContent>

          <TabsContent value='about' className='w-full text-center xl:text-left'>
           <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold"> {about.title} </h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {about.description} </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((inf , i )=> {
                return (
                  <li key={i} className="flex justify-center items-center xl:items-start gap-4">
                    <span className="text-white/60"> {inf.name} </span> : <span className="text-xl text-accent"> {inf.value} </span>
                  </li>
                )
              })}
            </ul>
           </div>
          </TabsContent>
        </div>
      </Tabs>

      
    </div>
   </motion.div>
  )
}

export default NamePage
