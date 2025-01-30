'use client'




import { FaPhoneAlt, FaEnvelope,FaMapMarker} from "react-icons/fa"
import {motion} from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const info = [
  {
    icon : <FaPhoneAlt/>,
    title : 'Phone',
    description : '(+91) 9390275975'
  },

  {
    icon : <FaEnvelope/>,
    title : 'Email',
    description : 'ysrinivas4901@gmail.com'
  },

  {
    icon : <FaMapMarker/>,
    title : 'Address',
    description : 'Khajipalem , Andhrapradesh , 522329 - India'
  },
]
const ContactPage = () => {
  return (
   <motion.section
   initial={{opacity : 0}}
   animate={{opacity : 1 , transition : {delay :2  , duration : 0.4 , ease : 'easeIn'}}}
   className="py-6"
   >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
      <div className="xl:h-[54%] order-2 xl:order-none">
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-4xl text-accent">let's Work Together</h3>
          <p className="text-white/60"> To be honest , I don't Know much about this technology, In other words i didn't fully mastered it yet, But i will try to learn as much as i can. </p>
          <div className="grid grid-cols- md:grid-cols-2 gap-6 ">
          <Input type='firstname' placeholder='Firstname' />
          <Input type='lastname' placeholder='Lastname' />
          <Input type='email' placeholder='Email' />
          <Input type='mobile' placeholder='Mobile' />
          </div>

          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a service' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a Service</SelectLabel>
                <SelectItem value='est'>Web Development</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea className='h-[200px]' placeholder='Type your message here...' />
          <Button size='md' className='max-w-40'>Send Message</Button>
          
        </form>
      </div>
      <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
        <ul>
          {info.map((items , i) => {
            return (
              <li key={i} className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[24px]">
                    {items.icon}
                  
                </div>
                </div>
                <div className="flex-1"> 
                <p className="text-accent"> {items.title} </p>
                <h3 className="text-xl"> {items.description} </h3>
                 </div>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
    </div>
   </motion.section>
  )
}

export default ContactPage
