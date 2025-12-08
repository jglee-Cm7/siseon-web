import { cn } from "@/lib/utils";

export function LocationSection() {
  return (
    <section className="bg-[url('/images/background.avif')]">
      <div className="h-full bg-white/90 px-6 py-12 md:px-30 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex h-full flex-col items-center justify-center gap-6">
            {/* Title */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-4">
                <span className="text-[12px] text-[#404040] md:text-[14px]">
                  #우리의 비전
                </span>
                <span className="text-[12px] text-[#404040] md:text-[14px]">
                  #도시
                </span>
              </div>
              <h3 className="text-[26px] font-bold text-[#1A1A1A] md:text-[36px]">
                오시는 길
              </h3>
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex w-full flex-col gap-4 md:w-[480px]",
                "[&>div]:flex [&>div]:items-center [&>div]:gap-4",
                "[&_span]:flex-1 [&_span]:text-center [&_span]:text-[12px] [&_span]:md:text-[18px]",
              )}
            >
              <div className="[&>span]:font-bold">
                <span>예배</span>
                <span>시간</span>
                <span>장소</span>
              </div>
              <div>
                <span>주일 오전 예배</span>
                <span>11:00 ~ 12:30</span>
                <span>본당</span>
              </div>
              <div>
                <span>주일 오후 예배</span>
                <span>14:00 ~ 15:00</span>
                <span>본당</span>
              </div>
              <div>
                <span>주일 어린이 예배</span>
                <span>11:00 ~ 12:00</span>
                <span>본당</span>
              </div>
              <div>
                <span>금요기도회</span>
                <span>20:30 ~ 22:00</span>
                <span>본당</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
