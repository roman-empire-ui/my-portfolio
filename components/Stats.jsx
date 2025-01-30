'use client'
import CountUp from "react-countup"




const stats = [
    {
        count : '6', 
        text : 'Months of Experience'
    },

    {
        count : '6', 
        text : 'Projects Done'
    },

    {
        count : '8', 
        text : 'Technologie(s) Learned'
    },

    
]
const Stats = () => {
  return (
   <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w[80vw] mx-auto xl:max-w-none ">
      {stats.map((stat , i) => {
            return (
                <div key={i} className="flex-1 flex gap-4 justify-center items-center xl:justify-start">
                    <CountUp end={stat.count} duration={3} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                    <p className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}> {stat.text} </p>

                    </div>
            )
        })}
        </div>
    </div>
   </section>
  )
}

export default Stats
