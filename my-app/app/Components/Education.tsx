"use client"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useState,useEffect } from "react";
export default function Education(){
    const {ref,inView}= useInView({triggerOnce: true,threshold:0.2});
    const [hasAnimated,setHasAnimated] = useState(false);

    useEffect(()=>{
        if(inView) setHasAnimated(true);
    },[inView]);
    return(
        <section className="my-20">
            <h1 className="flex items-center justify-center text-5xl font-extrabold text-amber-400 ">Education</h1>
            <div className="w-full md:flex items-center justify-between text-white mt-10 ">
                <motion.div 
                    ref={ref}
                    initial={{x:-50,opacity:0}}
                    animate={hasAnimated?{x:0,opacity:1}:{}}
                    transition={{duration:0.8,ease:"easeOut"}}
                    className="bg-white text-black m-6 p-4 rounded-3xl md:w-1/2 md:ml-8">
                    <div className="flex items-baseline justify-between">
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl bg-amber-400  font-bold">2021-2025</span>
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl bg-black text-white font-bold">Graduation</span>
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl bg-black text-white font-bold">Bahelors Degree</span>
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl border-2 font-bold">B.Tech</span>
                    </div>
                    <h1 className="font-extrabold text-2xl mx-2 py-1 my-1">Bachelor in Technology (Computer Engineering)</h1>
                    <h3 className="mx-2 py-1 my-1">College Of Technology, GBPUA&T Pantnagar</h3>
                    <h3 className="mx-2 py-1 my-1">Udham Singh Nagar, Uttarakhand</h3>
                </motion.div>

                <motion.div 
                    ref={ref}
                    initial={{x:50,opacity:0}}
                    animate={hasAnimated?{x:0,opacity:1}:{}}
                    transition={{duration:0.8,ease:"easeOut"}}
                    className="bg-white text-black m-6 p-4 rounded-3xl md:w-1/2 ">
                    <div className="flex items-baseline justify-between">
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl bg-amber-400  font-bold">2019-2020</span>
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl bg-black text-white font-bold">Intermediate</span>
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl bg-black text-white font-bold">12th</span>
                        <span className="mx-2 py-2 px-4 my-2 rounded-3xl border-2 font-bold">PCM</span>
                    </div>
                    <h1 className="font-extrabold text-2xl mx-2 py-1 my-1">Higher Senior Secondary School, Central Board Of Secondary Examination</h1>
                    <h3 className="mx-2 py-1 my-1">Hills International School</h3>
                    <h3 className="mx-2 py-1 my-1">Pauri Garhwal, Uttarakhand</h3>
                </motion.div>
            </div>
        </section>
    );
}