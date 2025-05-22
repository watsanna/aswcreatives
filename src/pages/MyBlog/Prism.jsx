import React from 'react';
import blogbanner from './blogbanner.png';
import third from './third.png';
import { Link } from 'react-router-dom';

const Prism = () => {
  return (
   
      
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[90%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <div className=" rounded-lg hover:scale-110 transition-transform duration-300">
          <img 
            src={third} 
            alt="Dance and Technology" 
            className="blog-banner mx-auto w-[20%] h-auto rounded-lg"
          />
        </div>
        <h1 className="text-orange-700 font-great text-4xl font-bold">Moving to the Stage - The Vision Came to Life</h1> 
        <h5 className="text-blue-700 font-bold">April 23, 2025</h5>
        <br />
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          <h2 className="text-orange-500 font-great text-2xl font-bold"> Behind The Stage </h2> 
          Bringing this vision to life took more than just choreography—it required a shared commitment from everyone involved. Behind the scenes, I dedicated time to training the dancers, ensuring they understood not only the physical steps and emotional beats behind each movement. We worked hard to perfect timing and technique, especially when syncing live movement with digital visuals.
            Each rehearsal was a space for growth. We refined transitions, built performance confidence, and strengthened our bond as a team. Watching the dancers step into their roles and fully embody the piece was one of the most rewarding experiences of this journey.

          
          <br /><br />
          <h2 className="text-orange-500 font-great text-2xl font-bold"> To The Stage </h2> 
          After weeks of rehearsals and refining, "Prism" was finally brought to life on stage at Kean University’s Wilkins Theatre during the Kean Dance Theatre Annual Spring Showcase. This year’s theme, “Super Bowl LIX Halftime Show,” gave each choreographer the space to think big. I knew I wanted to use the opportunity to merge movement, technology, and story in a way that left lasting impact.
        Dancers wore all white, complementing the visuals that began with a clean, minimal tone and gradually unfolded into bold, vibrant colors. This shift reflected the heart of the piece: a metaphor for life’s transformation. How one path can splinter into many depending on how you view it. The fusion of projection art and choreography was not just for effect but meant to enhance the emotion of the piece and pull the audience into its message.

         <br /><br />
         <h2 className="text-orange-500 font-great text-2xl font-bold"> On The Stage </h2> 
            
            Exact Time: 49:50 - 52:50

            <div className="w-full flex justify-center my-8"> 
            <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/6vvVc-vbDC4?start=2928&end=3170&si=ZRN2smVrvU5DVgcX"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
</div>


            <br /><br />
            <h2 className="text-orange-500 font-great text-2xl font-bold"> Credits </h2> 

        Organization: Kean Dance Theatre
        <br /><br />


Choreographed by: Annaliese Watson
<br /><br />


Visuals by: Annaliese Watson (created in Adobe After Effects)
<br /><br />

Instrumental: Heart Cry · Drehz
<br /><br />
**I do not own the rights to this music.**
<br /><br />

Performed by: Annaliese Watson, Alyssa Ginex, Mariana Volochii, marissa Gomez, Nicholias Flores & Anisa Harmon


        <br /><br />

            <h2 className="text-orange-500 font-great text-2xl font-bold"> Personal Reflection </h2> 

        Watching Prism filled me with inspiration. It reminded me why I keep pushing as both an artist and a creator. This piece represents everything I love: storytelling, emotion, innovation. It merges dance and technology to deliver something more than a performance, it’s an immersive experience. One that speaks not just to the eyes, but to the heart.

        </p>


      <Link to="/blog"> 
        <button className="btn">View All Blog Posts</button>
      </Link>
    </div>      
  );
};

export default Prism;
