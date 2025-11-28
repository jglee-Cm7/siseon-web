export function HeroSection() {
  return (
    <section className="h-[calc(100dvh-180px)] max-h-[700px] bg-[#1A1A1A] p-6">
      <div className="mx-auto h-full max-w-[1440px]">
        <div className="flex h-full flex-col justify-around">
          <h1 className="font-poiret text-[40px] text-white md:text-[64px]">
            behold the goodness of God
          </h1>
          <p className="line-height-[1.5] font-nanum text-[16px] font-bold tracking-[0.02em] text-white md:text-[40px]">
            하나님의 시선 <br /> 우리의 시선 <br /> 선하신 하나님을 바라보라
          </p>
        </div>
      </div>
    </section>
  );
}
