import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import ContactUs from "./Components/ContactUs";
import ProfileCards from "./Components/ProfileCards";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <ProfileCards/>
      <ContactUs/>
   </div>
  );
}
