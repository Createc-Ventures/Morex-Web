import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  socials: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: 'MOE MANZOOR',
    title: 'President & CEO, Founder',
    bio: `Mr. Manzoor is the founder, Chief Executive Officer, Director and President of Morex Capital Corp...`,
    socials: ['📘', '✉️', '💼'],
  },
  {
    name: 'MARIA TILOTTA',
    title: 'Chief Compliance Officer, Co-Founder',
    bio: `Maria has extensive experience in regulatory compliance...`,
    socials: ['💼', '✉️'],
  },
  {
    name: 'DJAMAL SALEH',
    title: 'Investor Relations',
    bio: `Djamel specializes in client engagement and investment strategy...`,
    socials: ['📘'],
  },
];

export default function MeetTheTeamCarousel() {
  return (
    <div className="font-serif text-blue-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: 'url("/assets/team-hero.jpg")' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          MEET THE PEOPLE WHO MAKE IT HAPPEN
        </h1>
        <p className="text-lg">Creators of Your Experience</p>
        <div className="absolute bottom-4 animate-bounce text-2xl">↓</div>
      </section>

      {/* Swiper Carousel */}
      <section className="bg-[#E6DBC8] py-12 px-6 md:px-20 transition-all duration-500 ease-in-out">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {teamMembers.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#BFA76A] mb-2">{member.name}</h2>
                <h3 className="text-lg font-bold text-blue-900 underline mb-4">{member.title}</h3>
                <p className="text-sm max-w-4xl mx-auto leading-relaxed">{member.bio}</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                  {member.socials.map((icon, j) => (
                    <span key={j} className="text-2xl bg-white p-2 rounded-full shadow">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Team Footer */}
      <section className="bg-[#D3DDE4] py-8 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 text-center text-sm text-blue-900">
        {[
          { name: 'Djamel Saleh', role: 'Investor Relations' },
          { name: 'Maria Tilotta', role: 'Chief Compliance Officer, Co-Founder' },
          { name: 'Atul Mehra', role: 'Vice President' },
        ].map((member, i) => (
          <div key={i} className="py-4">
            <h4 className="font-bold">{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
