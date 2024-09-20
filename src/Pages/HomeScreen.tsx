import AboutSection from "../Components/UI/AboutSection";
import ProfileSection from "../Components/UI/ProfileSection";
import ServicesSection from "../Components/UI/ServicesSection";
import WelcomeSection from "../Components/UI/WelcomeSection";

export default function HomeScreen() {
  return (
    <div>
      <WelcomeSection />
      <AboutSection />
      <ProfileSection />
      <ServicesSection />
    </div>
  );
}
