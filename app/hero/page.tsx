import React from 'react';
import { FiCalendar, FiArrowDown } from 'react-icons/fi';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4 py-16 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl w-full">
        {/* Top Badge */}
        <div className="flex justify-center mb-12 animate-fade-in " >
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-6 py-4 shadow-[0_-2px_4px_#7dd3c0,0_2px_4px_#7dd3c0] duration-300">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/2_Logo_Bulle.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h2 className="text-lg text-black md:text-xl font-bold tracking-tight">
              CRÉER UN SITE WEB{' '}
              <span className="underline decoration-2 underline-offset-4">
                VRAIMENT
              </span>{' '}
              UNIQUE
            </h2>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Votre{' '}
            <span className="text-[#7dd3c0]">site</span>{' '}
            doit{' '}
            <span className="text-[#7dd3c0]">donner envie</span>{' '}
            de
            <br />
            <span className="text-[#7dd3c0]">rester</span>, pas de{' '}
            <span className="relative inline-block">
              <span className="text-[#7dd3c0] line-through decoration-black">
                revenir
                {' '}
                <span className="text-white">en</span>
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="text-[#7dd3c0] line-through decoration-black">
                arrière
              </span>
            </span>
            <span className="text-white">.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12 animate-fade-in-up animation-delay-200">
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Design moderne, SEO solide, Suivi complet :
            <br />
            on construit un site qui retient vos visiteurs et vous apporte des résultats.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
          {/* Primary CTA with Arrow */}
          <div className="relative group mb-10 sm:mb-0">
            <button className="relative inline-flex items-center gap-3 bg-[#7dd3c0] hover:bg-[#6bc4b0] text-[#1a1a1a] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <FiCalendar className="w-5 h-5" />
              <span className="text-lg">Prendre RDV</span>
            </button>
            
            {/* "Un p'tit click ?" annotation */}
            <div className="absolute -bottom-12 -left-10 flex items-start gap-2 animate-bounce-subtle">
              <div className="relative w-32 h-auto">
                <Image
                  src="/3_Un_Ptit_Click.png"
                  alt="Un p'tit click ?"
                  width={128}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <button className="inline-flex items-center gap-3 bg-transparent border-2 border-[#7dd3c0] text-[#7dd3c0] hover:bg-[#7dd3c0]/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group">
            <span className="text-lg">Découvrir nos projets</span>
            <FiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#7dd3c0] rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#7dd3c0]/50 rounded-full animate-pulse animation-delay-300" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#7dd3c0]/30 rounded-full animate-pulse animation-delay-600" />
    </section>
  );
}