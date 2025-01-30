import Link from "next/link";
import { FaGithub , FaLinkedin } from "react-icons/fa";


const social = [
    {icon : <FaGithub/> , path : 'https://github.com/roman-empire-ui'},
    {icon : <FaLinkedin/> , path : 'https://www.linkedin.com/in/srinivas-yeleswarapu-7b5850236/'}
]
const Socials = ({containerStyle , iconStyle}) => {
  return (
    <div className={containerStyle}>
        {social.map((soc , i) => {
            return (<Link key={i} href={soc.path} className={iconStyle} > {soc.icon} </Link>)
        })}
      
    </div>
  )
}

export default Socials
