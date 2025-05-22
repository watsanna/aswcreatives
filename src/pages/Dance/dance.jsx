import React, { useState } from 'react';
import contemp from './contemp.jpg';
import lyrical from './lyrical.jpg';
import tap from './tap.jpg';
import { Link } from 'react-router-dom';
import bio from './bio_pic.jpg'; 

const Dance = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>

  
      <br />


      <div className="w-full px-6 py-12 bg-white/40 rounded-xl shadow-md max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left - Dance Bio */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4"></h2>
      <p className="text-gray-800 text-[4vw] md:text-[1.1vw] leading-relaxed font-serif">
        Annaliese Watson, a Jamaican dancer beginning her journey at age 2 with liturgical and folk dance. 
        In high school, she expanded into contemporary, and hip-hop. Living by the saying, “To watch us dance is to hear our hearts speak,” a quote that helped her discover her voice through movement and continues to shape her work. 
        As an international student in the U.S., Annaliese earned a Masters and Bachelors Degree in Science and Technology with a Dance Minor. At Kean University, she joined Kean Dance Theatre, serving as Treasurer then President while choreographing, performing, and mentoring. Her standout works include Recovery (2022), a blindfolded modern piece, and Prism (2025), a projection piece to explore the metaphor “Life is like a Prism.” 
        Her training spans liturgical, modern, folk, lyrical/contemporary, hip-hop, jazz, tap, Latin/ballroom, and more—reflecting bold, versatile artistry.
      </p>
    </div>

    {/* Right - Image */}
    <div className="flex justify-center">
      <img
        src={bio}
        alt="Annaliese Dancing"
        className="rounded-xl shadow-lg max-w-50% h-50%"
      />
    </div>

  </div>
</div>

<br />


      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] mx-auto">

        {/* Lyrical Card */}
        <div
          className="relative w-full transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={lyrical}
            alt="Lyrical"
            className="w-full h-full object-cover rounded-lg"
          />
          {hoveredCard === 0 && (
            <div className=" absolute inset-0 bg-[#4B1032]/90 text-white rounded-lg mt-4 p-4 text-center transition-all duration-300">
              <p className="text-base leading-relaxed">
                Dance is my way of expressing myself. It allows me to speak from the heart, communicating to others through art and movement.
              </p>
            </div>
          )}
        </div>

        {/* Tap Card */}
        <div
          className=" relative w-full transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={tap}
            alt="Tap"
            className="w-full h-full object-cover rounded-lg"
          />
          {hoveredCard === 1 && (
            <div className="absolute inset-0 bg-[#4B1032]/90 text-white rounded-lg mt-4 p-4 text-center transition-all duration-300">
              <p className="mb-2">Kean Dance Theatre <br /> Treasurer 2021 - 2023 <br /> President 2023 - 2025</p>
              <p>Kean University <br /> Dance Minor <br /> 2021 - 2024</p>
               <p className="mb-2">Levites Dance Ministry <br /> 2005 - 2022 <br /> Minister, Team Leader</p>
              <p className="mb-2">Lyn Dance Company <br /> 2020 - Present <br /> Choreographer</p>
            </div>
          )}
        </div>

        {/* Contemporary Card */}
        <div
          className="relative w-full transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={contemp}
            alt="Contemporary"
            className="w-full h-full object-cover rounded-lg"
          />
          {hoveredCard === 2 && (
            <div className="absolute inset-0 bg-[#4B1032]/90 text-white rounded-lg mt-4 p-4 text-center transition-all duration-300">
              <p className="mb-1">Modern</p>
              <p className="mb-1">Tap</p>
              <p className="mb-1">Folk</p>
              <p className="mb-1">Jazz</p>
              <p className="mb-1">Contemporary</p>
              <p className="mb-1">Latin</p>
              <p className="mb-1">Liturgical</p>
              <p className="mb-1">Acrobatics</p>
              <p className="mb-1">Hiphop</p>
            </div>
          )}
        </div>

      

      </div>

      <br />
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[95%] md:w-[95%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <h1 className="text-orange-500 text-2xl md:text-3xl font-bold">Read about some of my most impactful experiences!</h1>
        <br />
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          I have been dancing for over 18 years, and I have been blessed to be a part of many different teams and organizations.
          Here are some of my most impactful experiences that I have had in the dance world.
        </p>
        <Link to="/blog">
          <button className="btn mt-4">View All Blog Posts</button>
        </Link>
      </div>
    </>
  );
};

export default Dance;
