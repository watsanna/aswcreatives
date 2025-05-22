import React from 'react';
import anna_pic from './anna_pic.png'; 
import './Home.css';

const Home = () => (
  <>
    <div className="flex flex-col items-center text-center pt-12">
      
      
    <h1 className="font-great-vibes text-[8vw] md:text-[6vw] lg:text-[4vw]">
        Welcome! 
        <span className="block font-allura text-[5vw] md:text-[4vw] lg:text-[2vw]">
          I'm Annaliese
        </span>
      </h1>

     
      <div className="flex justify-center mt-6">
        <img 
          src={anna_pic} 
          alt="Annaliese Watson" 
          className="w-[40vw] md:w-[30vw] lg:w-[20vw] max-w-full h-auto border-4 border-[#b05b26c4] shadow-[0_0_50px_rgba(220,105,33,0.768)] rotate-y-15 transition-transform duration-300 mb-8 rounded-[5%]" 
        />
      </div>

     
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[70%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <p className="text-gray-900 font-serif text-[5vw] md:text-[4vw] lg:text-[2vw]">
          I blend creativity and technology to craft front-end experiences that are intuitive, immersive, and inspired.
        </p>

        <p className="text-gray-900 font-serif text-[3vw] md:text-[2vw] lg:text-[1vw] mt-4">
           With a background in computational science and engineering and a passion for UI/UX design, I transform complex ideas into clean, user-centered solutions. I approach each project with the intent to leave an impact; creating experiences that make users feel allured, not overwhelmed. I'm excited by opportunities to contribute to teams that value creativity and innovation.
        </p>

        <p className="text-gray-900 font-serif text-[3vw] md:text-[2vw] lg:text-[1vw] mt-4">
          During my thesis, I explored how Natural User Interface (NUI) principles could be applied to immersive 3D environments using Unity and the Oculus Quest headset. This work deepened my passion for front-end development and user experience design, showing me that great design isn’t just visual; but it’s about how it works, how it feels, and how it empowers users.
        </p>
      </div>

      
    

    </div>
  </>
);

export default Home;