export function HeroSection() {
  return (
    <section className="h-[calc(100dvh-180px)] max-h-[700px] bg-[#1A1A1A] p-6">
      <div className="mx-auto h-full max-w-[1440px]">
        <div className="flex h-full flex-col justify-end gap-16 pb-[40%] md:justify-around md:gap-0 md:pb-0">
          <h1 className="font-poiret text-[40px] text-white md:text-[64px]">
            behold the
            <br className="md:hidden" /> goodness of God
          </h1>
          <p className="font-nanum text-[16px] font-bold tracking-[0.02em] text-white md:text-[32px] md:leading-[1.75]">
            하나님의 시선 <br /> 우리의 시선 <br /> 선하신 하나님을 바라보라
          </p>
        </div>
      </div>
    </section>
  );
}
