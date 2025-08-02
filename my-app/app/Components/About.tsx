"use client"
export default function About(){
    return(
        <main className="  my-20">
            <h1 className="flex items-center justify-center text-5xl font-extrabold text-amber-400">About Me</h1>
            {/* <div className="flex items-center justify-between">
                <div className="">
                    <h3 className="text-3xl font-bold text-amber-400 mx-20 md:mt-20 mt-10">I Love</h3>
                    <span className="text-white">Listening to music</span>
                </div> */}
                {/* <div className="flex items-center justify-between">
                    <div className="flex-col rounded-xl p-4 border-amber-100 border-2"><div className="text-2xl">3.9+</div><div>Years Experience</div></div>
                    <div className="rounded-xl p-4 border-amber-100 border-2"><span>3.9+</span>Years Experience</div>
                </div> */}
            {/* </div> */}
            
      
      
      
            <div className="w-full md:my-8 bg-cover bg-center flex items-center justify-center p-2 ">
                
                <div className="bg-white/90 text-black backdrop-blur-md p-6 rounded-2xl shadow-md max-w-6xl ">
                    <p className=" text-lg leading-relaxed text-center">I am a passionate and detail-oriented Software Developer with a strong focus on building clean, efficient, and scalable web applications. I specialize in modern web technologies including JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB, and I’m constantly working to expand my technical skill set to keep pace with the evolving software development landscape. I enjoy both frontend and backend development and take pride in creating smooth user experiences as well as robust, reliable backend systems. I’m comfortable working independently but thrive in environments where I can learn from others and contribute to shared goals.As a lifelong learner, I regularly explore new tools, frameworks, and patterns to stay up to date and push my boundaries. For me, software development is more than a job — it’s a craft that I’m constantly refining through curiosity, discipline, and hands-on experience. My goal is always to create reliable, user-friendly, and impactful digital solutions that make a difference

                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center ">

            <button className="border-2 border-amber-400 text-amber-400 p-4 rounded-3xl cursor-pointer">Contact Me</button>
            </div>
        </main>
    );
} 