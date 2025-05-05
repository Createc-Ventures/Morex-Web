import React from 'react';
import videoSrc from '../assets/Vid/1.mp4'; // Prefer import over direct path
import './VideoMaskSection.css';

const VideoMaskSection: React.FC = () => {
  return (
    <section className="relative w-full h-[840px] overflow-hidden mt-[15px]">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover mask-custom-shape"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src='assets/Vid/bg.mp4'
        />
      </div>
    </section>
  );
}; 

export default VideoMaskSection;
