'use client';
import React, { useState } from 'react';
import FadeIn from '../../ui/FadeIn';

interface TimelineItem {
  id: number;
  title: string;
  episodeTitle: string;
  content: string[];
  videoUrl?: string; // Optional video URL for each item
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: '꿈과 마음',
    episodeTitle: 'Ep.1 점. 시선교회 개척의 시작.',
    content: [
      '"우리에게 모험처럼 보이는 일이 하나님에게도 모험일 수는 없습니다."',
      '개척이라는 불확실한 모험에 동참한 마음들, 대체 어떤 생각으로 이 도전에 뛰어든 걸까요?',
      '교회개척을 향한 시작은 어쩌면 용기일지도, 사랑일지도, 복음에 대한 열정일지도 모르겠습니다. 많은 관심과 기도 부탁드립니다'
    ],
    videoUrl: '#' // Replace with actual URL
  },
  {
    id: 2,
    title: '마음의 연결',
    episodeTitle: 'Ep.2 선. 함께하는 사람들의 이야기.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    ],
    videoUrl: '#' // Replace with actual URL
  },
  {
    id: 3,
    title: '교회의 형태',
    episodeTitle: 'Ep.3 면. 시선교회가 그리는 미래.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mauris vel lectus tempor.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
    ],
    videoUrl: '#' // Replace with actual URL
  }
];

export function StorySection() {
  const [activeItem, setActiveItem] = useState(0);
  const currentData = timelineData[activeItem];

  const handleVideoClick = () => {
    if (currentData.videoUrl && currentData.videoUrl !== '#') {
      // Handle video link - could be external link or modal
      window.open(currentData.videoUrl, '_blank');
    }
  };

  return (
    <section className="bg-[url('/images/background.avif')] ">
      <div className="h-full bg-white/90 px-6 py-12 md:px-30">
        <div className="mx-auto h-full max-w-[1440px]">
          <div className="flex h-full flex-col">
            {/* Title */}
            <div className="mb-12 flex flex-col gap-2 md:mb-16">
              <span className="text-[12px] text-[#404040] md:text-[14px]">
                #시선교회
              </span>
              <h2 className="text-[26px] font-bold text-[#1A1A1A] md:text-[36px]">
                개척 이야기
              </h2>
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-16 md:flex-row">
              {/* Left Timeline Navigation */}
              <div className="flex flex-col items-start">
                <div className="relative flex h-[140px] flex-col md:h-auto">
                  {/* Timeline line */}
                  <div className="absolute top-0 left-2 h-[70%] w-px translate-y-6 bg-[#CACACA] md:h-[90%] md:translate-y-3"></div>
                  
                  {/* Timeline items */}
                  <div className="flex flex-1 flex-col md:gap-16">
                    {timelineData.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveItem(index)}
                        className="group flex flex-1 items-center gap-4 transition-all duration-300"
                      >
                        <div 
                          className={`relative z-10 h-4 w-4 rounded-full transition-all duration-300 ${
                            activeItem === index 
                              ? 'scale-125 bg-[#2277B2]' 
                              : 'border border-gray-300 bg-white'
                          }`}
                        />
                        <span 
                          className={`font-bold transition-colors duration-300 ${
                            activeItem === index 
                              ? 'text-[#2277B2]' 
                              : 'text-[#757575] hover:text-[#2277B2]/80'
                          }`}
                        >
                          {item.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Main Content */}
              <div className="flex flex-1 flex-col">
                <div className="relative min-h-[200px] md:min-h-[300px]">
                  <FadeIn 
                    key={activeItem} 
                    direction="up" 
                    duration="slow"
                    className="flex flex-col"
                  >
                    {/* Title with increased margin bottom */}
                    <h3 className="mb-6 text-[16px] font-bold text-[#1A1A1A] md:mb-8 md:text-2xl">
                      {currentData.episodeTitle}
                    </h3>
                    
                    {/* Content paragraphs */}
                    <div className="space-y-6 text-[12px] break-keep md:text-lg">
                      {currentData.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Button - now part of the fading content */}
                    <div className="pt-8">
                      <button 
                        onClick={handleVideoClick}
                        className="hover:bg-accent h-9 border-[1.5px] border-black bg-white px-14 text-sm transition-colors hover:cursor-pointer md:h-12 md:px-4 md:font-bold"
                      >
                        영상 보기
                      </button>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}