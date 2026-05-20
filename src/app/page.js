import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import FacilitySlider from "@/components/FacilitySlider";
import FeaturedSection from "@/components/FeaturedSection";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FeaturedSection></FeaturedSection>
    <AboutSection></AboutSection>
      <FacilitySlider></FacilitySlider>
    </div>
  );
}
