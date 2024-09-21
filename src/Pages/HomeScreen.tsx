import { useEffect } from "react";
import AboutSection from "../Components/UI/AboutSection";
import ProfileSection from "../Components/UI/ProfileSection";
import ServicesSection from "../Components/UI/ServicesSection";
import WelcomeSection from "../Components/UI/WelcomeSection";

export default function HomeScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <WelcomeSection />
      <AboutSection />
      <ProfileSection />
      <ServicesSection />
    </div>
  );
}
