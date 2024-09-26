import { useNavigate } from "react-router-dom";
import { EColors } from "../../Utils/Enums/colors";
import { ERoute } from "../../Utils/Enums/routes";

export default function Footer() {
  const navigate = useNavigate();

  // NAVIGATION FUNCTIONS
  function navigateToHomePage() {
    navigate(ERoute.ROOT);
  }
  function navigateToAboutDenisePage() {
    navigate(ERoute.ABOUTDENISE);
  }
  function navigateToContactPage() {
    navigate(ERoute.CONTACT);
  }
  function navigateToInvestmentPage() {
    navigate(ERoute.INVESTMENT);
  }
  function navigateToIndividualTherapyPage() {
    navigate(ERoute.INDIVIDUALTHERAPY);
  }
  function navigateToChildTherapyPage() {
    navigate(ERoute.CHILDTHERAPY);
  }
  function navigateToCoupleTherapyPage() {
    navigate(ERoute.COUPLESTHERAPY);
  }
  function navigateToNyansapoPage() {
    navigate(ERoute.NYANSAPOTHERAPY);
  }
  function navigateToMaatPage() {
    navigate(ERoute.MAATTHERAPY);
  }
  function navigateToConsultationPage() {
    navigate(ERoute.CONSULTATION);
  }

  return (
    <>
      <div
        style={{ backgroundColor: EColors.bgprimary }}
        className="mt-32 flex justify-center "
      >
        <div className="w-1/2  ">
          <div className="text-center mt-28 mb-8 text-4xl font-semibold">
            Denise Montgomery
          </div>
          <div className="text-center mb-4">
            Email: <strong>Denise@esteemedfamilies.com</strong>{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          borderColor: EColors.textSecondary,
          backgroundColor: EColors.bgprimary,
        }}
        className="w-full border-b  "
      ></div>
      <div
        style={{ backgroundColor: EColors.bgprimary }}
        className="flex justify-center "
      >
        <div className="w-1/2  flex justify-evenly mt-4 mb-60 ">
          <ul className="grid grid-cols-1 gap-4 ">
            <li
              onClick={navigateToHomePage}
              className="underline cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={navigateToAboutDenisePage}
              className="underline cursor-pointer"
            >
              About Denise
            </li>
            <li
              onClick={navigateToContactPage}
              className="underline cursor-pointer"
            >
              Contact
            </li>
            <li
              onClick={navigateToInvestmentPage}
              className="underline cursor-pointer"
            >
              Investment
            </li>
          </ul>
          <ul className="grid grid-cols-1 gap-6 ">
            <li className="text-xl">Services</li>
            <li
              onClick={navigateToIndividualTherapyPage}
              className="underline cursor-pointer"
            >
              Individual Therapy
            </li>
            <li
              onClick={navigateToChildTherapyPage}
              className="underline cursor-pointer"
            >
              Child and Adolescent Therapy
            </li>
            <li
              onClick={navigateToCoupleTherapyPage}
              className="underline cursor-pointer"
            >
              Couple and Relational Therapy
            </li>
            <li
              onClick={navigateToNyansapoPage}
              className="underline cursor-pointer"
            >
              Nyansapo Learning Circle
            </li>
            <li
              onClick={navigateToMaatPage}
              className="underline cursor-pointer"
            >
              Maat Healing Circles
            </li>
            <li
              onClick={navigateToConsultationPage}
              className="underline cursor-pointer"
            >
              Consultation and Supervision Circle
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
