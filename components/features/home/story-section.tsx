export function StorySection() {
  return (
    <section className="h-[calc(100dvh-180px)] max-h-[760px] bg-[url('/images/background.avif')]">
      <div className="h-full bg-white/90 px-6 py-12">
        <div className="mx-auto h-full max-w-[1440px]">
          <div className="flex h-full flex-col justify-around">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-[#404040] md:text-[14px]">
                #시선교회
              </span>
              <h2 className="text-[26px] font-bold text-[#1A1A1A] md:text-[36px]">
                개척 이야기
              </h2>
            </div>

            {/* Content */}
            <div className="flex gap-16">
              {/* Left Timeline Navigation */}
              <div className="flex flex-col items-start">
                <div className="relative flex flex-col">
                  {/* Timeline line */}
                  <div className="absolute top-0 left-2 h-full w-px bg-gray-300"></div>

                  {/* Timeline items */}
                  <div className="flex items-center gap-4 py-4">
                    <div className="relative z-10 h-4 w-4 rounded-full bg-gray-800"></div>
                    <span className="font-medium text-gray-800">꿈과 마음</span>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <div className="relative z-10 h-4 w-4 rounded-full border border-gray-300 bg-white"></div>
                    <span className="text-gray-400">마음의 연결</span>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <div className="relative z-10 h-4 w-4 rounded-full border border-gray-300 bg-white"></div>
                    <span className="text-gray-400">교회의 형태</span>
                  </div>
                </div>
              </div>

              {/* Right Main Content */}
              <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800">
                    Ep.1 점. 시선교회 개척의 시작.
                  </h3>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-800 italic">
                    &quot;우리에게 모험처럼 보이는 일이 하나님에게도 모험일 수는
                    없습니다.&quot;
                  </blockquote>

                  {/* Content paragraphs */}
                  <div className="space-y-4 text-gray-800">
                    <p>
                      개척이라는 불확실한 모험에 동참한 마음들, 대체 어떤
                      생각으로 이 도전에 뛰어 든 걸까요?
                    </p>
                    <p>
                      교회개척을 향한 시작은 어쩌면 용기일지도, 사랑일지도,
                      복음에 대한 열정일지도 모르겠습니다. 많은 관심과 기도
                      부탁드립니다.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <button className="border border-gray-800 bg-white px-6 py-3 text-gray-800 transition-colors hover:bg-gray-50">
                    영상 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
