import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

function CommunityImages({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center justify-center gap-4",
        className,
      )}
    >
      <div className="flex items-end gap-4">
        <Image
          src="/images/community-1.webp"
          alt="community-image"
          width={230}
          height={300}
          className="aspect-23/30 w-[140px] md:w-[160px] lg:w-[230px]"
        />
        <Image
          src="/images/community-2.webp"
          alt="community-image"
          width={230}
          height={214}
          className="aspect-230/214 w-[140px] md:w-[160px] lg:w-[230px]"
        />
      </div>
      <div className="flex items-start gap-4">
        <Image
          src="/images/community-3.webp"
          alt="community-image"
          width={230}
          height={214}
          className="aspect-230/214 w-[140px] md:w-[160px] lg:w-[230px]"
        />
        <Image
          src="/images/community-4.webp"
          alt="community-image"
          width={230}
          height={270}
          className="aspect-23/27 w-[140px] md:w-[160px] lg:w-[230px]"
        />
      </div>
    </div>
  );
}

export function CommunitySection() {
  return (
    <section className="bg-[url('/images/background.avif')] md:max-h-[800px]">
      <div className="h-full bg-white/90 px-6 py-12 md:px-30 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex h-full flex-col gap-6 md:flex-row">
            <div className="flex h-full flex-1 flex-col justify-center gap-10">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-[12px] text-[#404040] md:text-[14px]">
                    #우리의 비전
                  </span>
                  <span className="text-[12px] text-[#404040] md:text-[14px]">
                    #공동체
                  </span>
                </div>
                <h3 className="text-[26px] font-bold text-[#1A1A1A] md:text-[36px]">
                  COMMUNITY
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-16 md:flex-row">
                <div className="flex flex-1 flex-col justify-between gap-8">
                  {/* Title */}
                  <span className="text-[16px] font-bold text-[#1A1A1A] md:text-2xl">
                    복음 중심 공동체
                  </span>

                  <CommunityImages className="flex md:hidden" />

                  {/* Content paragraphs */}
                  <div className="space-y-6 text-[12px] break-keep md:text-lg">
                    <p className="text-[12px] leading-[1.75] break-keep md:text-[20px] md:leading-loose [&>br]:hidden [&>br]:md:block [&>span]:font-bold">
                      <span>복음으로 만들어진 공동체</span>
                      는 일종의 아이러니를 품습니다.
                      <br />
                      <span>우리는 겸손하지만 담대합니다.</span> 올바른 삶을
                      추구하지만 <br />
                      <span>실패한 삶을 환영합니다. 어떤 이도 환대하며</span>,
                      서로의 차이를 <br />
                      복음으로 극복하며 하나를 이룹니다.
                    </p>
                    <p className="text-[12px] leading-[1.75] break-keep md:text-[20px] md:leading-loose [&>span]:font-bold">
                      당신이 어떤 생각을 가지고 있든,{" "}
                      <span>우리는 당신을 환영합니다.</span>
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-4 flex w-full items-center justify-center gap-4 md:justify-start md:gap-12">
                    <button className="hover:bg-accent h-9 flex-1 border-[1.5px] border-black bg-transparent text-sm text-black transition-colors hover:cursor-pointer md:h-12 md:w-34 md:flex-none">
                      섬기는 사람들
                    </button>
                    <button className="hover:bg-accent flex h-9 flex-1 items-center justify-center gap-1 border-[1.5px] border-black bg-transparent text-sm text-black transition-colors hover:cursor-pointer md:h-12 md:w-34 md:flex-none">
                      월간지 보기 <ChevronRightIcon className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CommunityImages className="hidden md:flex" />
          </div>
        </div>
      </div>
    </section>
  );
}
