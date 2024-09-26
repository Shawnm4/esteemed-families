import { useNavigate } from "react-router-dom";
import { EColors } from "../../Utils/Enums/colors";
import { ERoute } from "../../Utils/Enums/routes";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

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
      <div className="hidden 2xl:inline-block">
        <div
          style={{ backgroundColor: EColors.bgprimary, fontFamily: "Inter" }}
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
          <div
            style={{ fontFamily: "Inter" }}
            className="w-3/4  flex gap-24 justify-evenly mt-4 mb-60 "
          >
            <div className="w-1/4">
              <img src="/esteemed-familieslogo.png" className="w-1/4" />
              <div className="text-xl font-bold">Esteemed Families LLC</div>
              <div style={{ fontFamily: "Inter" }}>
                "Empowering personal growth through tailored therapy and
                coaching. Unlock your potential with compassionate, expert
                guidance on your journey to lasting change."
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-4 ">
              <li className="text-xl font-bold">Browse</li>
              <li
                onClick={navigateToHomePage}
                className="underline cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={navigateToAboutDenisePage}
                className="underline cursor-pointer whitespace-nowrap"
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
            <ul className="grid grid-cols-1 gap-3 ">
              <li className="text-xl font-bold mb-4">Services</li>
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
            <ul className="grid grid-cols-1 gap-4 ">
              <li className="text-xl font-bold">Contact</li>
              <li
                onClick={navigateToHomePage}
                className="underline cursor-pointer"
              >
                <div className="flex gap-2">
                  <PhoneOutlined />
                  <div>202-423-0040</div>
                </div>
              </li>
              <li className="underline cursor-pointer">
                <div className="flex gap-2">
                  <EnvironmentOutlined />
                  <div className="whitespace-nowrap">
                    <a
                      href="https://maps.app.goo.gl/AYb1SDvhW4zzV57S7"
                      target="_blank"
                    >
                      4329 Northview Drive Bowie, Maryland 20716
                    </a>
                  </div>
                </div>
              </li>
              <li className="underline cursor-pointer">
                <div className="flex gap-2">
                  <MailOutlined />
                  <div>Denise@esteemedfamilies.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ backgroundColor: EColors.bgprimary, fontFamily: "Inter" }}
          className="mt-12 flex justify-center "
        >
          <div className="w-full ">
            <div className="text-center mt-14 mb-4 text-xl font-semibold">
              Denise Montgomery
            </div>
            <div className="text-xs text-center mb-4">
              Email: <strong>Denise@esteemedfamilies.com</strong>{" "}
            </div>
            <div className="flex justify-center text-center">
              <div className="grid grid-cols-1 grid-rows-auto gap-10">
                <ul className="grid grid-cols-1 grid-rows-auto gap-4">
                  <li className="underline">Home</li>
                  <li className="underline">About Denise</li>
                  <li className="underline">Contact</li>
                  <li className="underline">Investment</li>
                </ul>
                <ul className="grid grid-cols-1 grid-rows-auto gap-4">
                  <li className="underline">Individual Therapy</li>
                  <li className="underline">Child and Adolescent Therapy</li>
                  <li className="underline">Couples and Relational Therapy</li>
                  <li className="underline">Nyansapo Learning Circles</li>
                  <li className="underline">Ma'at Healing Circles</li>
                  <li className="underline">
                    Consultation and Supervision Circles
                  </li>
                </ul>
                <ul className="text-xs grid grid-cols-1 grid-rows-auto gap-4 ">
                  <li className="flex gap-2">
                    <PhoneOutlined />
                    <div className="underline">202-423-0040</div>
                  </li>
                  <li className="flex gap-2 whitespace-nowrap">
                    <EnvironmentOutlined />
                    <div className="underline">
                      4329 Northview Drive Bowie, Maryland 20716
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <MailOutlined />
                    <div className="underline">Denise@esteemedfamilies.com</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
