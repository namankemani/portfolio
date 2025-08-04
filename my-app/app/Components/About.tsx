"use client"
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
export default function About(){
    const {ref,inView} = useInView({triggerOnce:true,threshold:0.2});
    const [hasAnimated,setHasAnimated] = useState(false);

    useEffect(()=>{
        if(inView) setHasAnimated(true);
    },[inView])
    return(
        <main className="  my-20">
            <h1 className="flex items-center justify-center text-5xl font-extrabold text-amber-400">About Me</h1>
            
            <motion.div 
                ref={ref}
                initial={{opacity:0,y:-50}}
                animate={hasAnimated?{opacity:1,y:0}:{}}
                transition={{duration:0.8, ease: "easeIn"}}        
                className="w-full md:my-8 bg-cover bg-center flex items-center justify-center p-2 ">
                
                <div className="bg-white/90 text-black backdrop-blur-md p-6 rounded-2xl shadow-md max-w-6xl ">
                    <p className=" text-lg leading-relaxed text-center">I am a passionate and detail-oriented Software Developer with a strong focus on building clean, efficient, and scalable web applications. I specialize in modern web technologies including JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB, and I’m constantly working to expand my technical skill set to keep pace with the evolving software development landscape. I enjoy both frontend and backend development and take pride in creating smooth user experiences as well as robust, reliable backend systems. I’m comfortable working independently but thrive in environments where I can learn from others and contribute to shared goals.As a lifelong learner, I regularly explore new tools, frameworks, and patterns to stay up to date and push my boundaries. For me, software development is more than a job — it’s a craft that I’m constantly refining through curiosity, discipline, and hands-on experience. My goal is always to create reliable, user-friendly, and impactful digital solutions that make a difference

                    </p>
                </div>
            </motion.div>
            <div className="flex items-center justify-center ">

            <button className="border-2 border-amber-400 text-amber-400 p-4 rounded-3xl cursor-pointer">Contact Me</button>
            </div>
        </main>
    );
} 