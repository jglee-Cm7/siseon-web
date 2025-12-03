import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

export function GospelSection() {
  return (
    <section className="bg-black px-6 py-12 md:px-30">
      <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center space-y-8">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-6 text-[12px] text-white">
            <span>#우리의 비전</span>
            <span>#복음</span>
          </div>
          <h3 className="text-[26px] font-bold text-white md:text-[36px]">
            GOSPEL
          </h3>
        </div>

        {/* Content */}
        <div className="flex max-w-[1000px] flex-col items-center gap-4 break-keep text-white [&>p]:text-center [&>p]:text-[12px] [&>p]:leading-[1.75] [&>p]:md:text-lg">
          <span className="text-[22px] font-bold md:text-[28px]">
            도시 속 복음
          </span>
          <p className="text-[12px] leading-[1.75]">
            기독교의 핵심메시지인 복음은 하나님께서 우리를 위해서 행하신 일에
            관한 소식입니다.
          </p>
          <p>
            이 복음은 우리가 생각했던 것보다 훨씬 비참한 사람이며 동시에 우리가
            생각보다 훨씬 영광스런 사랑을 받고 있다는 것을 말합니다. 또한 복음은
            도시 속에 있습니다.
          </p>
          <p>
            시선교회는 오늘날 도시의 문화 속에 적극적으로 들어가 사람들이
            알아들을 수 있는 방식으로 복음을 전합니다.
          </p>
        </div>

        {/* Video Image */}
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Image
            src="/images/video-thumbnail.webp"
            alt="gospel-video"
            width={1600}
            height={900}
            className="aspect-[16/9] w-[50dvw] max-w-[700px] object-cover"
          />
          <p className="text-center text-[10px] leading-[1.5] text-white md:text-[28px]">
            단편설교ㅣ당신이 빛나게 해줄게요 | 박현진 목사 | 시광교회
            <br />
            (2025.07.27.)
          </p>
        </div>

        {/* Button */}
        <div className="flex w-full justify-center gap-12">
          <button className="h-9 w-34 border-[1.5px] border-white bg-transparent text-sm text-white transition-colors hover:cursor-pointer hover:bg-white hover:text-black md:h-12">
            더 알아보기
          </button>
          <button className="flex h-9 w-34 items-center justify-center gap-1 border-[1.5px] border-white bg-transparent text-sm text-white transition-colors hover:cursor-pointer hover:bg-white hover:text-black md:h-12">
            설교 더 보기 <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
