import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../globalStyles.css';

const AboutUsPage = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '200px auto 0',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '300px',
    height: '500px',
    marginBottom: '-300px'
  };

  const contentStyle = {
    marginBottom: '20px',
  };

  const paragraphStyle = {
    marginBottom: '10px',
    lineHeight: '1.4',
    fontSize: '13px',
  };

  return (
    <div>
      <h1 className="home-page-title-top"></h1>
      <div style={containerStyle} className="content-center">
        <div style={contentStyle}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
            About Us
          </h2>
          <p style={paragraphStyle}>
            Our mission is to serve as a conduit between local food stores and shelters, ensuring
            that no perishable item goes to waste and everyone gets a fair share.
          </p>
          <p style={paragraphStyle}>
            Every day, stores have perishable inventory that, although near expiration, is still
            perfectly good to consume. In many cases, this food goes to waste – an unfortunate
            event considering there are many people out there who could benefit from these resources.
          </p>
          <p style={paragraphStyle}>
            Our platform addresses this problem by providing a space where stores can list their
            perishable inventory, giving local food shelters the ability to claim what they need
            before it expires. This not only prevents food waste but also contributes to the
            well-being of our community members who rely on these shelters.
          </p>
          <p style={paragraphStyle}>
            By fostering this connection, we not only aim to reduce waste but also strive to
            promote a sense of community and mutual support among local businesses and aid
            organizations. Together, we can make a difference, ensuring that good food ends up on
            plates, not in landfills.
          </p>
          <p style={paragraphStyle}>
            We encourage you to join us in our mission to create a sustainable future for everyone.
            Whether you're a store owner with perishable goods or a local shelter looking to
            nourish those in need, we welcome you to our platform. With your help, we can make a
            tangible difference in our community.
          </p>
        </div>
      </div>
      <Link to="/" className="">
        
      </Link>
    </div>
  );
};

export default AboutUsPage;