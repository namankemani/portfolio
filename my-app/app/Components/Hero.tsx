"use client"
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero(){
    return(
        <section className="text-white flex items-center justify-center md:p-10 m-2">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="md:text-6xl text-3xl font-extrabold">Hello! I'm <span className="text-amber-400">Naman Kemani</span></h1>
                <h2 className="md:text-3xl py-2">A <span className="font-bold ">Software Development Engineer | Full Stack Developer </span></h2>
                <div className="flex items-center justify-center md:mt-2">
                    <button className="rounded-4xl text-xl border-2 border-amber-300 text-amber-400 m-2 px-4 py-2 cursor-pointer">Resume</button>
                    <button className="rounded-4xl bg-amber-400 m-2 px-5 py-2 text-xl text-black cursor-pointer">Hire Me</button> 
                </div>
                <div className="flex items-center justify-center md:mt-2">
                    <Image
                    src='/mine.png'
                    alt="mine"
                    width={550}
                    height={550}
                    />
                </div>
            </motion.div>
                

        </section>
    );
}