import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

export function CitySection() {
  return (
    <section className="bg-[url('/images/background-city.avif')] bg-cover bg-bottom">
      <div className="h-full w-full bg-black/80 px-6 py-12 md:px-30">
        <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center space-y-8">
          {/* Title */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-6 text-[12px] text-white">
              <span>#도시</span>
              <span>#우리의 비전</span>
            </div>
            <h3 className="text-[26px] font-bold text-white md:text-[36px]">
              CITY
            </h3>
          </div>

          {/* Content */}
          <div className="flex max-w-[1000px] flex-col items-center gap-8 break-keep text-white [&>p]:text-center [&>p]:text-[12px] [&>p]:leading-[1.75] [&>p]:md:text-[20px]">
            <span className="text-[22px] font-bold md:text-[28px]">
              공동체가 섬기는 도시
            </span>
            <p>
              도시는 다양한 문화가 공존합니다. 그리고 21세기 도시에서는 다른
              문화로 인한 심각한 갈등을 겪고 있습니다.
            </p>
            <p>
              시선교회는 성별, 나이, 경제적 상황 등이 다양한 이곳에서 복음이
              도시의 사람들에게 희망을 준다는 것을 굳게 믿으며 다양한 방식으로
              도시를 섬기려고 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
