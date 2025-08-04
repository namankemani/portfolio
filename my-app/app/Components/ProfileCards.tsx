"use client"
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useState,useEffect} from "react";

type Profile = {
  name: string;
  description: string;
  image: string; // Thumbnail/logo URL
  url: string;
};

const profiles: Profile[] = [
  {
    name: "LeetCode",
    description: "Over 150+ problems solved. Regular Contest participant with improving rank.",
    image: "/Leetcode.png", // Add this image to public/thumbnails
    url: "https://leetcode.com/NamanKemani",
  },
  {
    name: "GitHub",
    description: "Open-source contributor and full-stack developer. 12+ repos with MERN, Next.js, and Spring Boot.",
    image: "/Github.png",
    url: "https://github.com/namankemani",
  },
  // {
  //   name: "Codeforces",
  //   description: "Active in Div2 contests. Max rating: 1450. Focused on problem-solving and speed.",
  //   image: "/thumbnails/codeforces.png",
  //   url: "https://codeforces.com/profile/your-username",
  // },
];

export default function ProfileCards() {
  const {ref,inView} = useInView({triggerOnce:true,threshold:0.2})
  const [hasAnimated,setHasAnimated] = useState(false);

  useEffect(()=>{
    if(inView) setHasAnimated(true);
  },[inView])
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-10 text-amber-400">Profile Previews</h2>
      <motion.div 
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <Image
              src={profile.image}
              alt={`${profile.name} thumbnail`}
              width={600}
              height={300}
              className="w-full  object-contain bg-gray-100 p-1"
            />
            <div className="p-4">
              <h3 className="text-xl text-black font-semibold flex items-center gap-2">
                {profile.name}
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{profile.description}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
