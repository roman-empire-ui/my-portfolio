import Profile from "@/components/Profile";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";


export default function Home() {
 
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Srinivas Yeleswarapu</span>
            </h1>
            <p className="max-w-[800px] mb-9 text-white/80"> Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Gained
              hands-on experience working on a real-time chat application during my tenure at Edze Soft Pvt. Ltd for
              6 months.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-4'>
                <Link href="/Srinivas_Resume updated1.pdf">
                  <span>Download Resume</span>
                <FiDownload />
              </Link>
              </Button>
              <div className="mb-8 xl:mb-8">
                <Socials containerStyle='flex gap-6' iconStyle='w-8 h-8 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent 
                hover:text-primary hover:transition-all duration-500' 
                />
              </div>

            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Profile/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
