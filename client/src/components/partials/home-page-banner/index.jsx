import React from 'react';
import banner from '../../../assets/banner.mp4';

const Banner = () => (
  <video
    autoPlay
    loop
    muted
    style={{
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
      height: '85vh',
      objectFit: 'cover',
    }}
  >
    <source src={banner} type="video/mp4" />
  </video>
);

export default Banner;
