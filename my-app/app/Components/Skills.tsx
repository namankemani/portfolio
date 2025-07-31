"use client"
import { motion } from "framer-motion";
import {
    SiFigma, SiHtml5, SiCss3, SiJavascript, SiJquery,
  SiSass, SiBootstrap, SiReact, SiRedux, SiFirebase, SiNextdotjs,
  SiAmp, SiReacthookform, SiTailwindcss, SiChakraui,
  SiSemanticuireact, SiAntdesign, SiGraphql, SiApollographql,
  SiFramer, SiStyledcomponents, SiReactquery, SiGit,
   SiGitlab, SiGithub, SiNotion, SiPostman,
} from "react-icons/si";



export default function Skills(){
    const tools = {
  design: [
    { name: "Figma", icon: SiFigma },
  ],
  technologies: [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "jQuery", icon: SiJquery },
    { name: "SCSS", icon: SiSass },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "React", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "Firebase", icon: SiFirebase },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "AMP", icon: SiAmp },
    { name: "React Hook Form", icon: SiReacthookform },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Chakra UI", icon: SiChakraui },
    { name: "Semantic UI", icon: SiSemanticuireact },
    { name: "Ant Design", icon: SiAntdesign },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Apollo GraphQL", icon: SiApollographql },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Styled Components", icon: SiStyledcomponents },
    { name: "React Query", icon: SiReactquery },
    { name: "Git", icon: SiGit },
  ],
  devTools: [
    { name: "GitLab", icon: SiGitlab },
    { name: "GitHub", icon: SiGithub },
    { name: "Notion", icon: SiNotion },
    { name: "Postman", icon: SiPostman },
  ],
};

const ToolTag = ({ name, Icon }: { name: string; Icon: any }) => (
  <motion.div
    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-xl shadow-md text-sm cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Icon className="text-lg" /> {name}
  </motion.div>
);
    return(
        <section className="my-20">
            <h1 className="flex items-center justify-center text-5xl font-extrabold text-amber-400 ">Skills</h1>
            <div className="text-center px-6 py-12 bg-black min-h-screen text-white">
      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Design Tools I Use</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tools.design.map(({ name, icon: Icon }) => (
            <ToolTag key={name} name={name} Icon={Icon} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Technologies I Use</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tools.technologies.map(({ name, icon: Icon }) => (
            <ToolTag key={name} name={name} Icon={Icon} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Development & Productivity Tools I Use</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tools.devTools.map(({ name, icon: Icon }) => (
            <ToolTag key={name} name={name} Icon={Icon} />
          ))}
        </div>
      </motion.section>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className=" mt-8 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-bold text-2xl py-2 px-6 rounded-full shadow-lg"
      >
        Resume 

      </motion.button>
    </div>
        </section>
    );
}