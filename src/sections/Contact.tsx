import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function Contact() {
  return (
    <section id='contact' className='flex flex-col items-center justify-center px-10 sm:px-20 pb-10 sm:pt-10 text-[#2D2D2D] 2xl:mb-10'>
      <h1 className='font-[Radley] text-center text-3xl sm:text-5xl text-[#E07A5F] border-b-4 border-[#81B29A] pb-2 mb-6 md:my-10 w-fit'>Get in touch</h1>
      <p className='font-[Carlito] text-base sm:text-xl w-full text-justify sm:text-center'>Have any questions or want to work together?</p>
      <p className='font-[Carlito] text-base sm:text-xl w-full text-justify sm:text-center'>Feel free to reach out through any of my socials below.</p>
      <div className='flex text-3xl gap-2 mt-5'>
        <a
          href="https://www.linkedin.com/in/ks-miyazawa/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#2D2D2D] text-[#F5F5F4] hover:scale-105"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/KSmiyazawa"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full text-[#2D2D2D] hover:scale-105"
        >
          <FaGithub size={45}/>
        </a>

        <a
          href="mailto:ramos.karensaki@gmail.com"
          className="p-2 rounded-full bg-[#2D2D2D] text-[#F5F5F4] hover:scale-105"
        >
          <IoMail />
        </a>

      </div>
    </section>
  )
}

export default Contact
