import CollegeCardsSection from "./CollegeCardsSection";
import CollegeImageGallery from "./CollegeImageGallery";
import HeroSection from "./HeroSection";
import ResearchPapersSection from "./ResearchPapersSection";
import ReviewSection from "./ReviewSection";

function Home() {
  return (
    <>
      <HeroSection />
      <CollegeCardsSection />
      <CollegeImageGallery />
      <ResearchPapersSection />
      <ReviewSection />
    </>
  );
}

export default Home;
