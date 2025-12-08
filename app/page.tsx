import {
  GospelSection,
  HeroSection,
  StorySection,
  CommunitySection,
  CitySection,
  WelcomeSection,
  LocationSection,
} from "@/components/features/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <GospelSection />
      <CommunitySection />
      <CitySection />
      <WelcomeSection />
      <LocationSection />
    </>
  );
}
