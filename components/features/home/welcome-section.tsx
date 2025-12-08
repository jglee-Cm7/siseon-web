import { PhoneIcon } from "lucide-react";
import Image from "next/image";

export function WelcomeSection() {
  return (
    <section className="bg-[url('/images/background.avif')]">
      <div className="h-full bg-white/90 px-6 py-12 md:px-30 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex h-full flex-col gap-6 md:flex-row">
            <div className="flex h-full flex-1 flex-col justify-center gap-10">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-[12px] text-[#404040] md:text-[14px]">
                    #시선교회
                  </span>
                  <span className="text-[12px] text-[#404040] md:text-[14px]">
                    #첫방문
                  </span>
                </div>
                <h3 className="text-[26px] font-bold text-[#1A1A1A] md:text-[36px]">
                  처음 방문하셨다면
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-16 md:flex-row">
                <div className="flex flex-1 flex-col justify-between gap-8">
                  {/* Content paragraphs */}
                  <div className="space-y-6 text-[12px] break-keep md:text-lg">
                    <p className="text-[12px] leading-[1.75] break-keep md:text-[20px] md:leading-loose [&>br]:hidden [&>br]:md:block">
                      환영합니다!
                      <br />
                      새가족팀이 여러분들을 맞이할 준비를 하고 있습니다.
                      <br />
                      조용히 예배만 드리고 가고 싶으시다면 안내하는 저희
                      교우에게 말씀해 주세요. 미리 상황을 확인하고 싶으시다면
                      아래로 연락주세요.
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2 text-[12px] md:gap-4 md:text-[20px]">
                    <div className="flex items-center gap-4">
                      <PhoneIcon className="size-3 md:size-5" />
                      <span>박현진</span>
                      <span className="font-bold">010-8876-7712</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <PhoneIcon className="size-3 md:size-5" />
                      <span>오로라</span>
                      <span className="font-bold">010-2268-8278</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-1 items-center justify-center md:flex">
              <Image
                src="/images/welcome-image.webp"
                alt="welcome-image"
                width={520}
                height={360}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
