import { Facebook, Github, Linkedin, LinkedinIcon, LucideLinkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const socialLink = [
    {
        title:"Youtube",
        href:"https://www.youtube.com/",
        icon : <Youtube className="h-5 w-5"/>
    },
    {
        title:"Github",
        href: "https://Github.com",
        icon: <Github className= "h-5 w-5"/>
    },
    {
        title: "Linkedin",
        href:"https://www.Linkedin.com/",
        icon: <LucideLinkedin className="w-5 h-5"/>
    },
    {
        title: "Facebook",
        href:"https://www.facebook.com",
        icon : <Facebook className="w-5 h-5"/>

    }
]
 const SocialMedia = ({className}:{className?:string})=>{
    
   return (
     <TooltipProvider>
       <div className={`flex items-center justify-start gap-5 ${className}`}>
         {socialLink?.map((item) => (
           <Tooltip key={item.title}>
             <TooltipTrigger asChild>
               <Link
                 href={item.href}
                 className="w-8 h-8 flex items-center justify-center border rounded-full border-black/20 hover:text-shop_dark_green hover:border-shop_light_green"
               >
                 {item.icon}
               </Link>
             </TooltipTrigger>
             <TooltipContent className="bg-white text-darkColor">{item?.title}</TooltipContent>
           </Tooltip>
         ))}
       </div>
     </TooltipProvider>
   );
}

export default SocialMedia
