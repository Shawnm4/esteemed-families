import MobileWelcome from "../Mobile/MobileWelcome";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <>
      <section className="background-section hidden 2xl:inline-block  ">
        <div className="flex justify-center h-3/4 content">
          <div className=" flex items-center  text-white">
            <div>
              <div className="text-5xl font-semibold mb-3 drop-shadow-lg">
                WELCOME TO
              </div>
              <div
                style={{ fontFamily: "Lora" }}
                className="text-6xl mb-3 drop-shadow-lg"
              >
                Esteemed Families LLC
              </div>
              <div className="text-2xl mb-10 drop-shadow-lg">
                "Building a better me..."
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileWelcome />
    </>
  );
}
