import React, { useState } from 'react';
import contemp from './contemp.jpg';
import lyrical from './lyrical.jpg';
import tap from './tap.jpg';

const Dance = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div
      style={{
        display: 'grid',
        gap: '1.5rem',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      }}
    >
      {/* Lyrical Card */}
      <div
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img
            src={lyrical}
            alt="lyrical"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
        {hoveredCard === 0 && (
          <div
            style={{
              backgroundColor: 'rgba(87, 12, 86, 0.55)',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '1rem',
              width: '100%',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Dance is my way of expressing myself. It allows me to speak from
              the heart, communicating to others through art and movement.
            </p>
          </div>
        )}
      </div>

      {/* Tap Card */}
      <div
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img
            src={tap}
            alt="tap"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
        {hoveredCard === 1 && (
          <div
            style={{
              backgroundColor: 'rgba(87, 12, 86, 0.55)',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '1rem',
              width: '100%',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Levites Dance Ministry <br /> 2005 - 2022 <br /> Minister, Team
              Leader
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Lyn Dance Company <br /> 2020 - Present <br /> Choreographer
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Kean Dance Theatre <br /> Treasurer 2021 - 2023 <br /> President
              2023 - 2025
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Kean University <br /> Dance Minor <br /> 2021 - 2024
            </p>
          </div>
        )}
      </div>

      {/* Contemporary Card */}
      <div
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img
            src={contemp}
            alt="contemp"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
        {hoveredCard === 2 && (
          <div
            style={{
              backgroundColor: 'rgba(87, 12, 86, 0.55)',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '1rem',
              width: '100%',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Modern
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Tap
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Folk
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Jazz
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Contemporary
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Latin
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Liturgical
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Acrobatics
            </p>
            <p style={{ margin: '5px 0', fontSize: '1rem', lineHeight: '1.5' }}>
              Hiphop
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dance;
