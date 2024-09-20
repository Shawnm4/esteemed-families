import ReusableButton from "../Components/Ant/ReusableButton";
import { EColors } from "../Utils/Enums/colors";

export default function TopNavBar() {
  return (
    <nav
      style={{ backgroundColor: EColors.bgprimary }}
      className="flex justify-center  h-24"
    >
      <header className="flex  ">
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
        <div>Welcome</div>
        <div>About</div>
        <div>Services</div>
        <div>Investment</div>
      </section>
      <div className="flex items-center">
        <ReusableButton className="h-10 w-25">Contact Us</ReusableButton>
      </div>
    </nav>
  );
}
