import React from 'react';
import blogbanner from './blogbanner.png';
import first from './first.png';
import { Link } from 'react-router-dom';

const Integration = () => {
  return (
   
      
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[90%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <div className=" rounded-lg hover:scale-110 transition-transform duration-300">
          <img 
            src={first} 
            alt="Dance and Technology" 
            className="blog-banner mx-auto w-[20%] h-auto rounded-lg"
          />
        </div>
        <h1 className="text-orange-700 font-great text-4xl font-bold">My Beginning of Dance and Technology Integration</h1> 
        <h5 className="text-blue-700 font-bold">Mar 2, 2025</h5>
        <br />
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          Dance has always been a significant part of my life, ever since I took my first dance steps at the age of two. 
          It's more than just movement to music; it's a way to express emotions and stories. One of my favorite quotes about dance is, 
          "To watch us dance is to hear our hearts speak." This resonates deeply with me because dance is a language of its own, that each person can interpret differently.
          <br /><br />
          At the same time, technology has played an integral role in my development. From a young age, I was fascinated not by the hardware, but by the creative side of technology. 
          I vividly remember the excitement I felt when I first discovered coding. It wasn’t just about writing a simple "Hello, World!" program. Instead, I learned to make a character move across the screen. 
          The idea that I could create something dynamic and interactive with just a few lines of code was incredible.
          <br /><br />
          Over the years, I've had extensive training and developments in both dance and technology separately, but what if I combine them together? 
          The opportunity to combine my artistic training in dance with my career experience in technology will first be tested at one of my dance showcases. 
          I will be doing a modern dance piece, where I want to take the audience on a journey not just through movements but also through emotion and visual appeal. 
          Imagine creating a two-dimensional world on a screen that interacts with live dance. Stay tuned for my planning progress, execution, and final work.  
        </p>
     

      <Link to="/blog"> 
        <button className="btn">View All Blog Posts</button>
      </Link>
    </div>      
  );
};

export default Integration;
