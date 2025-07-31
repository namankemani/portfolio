"use client"
import { useState } from "react";
export default function ContactUs(){
    const [formData,setFormData] = useState({
            fullName:'',
            email:'',
            mobileNo: '',
            subject: '',
            message: ''

        })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
    return(
        
        <main className=" text-white my-20">
            <h1 className="flex items-center justify-center text-5xl font-extrabold text-amber-400">Contact Me</h1>
            <div className="w-full md:my-8 bg-cover bg-center flex items-center justify-center p-2 ">
                
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md max-w-6xl ">
                    <div className="flex justify-around items-centre">
                        <form onSubmit={handleSubmit} className="space-y-4" action="sdlfkj">
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="p-2 border rounded w-full"
                            />
                            <input 
                            type="email" 
                            placeholder="E-Mail" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="p-2 border rounded w-full"
                            />
                        </form>
                        <form onSubmit={handleSubmit} className="space-y-4" action="sdlfkj">
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="p-2 border rounded w-full"
                            />
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="p-2 border rounded w-full"
                            />
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center ">

            <button className="border-2 border-amber-400 text-amber-400 p-4 rounded-3xl cursor-pointer">Contact Me</button>
            </div>
        </main>
    );
} 