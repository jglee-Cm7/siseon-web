export function StorySection() {
  return (
    <section className="bg-[url('/images/background.avif')] ">
      <div className="h-full bg-white/90 px-6 py-12 md:px-30">
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
            <div className="flex flex-col gap-16 md:flex-row">
              {/* Left Timeline Navigation */}
              <div className="flex flex-col items-start">
                <div className="relative flex h-[140px] flex-col md:h-auto">
                  {/* Timeline line */}
                  <div className="absolute top-0 left-2 h-[70%] w-px translate-y-6 bg-[#CACACA] md:h-[90%] md:translate-y-3"></div>

                  {/* Timeline items */}
                  <div className="flex flex-1 flex-col md:gap-16">
                    <div className="flex flex-1 items-center gap-4">
                      <div className="relative z-10 h-4 w-4 rounded-full bg-[#2277B2]"></div>
                      <span className="font-bold text-[#2277B2]">
                        꿈과 마음
                      </span>
                    </div>

                    <div className="flex flex-1 items-center gap-4">
                      <div className="relative z-10 h-4 w-4 rounded-full border border-gray-300 bg-white"></div>
                      <span className="font-bold text-[#757575]">
                        마음의 연결
                      </span>
                    </div>

                    <div className="flex flex-1 items-center gap-4">
                      <div className="relative z-10 h-4 w-4 rounded-full border border-gray-300 bg-white"></div>
                      <span className="font-bold text-[#757575]">
                        교회의 형태
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Main Content */}
              <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-[16px] font-bold text-[#1A1A1A] md:text-2xl">
                    Ep.1 점. 시선교회 개척의 시작.
                  </h3>

                  {/* Content paragraphs */}
                  <div className="space-y-6 text-[12px] break-keep md:text-lg">
                    <p>
                      &quot;우리에게 모험처럼 보이는 일이 하나님에게도 모험일
                      수는 없습니다.&quot;
                    </p>
                    <p>
                      개척이라는 불확실한 모험에 동참한 마음들, 대체 어떤
                      생각으로 이 도전에 뛰어든 걸까요?
                    </p>
                    <p>
                      교회개척을 향한 시작은 어쩌면 용기일지도, 사랑일지도,
                      복음에 대한 열정일지도 모르겠습니다. 많은 관심과 기도
                      부탁드립니다
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="mx-auto mt-8 md:mx-0">
                  <button className="hover:bg-accent h-9 border-[1.5px] border-black bg-white px-14 text-sm transition-colors hover:cursor-pointer md:h-12 md:px-4 md:font-bold">
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
