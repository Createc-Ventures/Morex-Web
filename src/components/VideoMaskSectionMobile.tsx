import React from 'react';
import videoSrc from '../assets/Vid/1.mp4'; // Prefer import over direct path
import './VideoMaskSectionMobile.css';

const VideoMaskSectionMobile: React.FC = () => {
  return (
    <section className="relative w-full h-[840px] overflow-hidden ">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover mask-custom-shape-mobile"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src='assets/Vid/bg.webm'
        />
      </div>
    </section>
  );
}; 

export default VideoMaskSectionMobile;
