import { useEffect } from "react";
import AboutSection from "../Components/UI/AboutSection";
import ProfileSection from "../Components/UI/ProfileSection";
import ServicesSection from "../Components/UI/ServicesSection";
import WelcomeSection from "../Components/UI/WelcomeSection";
import Footer from "../Components/UI/Footer";
import Mobile from "../Components/Mobile/Mobile";

export default function HomeScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="hidden 2xl:inline-block">
        <WelcomeSection />
        <AboutSection />
        <ProfileSection />
        <ServicesSection />
        <Footer />
      </div>
      <div className="lg:hidden ">
        <Mobile />
      </div>
    </>
  );
}
