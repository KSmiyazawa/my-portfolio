import { SiReact, SiTypescript, SiNodedotjs, SiVuedotjs, SiNextdotjs, SiNuxtdotjs, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import HexIcon from '../components/HexIcon';

function AboutMe() {
  return (
    <section id='about' className='flex flex-col items-center justify-center md:gap-5 px-10 sm:px-20 pb-10 lg:p-10 2xl:p-30'>
      <h1 className='font-[Radley] text-center text-3xl sm:text-5xl text-[#E07A5F] border-b-4 border-[#81B29A] pb-2'>About Me</h1>
      <div className='flex w-full max-lg:flex-col items-center gap-5 sm:gap-10 font-[Carlito] text-[#2D2D2D]'>
        <div className='sm:flex-1 text-base sm:text-xl text-justify'>
          <p className='mt-6'>
            I'm a Filipino-Japanese full-stack developer who grew up in the Philippines and is currently based in Tokyo, Japan.
          </p>
          <p className='mt-2'>
            I began my web development journey in September 2024 after seeing how technology can streamline business operations and make a real impact. Since then, I've been continuously learning new tools and refining my skills with the goal of building technology that’s both meaningful and user-focused.
          </p>
          <p className='mt-2'>
            My core stack includes TypeScript, React, and Node.js, but I also have experience with Java, Vue.js, Next.js, and Nuxt.js.
          </p>
          <p className='mt-2'>
            Outside of coding, I enjoy physical activities like hiking, pilates, and bouldering. They help me stay grounded and energized.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className='flex gap-1 sm:gap-3 lg:gap-2'>
            <HexIcon icon={SiHtml5} label="HTML" />
            <HexIcon icon={SiCss3} label="CSS" />
            <HexIcon icon={SiJavascript} label="JavaScript" />
          </div>

          <div className='flex gap-1 sm:gap-3 lg:gap-2'>
            <HexIcon icon={SiTypescript} label="TypeScript" />
            <HexIcon icon={SiNodedotjs} label="Node.js" />
            <HexIcon icon={SiReact} label="React" />
            <HexIcon icon={SiNextdotjs} label="Next.js" />
          </div>

          <div className='flex gap-1 sm:gap-3 lg:gap-2'>
            <HexIcon icon={SiVuedotjs} label="Vue" />
            <HexIcon icon={SiNuxtdotjs} label="Nuxt.js" />
            <HexIcon icon={FaJava} label="Java" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
