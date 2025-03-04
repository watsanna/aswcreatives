import React, { useState } from 'react';
import blogbanner from './blogbanner.png';
import first from './first.png';
import { Link } from 'react-router-dom';


const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="dance-blog-container">
     
      <img
        src={blogbanner}
        alt="Blog Banner"
        className="blog-banner"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'fit',
          borderRadius: '8px',
        }}
      />

    
      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[90%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <h1 className="text-orange-500">Welcome to my Blog!</h1>
        <br />
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          This is where I will be sharing my journey of how dance and technology have been a part of my life. <br />
          Sometimes you'll see me talk about dance only, sometimes technology only, and sometimes both! <br />
          I hope you enjoy reading my blog as much as I enjoy writing about my experiences. <br />
        </p>
      </div>


      <div className="flex items-stretch bg-white rounded-xl p-6 md:p-5 w-[90%] md:w-[70%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <div className="w-1/3 overflow-hidden rounded-lg hover:scale-110 transition-transform duration-300">
            <img 
            src={first} 
            alt="Dance and Technology" 
            className="w-full h-full object-cover"
            />
        </div>
        <div className="w-2/3 flex flex-col justify-center pl-6">
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
            <h1 className="font-great-vibes text-[8vw] md:text-[6vw] lg:text-[4vw]">
            My Beginning of Dance and Technology Integration </h1> <br />
            Mar 2, 2025 <br />
            </p>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-4">
            From ever since, I have always seen them as two separate worlds, but now I see them as one.
            </p>
            <Link to="/integration"> 
            <button 
                            className="btn "
                            onClick={() => handleButtonClick(vr)}
                          >
                            View Blog Post
                          </button>
                          </Link>
        </div>
        </div>


       
    </div>
  );
};

export default Blog;
