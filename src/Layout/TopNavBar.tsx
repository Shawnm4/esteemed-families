import ReusableButton from "../Components/Ant/ReusableButton";
import { EColors } from "../Utils/Enums/colors";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../Utils/Enums/routes";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export default function TopNavBar() {
  const navigate = useNavigate();

  // NAVIGATION ROUTES
  function navigateHome() {
    navigate(ERoute.ROOT);
  }
  function navigateToAboutDenise() {
    navigate(ERoute.ABOUTDENISE);
  }
  function navigateToServices() {
    navigate(ERoute.ROOT);
  }
  function navigateToContact() {
    navigate(ERoute.CONTACT);
  }
  function navigateToInvestmentPage() {
    navigate(ERoute.INVESTMENT);
  }

  return (
    <nav
      style={{
        backgroundColor: EColors.bgprimary,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
      className="flex justify-center  h-24"
    >
      <header onClick={navigateHome} className="flex cursor-pointer ">
        <img src="/esteemed-familieslogo.png" />
        <div
          style={{ fontFamily: "Lora" }}
          className="self-center text-2xl font-medium"
        >
          <div>Esteemed</div>
          <div>Families</div>
        </div>
      </header>
      <section className=" w-2/4 flex justify-evenly items-center text-lg ">
        <div className=" cursor-pointer" onClick={navigateHome}>
          Home
        </div>
        <div className="cursor-pointer" onClick={navigateToAboutDenise}>
          About Denise
        </div>
        <div onClick={navigateToServices} className="cursor-pointer">
          Services
        </div>
        <div onClick={navigateToInvestmentPage} className="cursor-pointer">
          Investment
        </div>
      </section>
      <div onClick={navigateToContact} className="flex items-center">
        <ReusableButton className="h-10 w-25">Contact</ReusableButton>
      </div>
    </nav>
  );
}
