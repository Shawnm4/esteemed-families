import { EColors } from "../../Utils/Enums/colors";

export default function Footer() {
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
            <li className="underline cursor-pointer">Home</li>
            <li className="underline cursor-pointer">About</li>
            <li className="underline cursor-pointer">Contact</li>
            <li className="underline cursor-pointer">Investment</li>
          </ul>
          <ul className="grid grid-cols-1 gap-6 ">
            <li className="text-xl">Services</li>
            <li className="underline cursor-pointer">Individual Therapy</li>
            <li className="underline cursor-pointer">
              Child and Adolescent Therapy
            </li>
            <li className="underline cursor-pointer">
              Couple and Relational Therapy
            </li>
            <li className="underline cursor-pointer">
              Nyansapo Learning Circle
            </li>
            <li className="underline cursor-pointer">Maat Healing Circles</li>
            <li className="underline cursor-pointer">
              Consultation and Supervision Circle
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
