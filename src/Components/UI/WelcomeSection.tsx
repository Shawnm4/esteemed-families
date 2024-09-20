import ReusableButton from "../Ant/ReusableButton";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  //   const sectionStyle = {
  //     backgroundImage: "url(/family-background1.jpg)",
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     height: "100vh",
  //     width: "100%",
  //   };

  return (
    <section className="background-section  ">
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
            <div className="mt-5">
              <ReusableButton>Learn More</ReusableButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
