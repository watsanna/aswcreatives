import React from 'react';
import blogbanner from './blogbanner.png';
import first from './first.png';
import second from './second.png';
import third from './third.png';
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    
    <div className="dance-blog-container">
   

      <div className="bg-white/40 rounded-xl p-6 md:p-5 w-[90%] md:w-[90%] max-w-full h-auto shadow-md mb-12 mx-auto">
        <h1 className="text-orange-500">Welcome to my Blog where Dance Meets Technology!</h1>
        <br />
        

  <br />
        <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw]">
          This is where I will be sharing my journey of how dance and technology have been a part of my life. <br />
          Sometimes you'll see me talk about dance only, sometimes technology only, and sometimes both! <br />
          I hope you enjoy reading my blog as much as I enjoy writing about my experiences. <br />
        </p>
      </div>

      {/* Blog Cards Wrapper */}
      <div className="flex flex-col gap-12 items-center">

        {/* Blog Post 3 */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl p-6 w-[90%] md:w-[70%] shadow-md">
          <div className="md:w-1/3 overflow-hidden rounded-lg hover:scale-110 transition-transform duration-300">
            <img
              src={third}
              alt="On the Stage"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 flex flex-col justify-center pl-0 md:pl-6 mt-6 md:mt-0">
          <h1 className=" text-gray-900 font-great-vibes text-[8vw] md:text-[6vw] lg:text-[4vw]"> Prism Part 3</h1>
            <h1 className=" text-gray-900 font-great-vibes text-[7vw] md:text-[5vw] lg:text-[3vw]">
              Moving to the Stage - The Vision Came to Life
            </h1>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-2">
              April 23, 2025
            </p>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-4">
              After all the hard work that was put into the choreography, rehearsal and vision, it was time to bring it to life on stage. The audience could feel the emotions and message we tried to convey.
            </p>
            <Link to="/prism">
              <button className="btn mt-4">View Blog Post</button>
            </Link>
          </div>
        </div>


        

        {/* Blog Post 2 */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl p-6 w-[90%] md:w-[70%] shadow-md">
          <div className="md:w-1/3 overflow-hidden rounded-lg hover:scale-110 transition-transform duration-300">
            <img
              src={second}
              alt="Final Choreography"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 flex flex-col justify-center pl-0 md:pl-6 mt-6 md:mt-0">
          <h1 className=" text-gray-900 font-great-vibes text-[8vw] md:text-[6vw] lg:text-[4vw]"> Prism Part 2</h1>
            <h1 className=" text-gray-900 font-great-vibes text-[7vw] md:text-[5vw] lg:text-[3vw]">
              The Movement Inspiration – Final Choreography with Kean Dance Theatre
            </h1>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-2">
              April 8, 2025
            </p>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-4">
              As my last performance approaches, I want to create more than just movement, but something that everyone can reflect on. Which brings about the question of What is life and how it can be metaphorically represented as a Prism.
            </p>
            <Link to="/inspiration">
              <button className="btn mt-4">View Blog Post</button>
            </Link>
          </div>
        </div>

        
        {/* Blog Post 1 */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl p-6 w-[90%] md:w-[70%] shadow-md">
          <div className="md:w-1/3 overflow-hidden rounded-lg hover:scale-110 transition-transform duration-300">
            <img
              src={first}
              alt="Dance and Technology"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 flex flex-col justify-center pl-0 md:pl-6 mt-6 md:mt-0">
            <h1 className=" text-gray-900 font-great-vibes text-[8vw] md:text-[6vw] lg:text-[4vw]"> Prism Part 1</h1>
            <h1 className="text-gray-900 font-great-vibes text-[7vw] md:text-[5vw] lg:text-[3vw]">
              My Beginning of Dance and Technology Integration
            </h1>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-2">
              Mar 2, 2025
            </p>
            <p className="text-gray-900 font-serif text-[4vw] md:text-[2vw] lg:text-[1vw] mt-4">
              From ever since, I have always seen them as two separate worlds, but now I see them as one.
            </p>
            <Link to="/integration">
              <button className="btn mt-4">View Blog Post</button>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Blog;
