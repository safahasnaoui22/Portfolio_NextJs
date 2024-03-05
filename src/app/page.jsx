"use client"
import Link from "next/link";
import Image from "next/image" 
import {motion} from 'framer-motion'
const Homepage = () => {
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}}
     transition={{ duration : 1}} >
     <div className=" h-full flex flex-col 
     lg:flex-row
     px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
   {/* image container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative"  >
      <Image src="/dev.png" alt="" fill className="object-contain z-1"/>
    </div>
    {/* text container */}
    <div className="h-1/2  lg:h-full lg:w-1/2 flex  flex-col gap-8
     items-center justify-center ">
      {/*title*/}
      <h1 className="text-4xl md:text-6xl font-bold">Ich bin ein Web entwickler</h1>
      {/*descriptio,*/}
      <p className="md:text-xl">Ich hauche dem digitalen Bereich durch Webentwicklung Leben ein. </p>
      <div className=" w-full flex gap-4">
        <Link href='/portfolio'>  
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white"> Meine Arbeit</button> 
        </Link>
       <Link href='/contact'> <button className="p-4 rounded-lg ring-1 ring-black"> Kontaktieren mich</button> </Link> 
     
      </div>
    </div>
  </div>
  </motion.div>
  )
};

export default Homepage;
