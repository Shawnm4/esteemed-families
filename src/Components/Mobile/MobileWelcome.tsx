import "./MobileWelcome.css";
export default function MobileWelcome() {
  return (
    <section className="welcome-background-section 2xl:hidden">
      <div className="flex justify-center welcome-content">
        <div className=" flex items-center  text-white">
          <div>
            <div className="font-semibold  drop-shadow-lg">WELCOME TO</div>
            <div style={{ fontFamily: "Lora" }} className="  drop-shadow-lg">
              Esteemed Families LLC
            </div>
            <div style={{ fontFamily: "Inter" }} className=" drop-shadow-lg">
              "Building a better me..."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
