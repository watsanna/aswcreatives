import React, { useState } from 'react';

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
      <h1 className="blog-title">Dance Meets Technology</h1>
      <p className="blog-intro">
        Welcome to my blog! <br />
        This is where I will be sharing my journey of how dance and technology have been a part of my life. <br />
        Sometimes you'll see me talk about dance only, sometimes technology only, and sometimes both! <br />
        I hope you enjoy reading my blog as much as I enjoy writing about my experiences. <br />

        
      </p>
      <div className="grid-container">
        {[ 
          { text: 'Dance is my way of expressing myself. It allows me to speak from the heart, communicating to others through art and movement.' },
          {text: `Levites Dance Ministry \n 2005 - 2022 \n Minister, Team Leader\n\nLyn Dance Company \n 2020 - Present \n Choreographer\n\nKean Dance Theatre \n Treasurer 2021 - 2023 \n President 2023 - 2025\n\nKean University \n Dance Minor \n 2021 - 2024` },
          { text: 'Modern\nTap\nFolk\nJazz\nContemporary\nLatin\nLiturgical\nAcrobatics\nHiphop' }
        ].map((card, index) => (
          <div
            key={index}
            className="dance-card"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={card.img} alt={card.alt} className="dance-image" />
            {hoveredCard === index && (
              <div className="hover-info">
                <p>{card.text.split('\n').map((line, i) => (<span key={i}>{line}<br/></span>))}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
