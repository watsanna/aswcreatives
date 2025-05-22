import React from 'react';
import blogbanner from './blogbanner.png';
import second from './second.png';
import { Link } from 'react-router-dom';

const Inspiration = () => {
  return (
   
      
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[90%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <div className=" rounded-lg hover:scale-110 transition-transform duration-300">
          <img 
            src={second} 
            alt="Dance and Technology" 
            className="blog-banner mx-auto w-[20%] h-auto rounded-lg"
          />
        </div>
        <h1 className="text-orange-700 font-great text-4xl font-bold">The Movement Inspiration - Final Choreograpghy with Kean Dance Theatre</h1> 
        <h5 className="text-blue-700 font-bold">April 8, 2025</h5>
        <br />
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          Knowing I wanted my final choreography with Kean Dance Theatre to be more than just movement on stage was my driving goal. 
          My journey with the organization began as a member in 2021, later serving as Treasurer from 2021 to 2023. 
          Now closing my chapter as President (2023–2025) with a family. This piece is my last opportunity to leave a meaningful mark through dance before graduation.
          <br /><br />
          I choose to explore a theme that speaks to all ages and backgrounds: life itself. 
          As I navigate the transition from student to graduate: interview prep, job hunting, the uncertainty of what comes next. 
          I find myself reflecting on the question: What is life? and How do we face it? I don’t want to choreograph something that’s just beautiful but truly meaningful.

          <br /><br />
          One of my professors taught me to turn every negative into something positive, to learn and keep moving forward. That lesson became my foundation. I began thinking about a prism; how a single stream of white light, when refracted, reveals a full spectrum of color. That image captures how I view life: one path full of potential, branching into vibrant possibilities depending on how you see it.
        In the studio, I started exploring a modern dance piece enhanced by projection art. This is where digital visuals move with the dancers, deepening the emotion and story. I listened to instrumental music, visualizing how each sound can shape both movement and atmosphere. As the concept grows, I focus on guiding and motivating the dancers, building the piece around the quote:
        “Life is like a prism. What you see depends on how you turn the glass.”
        — Jonathan Kellerman
        This idea becomes the spark that brings the piece to life.

        </p>
     

      <Link to="/blog"> 
        <button className="btn">View All Blog Posts</button>
      </Link>
    </div>      
  );
};

export default Inspiration;
